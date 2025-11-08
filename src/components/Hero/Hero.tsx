import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={`container ${styles.heroContainer}`}>
        {/* Left Content */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.highlight}>Robux</span> Rápido e Seguro
          </h1>

          <p className={styles.heroDescription}>
            Entrega instantânea com os melhores preços do mercado.
          </p>

          <div className={styles.ctaGroup}>
            <button className={styles.primaryButton}>
              Ver Pacotes
              <span className={styles.buttonIcon}>→</span>
            </button>
            <button className={styles.secondaryButton}>
              Como Funciona
            </button>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statValue}>2.000+</div>
              <div className={styles.statLabel}>Clientes Satisfeitos</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>99.9%</div>
              <div className={styles.statLabel}>Entregas Instantâneas</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>24/7</div>
              <div className={styles.statLabel}>Suporte Humano</div>
            </div>
          </div>
        </div>

        {/* Right Content - Visual Element */}
        <div className={styles.heroVisual}>
          <div className={styles.floatingCard}>
            <div className={styles.cardIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-primary)' }}/>
              </svg>
            </div>
            <div className={styles.cardTitle}>Entrega Instantânea</div>
            <div className={styles.cardDescription}>Receba seus Robux em segundos</div>
          </div>

          <div className={styles.floatingCard} style={{ animationDelay: '0.2s' }}>
            <div className={styles.cardIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-primary)' }}/>
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-primary)' }}/>
              </svg>
            </div>
            <div className={styles.cardTitle}>100% Seguro</div>
            <div className={styles.cardDescription}>Garantia total de entrega</div>
          </div>

          <div className={styles.floatingCard} style={{ animationDelay: '0.4s' }}>
            <div className={styles.cardIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="21" r="1" fill="currentColor" style={{ color: 'var(--color-primary)' }}/>
                <circle cx="20" cy="21" r="1" fill="currentColor" style={{ color: 'var(--color-primary)' }}/>
                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-primary)' }}/>
              </svg>
            </div>
            <div className={styles.cardTitle}>Melhores Preços</div>
            <div className={styles.cardDescription}>Economia em cada compra</div>
          </div>

          {/* Decorative Elements */}
          <div className={styles.glowOrb}></div>
          <div className={styles.glowOrb} style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.bgGrid}></div>
    </section>
  );
};

export default Hero;

