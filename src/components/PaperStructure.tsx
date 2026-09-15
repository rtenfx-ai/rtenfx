import { useEffect, useRef, useState } from "react";
import {
  CanvasTexture,
  Color,
  DirectionalLight,
  DoubleSide,
  EdgesGeometry,
  Fog,
  Group,
  HemisphereLight,
  LineBasicMaterial,
  LineLoop,
  LineSegments,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  OctahedronGeometry,
  PerspectiveCamera,
  PlaneGeometry,
  BufferGeometry,
  Scene,
  SRGBColorSpace,
  Vector3,
  WebGLRenderer,
} from "three";

/**
 * Draws a single paper "page" texture: a ruled sheet with an ink heading bar.
 * Keeps the 3D structure in the same visual language as the printed page.
 */
function createPageTexture(seed: number) {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 340;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  ctx.fillStyle = "#f8f6f0";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // heading bar
  ctx.fillStyle = "rgba(27,26,23,0.82)";
  const headingWidth = 92 + ((seed * 37) % 70);
  ctx.fillRect(24, 30, headingWidth, 9);

  // eyebrow rule
  ctx.fillStyle = "rgba(157,63,38,0.75)";
  ctx.fillRect(24, 52, 44, 3);

  // ruled body lines, ragged right edge
  for (let i = 0; i < 9; i += 1) {
    const y = 82 + i * 22;
    const width = 208 - ((seed * (i + 3) * 13) % 62);
    ctx.fillStyle = i % 3 === 2 ? "rgba(27,26,23,0.22)" : "rgba(27,26,23,0.32)";
    ctx.fillRect(24, y, Math.max(60, width), 3);
  }

  // folio dot
  ctx.fillStyle = "rgba(157,63,38,0.6)";
  ctx.fillRect(24, 300, 16, 16);

  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  return texture;
}

function ring(radius: number, segments: number) {
  const points: Vector3[] = [];
  for (let i = 0; i <= segments; i += 1) {
    const angle = (i / segments) * Math.PI * 2;
    points.push(
      new Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0),
    );
  }
  return new LineLoop(new BufferGeometry().setFromPoints(points));
}

/** Lightweight CSS structure used only if WebGL is unavailable. */
function StructureFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative h-[320px] w-[320px] [perspective:1100px]">
        <div className="absolute inset-0 animate-[paper-orbit_26s_linear_infinite] rounded-full border border-ink/25" />
        <div className="absolute inset-8 animate-[paper-orbit-alt_34s_linear_infinite] rounded-full border border-ink/20" />
        <div className="absolute inset-20 animate-[paper-orbit_20s_linear_infinite] border border-ink/30" />
        <div className="absolute inset-32 animate-[paper-orbit-alt_28s_linear_infinite] rounded-full border border-seal/40" />
      </div>
    </div>
  );
}

export function PaperStructure({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: WebGLRenderer;
    try {
      renderer = new WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      setFailed(true);
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const paper = new Color("#f0eee6");
    const scene = new Scene();
    scene.fog = new Fog(paper, 11, 26);

    const camera = new PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0, 11.5);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // ---------------------------------------------------------------- lattice
    const lattice = new Group();

    const inkLine = (opacity: number) =>
      new LineBasicMaterial({
        color: new Color("#1b1a17"),
        transparent: true,
        opacity,
        fog: true,
      });

    // armillary rings
    const ringGroup = new Group();
    const ringSpecs: Array<[number, number, number, number, number]> = [
      [3.05, 0, 0, 0, 0.3],
      [3.05, Math.PI / 2.2, 0, 0, 0.24],
      [3.05, 0, Math.PI / 2.6, 0.35, 0.2],
    ];
    ringSpecs.forEach(([radius, rotX, rotY, rotZ, opacity]) => {
      const line = ring(radius, 128);
      line.material = inkLine(opacity);
      line.rotation.set(rotX, rotY, rotZ);
      ringGroup.add(line);
    });
    lattice.add(ringGroup);

    // core: two nested wireframe solids, counter-rotating
    const coreOuter = new LineSegments(
      new EdgesGeometry(new OctahedronGeometry(2.05, 0)),
      inkLine(0.55),
    );
    const coreInner = new LineSegments(
      new EdgesGeometry(new OctahedronGeometry(1.28, 0)),
      inkLine(0.42),
    );
    coreOuter.rotation.set(0.4, 0.3, 0);
    lattice.add(coreOuter);
    lattice.add(coreInner);

    // orbiting paper pages
    const pages: Mesh[] = [];
    const pageGeometry = new PlaneGeometry(1.05, 1.4);
    const pageEdges = new EdgesGeometry(pageGeometry);
    const borderMaterial = inkLine(0.3);
    for (let i = 0; i < 18; i += 1) {
      const texture = createPageTexture(i + 1);
      const material = new MeshStandardMaterial({
        color: new Color("#ffffff"),
        map: texture,
        roughness: 0.95,
        metalness: 0,
        side: DoubleSide,
      });
      const page = new Mesh(pageGeometry, material);
      const angle = (i / 18) * Math.PI * 2 + (i % 3) * 0.12;
      const radius = 3.6 + (i % 4) * 0.34;
      const height = ((i % 5) - 2) * 0.85 + Math.sin(i * 1.7) * 0.35;
      page.position.set(
        Math.cos(angle) * radius,
        height,
        Math.sin(angle) * radius,
      );
      page.lookAt(0, height * 0.2, 0);
      page.rotateY(Math.PI);
      page.rotation.z += (i % 5) * 0.05;
      page.add(new LineSegments(pageEdges, borderMaterial));
      pages.push(page);
      lattice.add(page);
    }

    lattice.rotation.z = 0.08;
    scene.add(lattice);

    scene.add(
      new HemisphereLight(new Color("#ffffff"), new Color("#c9c3ae"), 1.6),
    );
    const keyLight = new DirectionalLight(new Color("#fffaf0"), 2.1);
    keyLight.position.set(4, 6, 5);
    scene.add(keyLight);
    const rimLight = new DirectionalLight(new Color("#d9cfae"), 0.9);
    rimLight.position.set(-5, -3, -4);
    scene.add(rimLight);

    // -------------------------------------------------------------- animation
    const pointer = { x: 0, y: 0 };
    const eased = { x: 0, y: 0 };
    let scrollProgress = 0;
    let visible = true;
    let frame = 0;

    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    const resize = () => {
      const width = container.clientWidth || 1;
      const height = container.clientHeight || 1;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      lattice.position.x = width > 1024 ? 1.85 : 0;
      lattice.position.y = width > 1024 ? 0.15 : 0.4;
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(container);

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 },
    );
    visibilityObserver.observe(container);

    const render = () => {
      frame = window.requestAnimationFrame(render);
      if (!visible && !prefersReducedMotion) return;

      const maxScroll = Math.max(window.innerHeight, 1);
      scrollProgress = MathUtils.clamp(window.scrollY / maxScroll, 0, 1.6);

      const targetX = pointer.y * 0.22;
      const targetY = pointer.x * 0.42;
      eased.x = MathUtils.lerp(eased.x, targetX, 0.045);
      eased.y = MathUtils.lerp(eased.y, targetY, 0.045);

      if (!prefersReducedMotion) {
        const time = performance.now() * 0.0001;
        lattice.rotation.y = time * 1.1 + eased.y + scrollProgress * 0.55;
        lattice.rotation.x = eased.x + scrollProgress * 0.18;
        ringGroup.rotation.y = -time * 1.6;
        coreOuter.rotation.y = time * 2.4 + scrollProgress * 0.9;
        coreInner.rotation.x = time * 2 + 0.35;
        coreInner.rotation.z = -time * 1.4;
        pages.forEach((page, index) => {
          page.rotation.y += 0.0015 + index * 0.00004;
          page.rotation.x =
            Math.sin(performance.now() * 0.00016 + index) * 0.09;
        });
      }

      camera.position.z = 11.5 - scrollProgress * 2.6;
      camera.position.y = scrollProgress * 1.5 - eased.x * 0.9;
      camera.position.x = -eased.y * 0.7;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    render();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
      observer.disconnect();
      visibilityObserver.disconnect();
      scene.traverse((object) => {
        const mesh = object as Mesh;
        if (mesh.geometry) mesh.geometry.dispose?.();
        const material = mesh.material as
          | MeshStandardMaterial
          | LineBasicMaterial
          | undefined;
        if (material) {
          if ("map" in material && material.map) material.map.dispose();
          material.dispose?.();
        }
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className={className}>
      {failed ? (
        <StructureFallback />
      ) : (
        <div
          ref={containerRef}
          aria-hidden="true"
          className="h-full w-full [mask-image:radial-gradient(circle_at_50%_48%,black_58%,transparent_88%)]"
        />
      )}
    </div>
  );
}
