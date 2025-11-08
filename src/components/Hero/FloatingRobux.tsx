import { getCDNUrl } from '../../config/cdn';
import styles from './FloatingRobux.module.css';

const FloatingRobux = () => {
  // Generate multiple floating robux icons with different properties
  const robuxIcons = Array.from({ length: 12 }, (_, index) => ({
    id: index,
    left: `${Math.random() * 100}%`, // Random horizontal position
    delay: `${Math.random() * 5}s`, // Random animation delay
    duration: `${8 + Math.random() * 4}s`, // Duration between 8-12s
    size: `${40 + Math.random() * 30}px`, // Size between 40-70px
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
            animationDelay: icon.delay,
            animationDuration: icon.duration,
            width: icon.size,
            height: icon.size,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingRobux;

