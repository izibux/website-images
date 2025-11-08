import styles from './FloatingRobux.module.css';

const FloatingRobux = () => {
  // Generate multiple floating particles with varied properties
  const particles = Array.from({ length: 30 }, (_, index) => ({
    id: index,
    left: `${Math.random() * 100}%`, // Random horizontal position
    delay: `${Math.random() * 8}s`, // Random animation delay
    duration: `${10 + Math.random() * 8}s`, // Duration between 10-18s
    size: `${2 + Math.random() * 4}px`, // Size between 2-6px
    twinkleDelay: `${Math.random() * 4}s`, // Random twinkle delay
  }));

  return (
    <div className={styles.particlesContainer}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={styles.particle}
          style={{
            left: particle.left,
            animationDelay: `${particle.delay}, ${particle.twinkleDelay}`,
            animationDuration: `${particle.duration}, ${2 + Math.random() * 2}s`,
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingRobux;

