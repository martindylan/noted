import { useGlobal } from '../../GlobalContext';
import styles from './Body.module.scss';
// Components
import Nav from './Nav/Nav';
import Note from './Note/Note';

export default function Body() {
  const { global } = useGlobal();
  const currentNote = global.currentNote;

  return (
    <div className={`${styles.Body} ${styles[global.theme]}`}>
      <Nav />
      {global.notes[currentNote] && <Note key={currentNote} note={currentNote}></Note>}
      {!global.notes.length && <h2 style={{ margin: 0, padding: '1em' }}>{'<'}- add some notes!</h2>}
      <div style={{ display: 'flex', flexGrow: 1, filter: global.theme == 'dark' ? 'sepia()  hue-rotate(254deg)' : ' hue-rotate(336deg)', overflow: 'hidden' }}>
        <svg viewBox="13 -4 461 455" xmlns="http://www.w3.org/2000/svg" className={styles.flower} style={{ width: '240px', height: '240px', transform: 'translate(-50%, -50%)' }}>
          <g>
            <g transform="matrix(1.013029, -2.172449, 0.805123, 0.375435, -239.771591, 474.13916)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g transform="matrix(-1.013029, 2.172449, -0.805123, -0.375435, 723.009949, -31.281298)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g transform="matrix(-2.172449, 1.01303, -0.375434, -0.805124, 764.117188, 339.656342)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g transform="matrix(2.252473, -0.819834, 0.303835, 0.834781, -276.796417, 66.121117)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g transform="matrix(-0.819834, -2.252474, 0.834782, -0.303835, 84.025528, 743.653931)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g transform="matrix(0.819834, 2.252473, -0.834781, 0.303835, 405.30777, -296.224701)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g transform="matrix(-2.172449, -1.013029, 0.375435, -0.805123, 494.329376, 705.10553)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g transform="matrix(2.172449, 1.013029, -0.375435, 0.805123, -10.540039, -257.099365)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g>
              <g transform="matrix(0.678571, 0, 0, 0.717326, 121.009552, -24.106068)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <g transform="matrix(0, 0.678571, -0.717326, 0, 492.233185, 101.835365)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <g transform="matrix(0, 0.678571, -0.717326, 0, 314.712097, 103.359146)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <g transform="matrix(0.678571, 0, 0, 0.717326, 122.53334, 153.415024)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <g transform="matrix(0.479822, 0.479822, -0.507226, 0.507226, 338.366028, -43.240444)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <g transform="matrix(-0.479822, -0.479822, 0.507226, -0.507226, 148.681854, 489.907806)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <g transform="matrix(0.479822, -0.479822, 0.507226, 0.507226, -23.812111, 129.253433)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <g transform="matrix(-0.479822, 0.479822, -0.507226, -0.507226, 509.336121, 317.41394)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <ellipse className={`${styles.fg} ${styles[global.theme]}`} cx="242.767" cy="223.713" rx="26.285" ry="25.904"></ellipse>
            </g>
          </g>
        </svg>
        <svg viewBox="13 -4 461 455" xmlns="http://www.w3.org/2000/svg" className={styles.flower} style={{ width: '160px', height: '160px', top: '30%', right: 0, transform: 'translate(-10%, -50%) rotate(18deg)' }}>
          <g>
            <g transform="matrix(1.013029, -2.172449, 0.805123, 0.375435, -239.771591, 474.13916)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g transform="matrix(-1.013029, 2.172449, -0.805123, -0.375435, 723.009949, -31.281298)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g transform="matrix(-2.172449, 1.01303, -0.375434, -0.805124, 764.117188, 339.656342)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g transform="matrix(2.252473, -0.819834, 0.303835, 0.834781, -276.796417, 66.121117)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g transform="matrix(-0.819834, -2.252474, 0.834782, -0.303835, 84.025528, 743.653931)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g transform="matrix(0.819834, 2.252473, -0.834781, 0.303835, 405.30777, -296.224701)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g transform="matrix(-2.172449, -1.013029, 0.375435, -0.805123, 494.329376, 705.10553)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g transform="matrix(2.172449, 1.013029, -0.375435, 0.805123, -10.540039, -257.099365)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g>
              <g transform="matrix(0.678571, 0, 0, 0.717326, 121.009552, -24.106068)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <g transform="matrix(0, 0.678571, -0.717326, 0, 492.233185, 101.835365)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <g transform="matrix(0, 0.678571, -0.717326, 0, 314.712097, 103.359146)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <g transform="matrix(0.678571, 0, 0, 0.717326, 122.53334, 153.415024)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <g transform="matrix(0.479822, 0.479822, -0.507226, 0.507226, 338.366028, -43.240444)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <g transform="matrix(-0.479822, -0.479822, 0.507226, -0.507226, 148.681854, 489.907806)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <g transform="matrix(0.479822, -0.479822, 0.507226, 0.507226, -23.812111, 129.253433)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <g transform="matrix(-0.479822, 0.479822, -0.507226, -0.507226, 509.336121, 317.41394)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <ellipse className={`${styles.fg} ${styles[global.theme]}`} cx="242.767" cy="223.713" rx="26.285" ry="25.904"></ellipse>
            </g>
          </g>
        </svg>
        <svg viewBox="13 -4 461 455" xmlns="http://www.w3.org/2000/svg" className={styles.flower} style={{ width: '280px', height: '280px', bottom: '30%', transform: 'translate(-36%, 50%) rotate(-4deg)' }}>
          <g>
            <g transform="matrix(1.013029, -2.172449, 0.805123, 0.375435, -239.771591, 474.13916)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g transform="matrix(-1.013029, 2.172449, -0.805123, -0.375435, 723.009949, -31.281298)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g transform="matrix(-2.172449, 1.01303, -0.375434, -0.805124, 764.117188, 339.656342)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g transform="matrix(2.252473, -0.819834, 0.303835, 0.834781, -276.796417, 66.121117)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g transform="matrix(-0.819834, -2.252474, 0.834782, -0.303835, 84.025528, 743.653931)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g transform="matrix(0.819834, 2.252473, -0.834781, 0.303835, 405.30777, -296.224701)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g transform="matrix(-2.172449, -1.013029, 0.375435, -0.805123, 494.329376, 705.10553)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g transform="matrix(2.172449, 1.013029, -0.375435, 0.805123, -10.540039, -257.099365)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g>
              <g transform="matrix(0.678571, 0, 0, 0.717326, 121.009552, -24.106068)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <g transform="matrix(0, 0.678571, -0.717326, 0, 492.233185, 101.835365)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <g transform="matrix(0, 0.678571, -0.717326, 0, 314.712097, 103.359146)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <g transform="matrix(0.678571, 0, 0, 0.717326, 122.53334, 153.415024)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <g transform="matrix(0.479822, 0.479822, -0.507226, 0.507226, 338.366028, -43.240444)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <g transform="matrix(-0.479822, -0.479822, 0.507226, -0.507226, 148.681854, 489.907806)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <g transform="matrix(0.479822, -0.479822, 0.507226, 0.507226, -23.812111, 129.253433)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <g transform="matrix(-0.479822, 0.479822, -0.507226, -0.507226, 509.336121, 317.41394)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <ellipse className={`${styles.fg} ${styles[global.theme]}`} cx="242.767" cy="223.713" rx="26.285" ry="25.904"></ellipse>
            </g>
          </g>
        </svg>
        <svg viewBox="13 -4 461 455" xmlns="http://www.w3.org/2000/svg" className={styles.flower} style={{ width: '80px', height: '80px', bottom: 0, right: 0, transform: 'translate(50%, 50%)' }}>
          <g>
            <g transform="matrix(1.013029, -2.172449, 0.805123, 0.375435, -239.771591, 474.13916)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g transform="matrix(-1.013029, 2.172449, -0.805123, -0.375435, 723.009949, -31.281298)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g transform="matrix(-2.172449, 1.01303, -0.375434, -0.805124, 764.117188, 339.656342)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g transform="matrix(2.252473, -0.819834, 0.303835, 0.834781, -276.796417, 66.121117)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g transform="matrix(-0.819834, -2.252474, 0.834782, -0.303835, 84.025528, 743.653931)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g transform="matrix(0.819834, 2.252473, -0.834781, 0.303835, 405.30777, -296.224701)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g transform="matrix(-2.172449, -1.013029, 0.375435, -0.805123, 494.329376, 705.10553)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g transform="matrix(2.172449, 1.013029, -0.375435, 0.805123, -10.540039, -257.099365)">
              <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hhl} ${styles[global.theme]}`}></path>
              <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.bg} ${styles[global.theme]}`}></path>
            </g>
            <g>
              <g transform="matrix(0.678571, 0, 0, 0.717326, 121.009552, -24.106068)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <g transform="matrix(0, 0.678571, -0.717326, 0, 492.233185, 101.835365)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <g transform="matrix(0, 0.678571, -0.717326, 0, 314.712097, 103.359146)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <g transform="matrix(0.678571, 0, 0, 0.717326, 122.53334, 153.415024)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <g transform="matrix(0.479822, 0.479822, -0.507226, 0.507226, 338.366028, -43.240444)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <g transform="matrix(-0.479822, -0.479822, 0.507226, -0.507226, 148.681854, 489.907806)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <g transform="matrix(0.479822, -0.479822, 0.507226, 0.507226, -23.812111, 129.253433)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <g transform="matrix(-0.479822, 0.479822, -0.507226, -0.507226, 509.336121, 317.41394)">
                <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" className={`${styles.hl} ${styles[global.theme]}`}></path>
                <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" className={`${styles.hl} ${styles[global.theme]}`}></path>
              </g>
              <ellipse className={`${styles.fg} ${styles[global.theme]}`} cx="242.767" cy="223.713" rx="26.285" ry="25.904"></ellipse>
            </g>
          </g>
        </svg>
      </div>
    </div >
  )
}