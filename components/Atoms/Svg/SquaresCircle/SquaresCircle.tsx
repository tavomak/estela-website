import styles from './style.module.css';

const SquaresCircle = () => (
  <svg
    id="Capa_1"
    version="1.1"
    viewBox="0 0 304 309"
    style={{ overflow: 'visible' }}
  >
    <g className={styles.circle}>
      <circle className={styles.st0} cx="181.24" cy="96.25" r="87.6" />
    </g>
    <g className={styles.spin}>
      <polygon
        className={styles.st2}
        points="164.05 128.85 228.99 251.92 103.1 289.09 38.16 166.02 164.05 128.85"
      />
    </g>
    <g className={styles.spin2}>
      <polygon
        className={styles.st3}
        points="133.89 185.39 141.01 300.65 22.51 275.84 15.4 160.58 133.89 185.39"
      />
    </g>
    <g className={styles.spin3}>
      <polygon
        className={styles.st1}
        points="164.38 50.16 288.6 150.36 186.9 259.83 62.68 159.62 164.38 50.16"
      />
    </g>
  </svg>
);

export default SquaresCircle;
