import { getCDNUrl } from '../../config/cdn';
import styles from './FloatingRobux.module.css';

const FloatingRobux = () => {
  // Generate fewer floating robux icons with more spacing
  const robuxIcons = Array.from({ length: 5 }, (_, index) => ({
    id: index,
    left: `${10 + (index * 20) + Math.random() * 10}%`, // More evenly distributed
    delay: `${index * 2}s`, // Staggered delays for spacing
    duration: `${10 + Math.random() * 3}s`, // Duration between 10-13s
    size: `${35 + Math.random() * 20}px`, // Size between 35-55px (smaller)
    glowDelay: `${Math.random() * 3}s`, // Random glow animation delay
  }));

  return (
    <div className={styles.floatingContainer}>
      {robuxIcons.map((icon) => (
        <img
          key={icon.id}
          src={getCDNUrl('robux.png')}
          alt=""
          className={styles.floatingRobux}
          style={{
            left: icon.left,
            animationDelay: `${icon.delay}, ${icon.glowDelay}`,
            animationDuration: `${icon.duration}, 3s`,
            width: icon.size,
            height: icon.size,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingRobux;

