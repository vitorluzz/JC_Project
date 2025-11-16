import { useState, useMemo, useRef, useEffect } from 'react';
import { useGLTF, Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const modelPath = `${import.meta.env.BASE_URL}objects/letter/scene.gltf`;

export default function BirthdayCard({ position, animated = false, delay = 0 }) {
  const { scene } = useGLTF(modelPath);
  const [isOpen, setIsOpen] = useState(false);
  const groupRef = useRef();
  const scaleProgress = useRef(0);
  const delayTimer = useRef(delay * 60);

  const clonedScene = useMemo(() => {
    const clone = scene.clone();
    
    // Adjust materials to respond better to ambient light
    clone.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material = child.material.clone();
        child.material.emissive = child.material.color;
        child.material.emissiveIntensity = 0.3;
      }
    });
    
    return clone;
  }, [scene]);
  
  useEffect(() => {
    if (animated && groupRef.current) {
      groupRef.current.scale.set(0, 0, 0);
      scaleProgress.current = 0;
      delayTimer.current = delay * 60;
    }
  }, [animated, delay]);
  
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

  return (
    <>
      <group 
        ref={groupRef}
        position={position}
        rotation={[0, -Math.PI / 4, 0]}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(true);
        }}
        onPointerOver={() => document.body.style.cursor = 'pointer'}
        onPointerOut={() => document.body.style.cursor = 'default'}
      >
        <primitive object={clonedScene} scale={0.05} />
      </group>
      
      {isOpen && (
        <Html 
          position={[0, 0, 0]}
          center
          style={{
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            top: '0',
            left: '0',
            pointerEvents: 'all'
          }}
        >
          <div 
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,0.85)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10000,
              cursor: 'pointer',
              margin: '0',
              padding: '0'
            }}
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '85%',
                maxWidth: '350px',
                height: 'auto',
                maxHeight: '85vh',
                background: 'white',
                padding: '25px 20px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'default',
                animation: 'cardAppear 0.5s ease-out',
                overflow: 'auto',
                borderRadius: '10px'
              }}
            >
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: '#ff6b9d',
                  border: 'none',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  fontSize: '18px',
                  cursor: 'pointer',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
                }}
              >
                ×
              </button>
              
              <div style={{ textAlign: 'center', width: '100%' }}>
                
                <h1 style={{ 
                  color: '#ff69b4', 
                  fontSize: '22px', 
                  margin: '10px 0',
                  fontFamily: 'Arial, sans-serif',
                  letterSpacing: '0'
                }}>
                  FELIZ ANIVERSÁRIO!!
                </h1>
                
                <div style={{ 
                  color: '#666', 
                  fontSize: '13px', 
                  lineHeight: '1.4',
                  margin: '15px 0',
                  fontFamily: 'Arial, sans-serif',
                  letterSpacing: '0'
                }}>
                  <p style={{ margin: '5px 0' }}>Meu amor,</p>
                  <br />
                  <p style={{ margin: '5px 0' }}>Hoje o dia amanheceu com cheiro de você</p>
                  <p style={{ margin: '5px 0' }}>E eu só penso em te dizer, como na música:</p>
                  <p style={{ margin: '5px 0' }}>"Você é assim, um sonho pra mim..."</p>
                  <p style={{ margin: '5px 0' }}>e desde que te encontrei, tudo ficou mais claro, mais bonito,</p>
                  <p style={{ margin: '5px 0' }}>como o seu sorriso que combina com o meu mundo.</p>
                  <br />
                  
                  <p style={{ margin: '5px 0' }}>Te trago meus versos, simples,</p>
                  <p style={{ margin: '5px 0' }}>mas que vêm do coração.</p>
                  <p style={{ margin: '5px 0' }}>Porque com você aprendi que o amor é leve,</p>
                  <p style={{ margin: '5px 0' }}>é rir à toa, é andar de mãos dadas sem pressa.</p>
                  <p style={{ margin: '5px 0' }}>"só o amor constrói pontes indestrutíveis"</p>
                  <p style={{ margin: '5px 0' }}>e a nossa é feita de risadas, de abraços demorados,</p> 
                  <p style={{ margin: '5px 0' }}>de planos pequenos e sonhos gigantes.</p> 
                  <br />
                  <p style={{ margin: '5px 0' }}>Feliz aniversário, meu amor.</p> 
                  <p style={{ margin: '5px 0' }}>e que eu continue aqui, te amando</p> 
                  <p style={{ margin: '5px 0' }}>em cada verso que a gente vive.</p> 
                  <br />
                  <p style={{ margin: '5px 0' }}>Com amor, do seu namorado, João</p> 
                </div>
                
              
              </div>
            </div>
          </div>
          
          <style>{`
            @keyframes cardAppear {
              from {
                transform: scale(0.8);
                opacity: 0;
              }
              to {
                transform: scale(1);
                opacity: 1;
              }
            }
          `}</style>
        </Html>
      )}
    </>
  );
}

useGLTF.preload(modelPath);