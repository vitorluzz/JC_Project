import { useTexture } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useEffect } from 'react';
import ibiraaImage from '/img/ibiraa.png';

export default function CityBackground360() {
  // Carrega a textura 360 - Ibirapuera
  const texture = useTexture(ibiraaImage);
  const { gl } = useThree();
  
  useEffect(() => {
    if (texture) {
      // Configura a textura para máxima qualidade
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.anisotropy = gl.capabilities.getMaxAnisotropy();
      texture.generateMipmaps = true;
      texture.needsUpdate = true;
    }
  }, [texture, gl]);
  
  return (
    <mesh rotation={[0, Math.PI, 0]}>
      <sphereGeometry args={[1500, 64, 64]} />
      <meshBasicMaterial 
        map={texture}
        side={THREE.BackSide}
        toneMapped={false}
      />
    </mesh>
  );
}

// Alternativa: Background simples se a imagem não carregar
export function CityBackgroundGradient() {
  return (
    <mesh>
      <sphereGeometry args={[50, 16, 16]} />
      <meshBasicMaterial 
        color="#0a0a2e"
        side={THREE.BackSide}
      />
    </mesh>
  );
}