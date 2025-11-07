import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { Suspense, useState, useEffect } from 'react';
import Table from '../Table';
import Cake from '../Cake';
import PhotoFrame from '../PhotoFrame';
import BirthdayCard from '../BirthdayCard';
import BirthdayCandle from '../BirthdayCandle';
import CityBackground360, { CityBackgroundGradient } from '../CityBackground360';

import photo1 from '../../../public/img/photo1.png';
import photo2 from '../../../public/img/photo2.png';
import photo3 from '../../../public/img/photo3.png';
import photo4 from '../../../public/img/photo4.png';

export default function Scene3D() {
  const photo1Url = photo1;
  const photo2Url = photo2;
  const photo3Url = photo3;
  const photo4Url = photo4;
  
  const [showCake, setShowCake] = useState(false);
  const [showCandle, setShowCandle] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [showOthers, setShowOthers] = useState(false);
  
  useEffect(() => {
    // Sequência de animações
    const timer1 = setTimeout(() => setShowCake(true), 500);
    const timer2 = setTimeout(() => setShowCandle(true), 1500);
    const timer3 = setTimeout(() => setShowTable(true), 2500);
    const timer4 = setTimeout(() => setShowOthers(true), 3000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);
  
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0.8, 1.2]} fov={70} />
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={0.8}
        maxDistance={20}
        maxPolarAngle={Math.PI / 2}
      />
      
      <ambientLight intensity={0.6} />
      <spotLight 
        position={[0, 10, 0]} 
        angle={0.6} 
        penumbra={1} 
        intensity={2} 
        castShadow 
      />
      <pointLight position={[-5, 4, -3]} intensity={0.8} color="#4169e1" />
      <pointLight position={[5, 4, -3]} intensity={0.8} color="#ff1493" />
      <pointLight position={[0, 3, 5]} intensity={0.5} color="#ffd700" />
      
      <Suspense fallback={<CityBackgroundGradient />}>
        <CityBackground360 />
      </Suspense>
      
      {showTable && <Table animated />}
      {showCake && <Cake position={[0, -0.40, 0.2]} animated />}
      {showCandle && <BirthdayCandle position={[-0.1, -0.06, 0.35]} animated />}
      
      {showOthers && (
        <>
          <PhotoFrame 
            position={[-0.90, -0.4, -0.1]} 
            rotation={[0, Math.PI / 6, 0]} 
            photoTexture={photo1Url}
            animated
            delay={0}
          />
          <PhotoFrame 
            position={[-0.6, -0.4, -0.5]} 
            rotation={[0, Math.PI / 12, 0]} 
            photoTexture={photo2Url}
            animated
            delay={0.2}
          />
          <PhotoFrame 
            position={[0.6, -0.4, -0.5]} 
            rotation={[0, -Math.PI / 12, 0]} 
            photoTexture={photo3Url}
            animated
            delay={0.4}
          />
          <PhotoFrame 
            position={[0.90, -0.4, -0.1]} 
            rotation={[0, -Math.PI / 6, 0]} 
            photoTexture={photo4Url}
            animated
            delay={0.6}
          />
          
          <BirthdayCard position={[0.8, -0.38, 0.4]} animated delay={0.8} />
        </>
      )}
    </>
  );
}