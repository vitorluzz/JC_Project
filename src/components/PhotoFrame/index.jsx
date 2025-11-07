import { useGLTF } from '@react-three/drei';
import { useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useMemo, useEffect, useRef } from 'react';

export default function PhotoFrame({ position, rotation, photoTexture, animated = false, delay = 0 }) {
  const { scene } = useGLTF('/src/objects/photo_frame_low_poly_speed_model/scene.gltf');
  const customTexture = photoTexture ? useLoader(THREE.TextureLoader, photoTexture) : null;
  const groupRef = useRef();
  const scaleProgress = useRef(0);
  const delayTimer = useRef(delay * 60); // Convert delay to frames (assuming 60fps)
  
  // Configure the texture properly
  useEffect(() => {
    if (customTexture) {
      customTexture.colorSpace = THREE.SRGBColorSpace;
      customTexture.flipY = false;
      customTexture.needsUpdate = true;
    }
    
    if (animated && groupRef.current) {
      groupRef.current.scale.set(0, 0, 0);
      scaleProgress.current = 0;
      delayTimer.current = delay * 60;
    }
  }, [customTexture, animated, delay]);
  
  useFrame(() => {
    if (animated && groupRef.current) {
      // Wait for delay first
      if (delayTimer.current > 0) {
        delayTimer.current--;
        return;
      }
      
      // Then animate
      if (scaleProgress.current < 1) {
        scaleProgress.current += 0.04;
        const scale = Math.min(scaleProgress.current, 1);
        const easeScale = 1 - Math.pow(1 - scale, 3); // ease-out cubic
        groupRef.current.scale.set(easeScale, easeScale, easeScale);
      }
    }
  });
  
  const clonedScene = useMemo(() => {
    const clone = scene.clone();
    
    if (customTexture) {
      // Traverse the model to find and replace the photo material
      clone.traverse((child) => {
        if (child.isMesh && child.material) {
          // Clone the material so we don't modify the original
          const material = child.material.clone();
          
          // Check if this is the PhotoFrame_MAT material
          if (material.name?.includes('PhotoFrame_MAT')) {
            // Replace the texture with our custom one
            material.map = customTexture;
            material.needsUpdate = true;
            child.material = material;
          }
        }
      });
    }
    
    return clone;
  }, [scene, customTexture]);
  
  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      <primitive object={clonedScene} scale={2} />
    </group>
  );
}

useGLTF.preload('/src/objects/photo_frame_low_poly_speed_model/scene.gltf');