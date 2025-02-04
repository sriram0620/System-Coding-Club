"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CircuitAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create circuit lines
    const lines: THREE.Line[] = [];
    const material = new THREE.LineBasicMaterial({ color: 0x00ff00, opacity: 0.5, transparent: true });

    for (let i = 0; i < 50; i++) {
      const points: THREE.Vector3[] = [];
      let x = Math.random() * 40 - 20;
      let y = Math.random() * 40 - 20;
      let z = Math.random() * 40 - 20;

      for (let j = 0; j < 5; j++) {
        points.push(new THREE.Vector3(x, y, z));
        const direction = Math.floor(Math.random() * 3);
        switch (direction) {
          case 0:
            x += Math.random() * 4 - 2;
            break;
          case 1:
            y += Math.random() * 4 - 2;
            break;
          case 2:
            z += Math.random() * 4 - 2;
            break;
        }
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, material);
      lines.push(line);
      scene.add(line);
    }

    camera.position.z = 30;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      lines.forEach((line) => {
        line.rotation.x += 0.001;
        line.rotation.y += 0.001;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-0" />;
}