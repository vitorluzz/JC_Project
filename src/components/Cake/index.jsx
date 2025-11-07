import { useGLTF } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Cake({ position, animated = false }) {
  const { scene } = useGLTF('/src/objects/strawberry_cake/scene.gltf');
  const groupRef = useRef();
  const scaleProgress = useRef(0);

  useEffect(() => {
    if (animated && groupRef.current) {
      groupRef.current.scale.set(0, 0, 0);
      scaleProgress.current = 0;
    }
  }, [animated]);

  useFrame(() => {
    if (animated && scaleProgress.current < 1 && groupRef.current) {
      scaleProgress.current += 0.05;
      const scale = Math.min(scaleProgress.current, 1);
      const easeScale = 1 - Math.pow(1 - scale, 3); // ease-out cubic
      groupRef.current.scale.set(easeScale, easeScale, easeScale);
    }
  });

  return (
    <group ref={groupRef} position={position} rotation={[0, Math.PI / -2, 0]}>
      <primitive object={scene.clone()} scale={0.3} />
    </group>
  );
}

useGLTF.preload('/src/objects/strawberry_cake/scene.gltf');