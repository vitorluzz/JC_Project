import { useGLTF } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Table({ animated = false }) {
  const { scene } = useGLTF('/src/objects/table/scene.gltf');
  const groupRef = useRef();
  const opacityProgress = useRef(0);

  useEffect(() => {
    if (animated && groupRef.current) {
      opacityProgress.current = 0;
      groupRef.current.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material.transparent = true;
          child.material.opacity = 0;
        }
      });
    }
  }, [animated]);

  useFrame(() => {
    if (animated && opacityProgress.current < 1 && groupRef.current) {
      opacityProgress.current += 0.02;
      const opacity = Math.min(opacityProgress.current, 1);
      groupRef.current.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material.opacity = opacity;
        }
      });
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]} rotation={[0, Math.PI / 2, 0]}>
      <primitive object={scene.clone()} scale={1} />
    </group>
  );
}

useGLTF.preload('/src/objects/table/scene.gltf');