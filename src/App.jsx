import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import './App.css';
import TypingText from './components/TypingText';
import Scene3D from './components/Scene3D';

export default function App() {
  const [scene, setScene] = useState('intro');
  const [show3D, setShow3D] = useState(false);
  const messages = [
    " > camila meu amor,\n > hoje é seu aniversário,\n > então eu fiz esse programa pra você :)\n > espero que goste! <3 \n (˶ᵔ ᵕ ᵔ˶) ‹𝟹 (˶ᵔ ᵕ ᵔ˶) ‹𝟹 (˶ᵔ ᵕ ᵔ˶) ‹𝟹",
  ];
  const [messageIndex, setMessageIndex] = useState(0);

  const handleTypingComplete = () => {
    if (messageIndex < messages.length - 1) {
      setTimeout(() => setMessageIndex(messageIndex + 1), 500);
    } else {
      setShow3D(true); // Começa a renderizar em background
      setTimeout(() => {
        setScene('3d'); // Remove intro
      }, 3500); // Tempo para os objetos carregarem
    }
  };

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      background: '#000',
      margin: 0,
      padding: 0,
      position: 'fixed',
      top: 0,
      left: 0,
      overflow: 'hidden'
    }}>
      {/* Canvas 3D em background (invisível durante intro) */}
      {show3D && (
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%',
          margin: 0,
          padding: 0,
          opacity: scene === '3d' ? 1 : 0,
          transition: 'opacity 1s ease-in-out'
        }}>
          <Canvas 
            shadows 
            style={{ 
              width: '100%', 
              height: '100%',
              display: 'block'
            }}
          >
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          </Canvas>
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'white',
            textAlign: 'center',
            background: 'rgba(0,0,0,0.6)',
            padding: '10px 20px',
            borderRadius: '10px',
            fontSize: '14px'
          }}>
            🖱️ Arraste para rotacionar • Scroll para zoom • Clique na carta
          </div>
        </div>
      )}
      
      {scene === 'intro' && (
        <TypingText 
          text={messages[messageIndex]} 
          onComplete={handleTypingComplete}
        />
      )}
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
      `}</style>
    </div>
  );
}