import  { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './CursorAnimation.css';

const CursorAnimation = () => {
  const { isDark } = useTheme();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    let hideTimeout;
    let particleId = 0;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Create magical particles
      const newParticles = Array.from({ length: 3 }, () => ({
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
        angle: Math.random() * Math.PI * 2,
        velocity: Math.random() * 2 + 1,
        size: Math.random() * 6 + 2,
        hue: Math.random() * 360,
        life: 1
      }));

      setParticles(prev => [...prev, ...newParticles].slice(-50));

      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animate particles
    const animateParticles = setInterval(() => {
      setParticles(prev => 
        prev.map(p => ({
          ...p,
          x: p.x + Math.cos(p.angle) * p.velocity,
          y: p.y + Math.sin(p.angle) * p.velocity,
          life: p.life - 0.02,
          velocity: p.velocity * 0.98
        })).filter(p => p.life > 0)
      );
    }, 16);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(hideTimeout);
      clearInterval(animateParticles);
    };
  }, []);

  return (
    <>
      {particles.map(particle => (
        <div
          key={particle.id}
          className="magic-particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.life,
            background: `hsl(${particle.hue}, 100%, 60%)`,
            boxShadow: `0 0 ${particle.size * 2}px hsl(${particle.hue}, 100%, 60%)`
          }}
        />
      ))}
    </>
  );
};

export default CursorAnimation;
