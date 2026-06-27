import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { useScrollContext } from '../context/ScrollContext';
import { useReducedMotion } from '../hooks/useReducedMotion';

const NODE_COUNT = 80;
const BOUNDS = { x: 12, y: 8, z: 6 };
const DISTANCE_THRESHOLD = 2.5;
const ACCENT_COLOR = new THREE.Color('#00E5C8');
const MUTED_COLOR = new THREE.Color('#4A5068');

export function NetworkScene() {
  const { scrollY } = useScrollContext();
  const prefersReducedMotion = useReducedMotion();
  const { camera } = useThree();

  const nodesRef = useRef<THREE.InstancedMesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);
  const scrollYRef = useRef(scrollY);
  scrollYRef.current = scrollY;

  const { positions, edgeGeometry, edgeCount } = useMemo(() => {
    const pos = new Float32Array(NODE_COUNT * 3);

    for (let i = 0; i < NODE_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * BOUNDS.x;
      pos[i * 3 + 1] = (Math.random() - 0.5) * BOUNDS.y;
      pos[i * 3 + 2] = (Math.random() - 0.5) * BOUNDS.z;
    }

    const geometry = new THREE.BufferGeometry();
    const edgePositions: number[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        if (dx * dx + dy * dy + dz * dz < DISTANCE_THRESHOLD * DISTANCE_THRESHOLD) {
          edgePositions.push(
            pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2],
            pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]
          );
        }
      }
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(edgePositions, 3));
    return { positions: pos, edgeGeometry: geometry, edgeCount: edgePositions.length / 6 };
  }, []);

  // Initialize instanced mesh transforms and colors
  useEffect(() => {
    if (!nodesRef.current) return;
    const dummy = new THREE.Object3D();
    for (let i = 0; i < NODE_COUNT; i++) {
      dummy.position.set(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
      dummy.updateMatrix();
      nodesRef.current.setMatrixAt(i, dummy.matrix);
      const color = Math.random() > 0.7 ? ACCENT_COLOR : MUTED_COLOR;
      nodesRef.current.setColorAt(i, color);
    }
    nodesRef.current.instanceMatrix.needsUpdate = true;
    if (nodesRef.current.instanceColor) nodesRef.current.instanceColor.needsUpdate = true;
  }, [positions]);

  // Signal pulse on random edges
  useEffect(() => {
    if (prefersReducedMotion || !edgesRef.current) return;
    const material = edgesRef.current.material as THREE.LineBasicMaterial;
    const pulseInterval = window.setInterval(() => {
      material.opacity = 0.6;
      const resetTimeout = window.setTimeout(() => { material.opacity = 0.15; }, 200);
      return () => window.clearTimeout(resetTimeout);
    }, 2500);
    return () => window.clearInterval(pulseInterval);
  }, [prefersReducedMotion]);

  // Cleanup geometry and materials on unmount
  useEffect(() => {
    return () => {
      edgeGeometry.dispose();
    };
  }, [edgeGeometry]);

  // Animation loop: drift nodes + scroll-driven camera
  useFrame(({ clock }) => {
    if (prefersReducedMotion) return;

    const t = clock.getElapsedTime() * 0.3;
    if (nodesRef.current) {
      const dummy = new THREE.Object3D();
      for (let i = 0; i < NODE_COUNT; i++) {
        const offset = i * 0.1;
        dummy.position.set(
          positions[i * 3] + Math.sin(t + offset) * 0.2,
          positions[i * 3 + 1] + Math.cos(t + offset) * 0.2,
          positions[i * 3 + 2] + Math.sin(t * 0.8 + offset) * 0.2
        );
        dummy.updateMatrix();
        nodesRef.current.setMatrixAt(i, dummy.matrix);
      }
      nodesRef.current.instanceMatrix.needsUpdate = true;
    }

    const scrollFactor = Math.min(Math.max(scrollYRef.current / 800, 0), 1);
    const targetZ = 10 - (4 * scrollFactor);
    const targetY = 2 * scrollFactor;
    camera.position.lerp(new THREE.Vector3(0, targetY, targetZ), 0.05);
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.4} color="#334455" />
      <pointLight position={[3, 4, 3]} intensity={2} distance={15} color="#00E5C8" />
      <pointLight position={[-4, -2, -3]} intensity={0.3} color="#ffffff" />

      <instancedMesh ref={nodesRef} args={[undefined, undefined, NODE_COUNT]}>
        <icosahedronGeometry args={[0.08, 1]} />
        <meshStandardMaterial />
      </instancedMesh>

      <lineSegments ref={edgesRef} geometry={edgeGeometry}>
        <lineBasicMaterial color="#00E5C8" transparent opacity={0.15} />
      </lineSegments>

      <EffectComposer {...{ disableNormalPass: true } as any}>
        <Bloom luminanceThreshold={0.7} intensity={0.4} mipmapBlur={false} />
      </EffectComposer>
    </>
  );
}

NetworkScene.displayName = 'NetworkScene';
