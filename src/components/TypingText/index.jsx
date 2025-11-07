import { useState, useEffect } from 'react';

// Componente de texto digitando
export default function TypingText({ text, onComplete }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      setTimeout(onComplete, 1500);
    }
  }, [currentIndex, text, onComplete]);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <div style={{
        width: '600px',
        background: '#1e1e1e',
        borderRadius: '10px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        overflow: 'hidden'
      }}>
        <div style={{
          background: '#2d2d2d',
          padding: '10px',
          display: 'flex',
          gap: '8px'
        }}>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></span>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></span>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></span>
        </div>
        <div style={{
          padding: '20px',
          fontFamily: '"Courier New", monospace',
          color: '#fff',
          minHeight: '200px'
        }}>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            margin: 0,
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word'
          }}>
            {displayText}
            <span style={{ animation: 'blink 1s infinite' }}>|</span>
          </p>
        </div>
      </div>
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}