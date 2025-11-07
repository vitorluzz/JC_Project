import { useGLTF } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function BirthdayCandle({ position, animated = false }) {
  const { scene } = useGLTF('/src/objects/birthday_candle/scene.gltf');
  const flameRef = useRef();
  const flame2Ref = useRef();
  const lightRef = useRef();
  const glowRef = useRef();
  const groupRef = useRef();
  const [isLit, setIsLit] = useState(true);
  const animProgress = useRef(0);

  useEffect(() => {
    if (animated && groupRef.current) {
      groupRef.current.position.y = 3; // Começa acima
      animProgress.current = 0;
    }
  }, [animated]);

  useFrame((state) => {
    // Animação de entrada (descendo)
    if (animated && animProgress.current < 1 && groupRef.current) {
      animProgress.current += 0.03;
      const progress = Math.min(animProgress.current, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      groupRef.current.position.y = 3 - (easeProgress * 3.05); // Desce de 3 para -6
    }
    
    if (!isLit) return;
    
    const time = state.clock.getElapsedTime();
    
    // Animate flame flickering
    if (flameRef.current) {
      const flicker = Math.sin(time * 10) * 0.02 + Math.cos(time * 15) * 0.015;
      flameRef.current.scale.setScalar(1 + flicker);
      flameRef.current.position.x = Math.sin(time * 8) * 0.005;
    }
    
    // Animate inner flame
    if (flame2Ref.current) {
      const flicker2 = Math.sin(time * 12) * 0.025 + Math.cos(time * 18) * 0.02;
      flame2Ref.current.scale.setScalar(1 + flicker2);
      flame2Ref.current.position.x = Math.sin(time * 10) * 0.002;
    }
    
    // Animate light flickering
    if (lightRef.current) {
      lightRef.current.intensity = 2.5 + Math.sin(time * 12) * 0.5 + Math.cos(time * 8) * 0.3;
    }
    
    // Animate glow
    if (glowRef.current) {
      const glowFlicker = Math.sin(time * 15) * 0.1;
      glowRef.current.scale.setScalar(1 + glowFlicker);
    }
  });

  const toggleFlame = (e) => {
    e.stopPropagation();
    setIsLit(!isLit);
  };

  return (
    <group ref={groupRef} position={position}>
      <primitive object={scene.clone()} scale={0.06} />
      
      {isLit && (
        <>
          {/* Outer flame glow effect */}
          <mesh ref={glowRef} position={[0, 0.2, 0]}>
            <sphereGeometry args={[0.025, 16, 16]} />
            <meshBasicMaterial 
              color="#ff4400" 
              transparent 
              opacity={0.3}
            />
          </mesh>
          
          {/* Main flame */}
          <mesh 
            ref={flameRef} 
            position={[0, 0.21, 0]}
            onClick={toggleFlame}
            onPointerOver={() => document.body.style.cursor = 'pointer'}
            onPointerOut={() => document.body.style.cursor = 'default'}
          >
            <sphereGeometry args={[0.012, 8, 8]} />
            <meshBasicMaterial 
              color="#ff6600" 
              transparent 
              opacity={0.9}
            />
          </mesh>
          
          {/* Inner flame core */}
          <mesh 
            ref={flame2Ref} 
            position={[0, 0.19, 0]}
            onClick={toggleFlame}
          >
            <sphereGeometry args={[0.008, 8, 8]} />
            <meshBasicMaterial 
              color="#ffff00" 
              transparent 
              opacity={0.95}
            />
          </mesh>
          
          {/* Main light from flame */}
          <pointLight 
            ref={lightRef}
            position={[0, 0.3, 0]} 
            intensity={2.5} 
            distance={2.5} 
            color="#ff8800"
            castShadow
          />
          
          {/* Additional warm glow */}
          <pointLight 
            position={[0, 0.25, 0]} 
            intensity={1.2} 
            distance={1.0} 
            color="#ffaa44"
          />
        </>
      )}
      
      {/* Clickable area even when not lit */}
      {!isLit && (
        <mesh 
          position={[0, 0.3, 0]}
          onClick={toggleFlame}
          onPointerOver={() => document.body.style.cursor = 'pointer'}
          onPointerOut={() => document.body.style.cursor = 'default'}
        >
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial 
            transparent 
            opacity={0}
          />
        </mesh>
      )}
    </group>
  );
}

useGLTF.preload('/src/objects/birthday_candle/scene.gltf');
