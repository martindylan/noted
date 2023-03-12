import { useGlobal } from '../../../GlobalContext';
import AddNote from './AddNote/AddNote';
import styles from './Nav.module.scss'
import scrollable from '../../../Resources/SASS/scrollable.module.scss';
import NavNote from './NavNote/NavNote';
import { useState } from 'react';
import SettingsSection from './SettingsSection/SettingsSection';
import AboutSection from './AboutSection/AboutSection';

export default function Nav() {
  const [settingsOpened, setSettingsOpened] = useState(false);
  const [aboutOpened, setAboutOpened] = useState(false);
  const { global, setGlobal } = useGlobal();
  const notes = global.notes;

  const addNote = () => {
    const newNotes = [...notes];
    const newTitle = prompt('Give your note a fancy title:');
    if (!newTitle) return;
    newNotes.push({ title: newTitle, focus: 0, items: [{ content: '', type: 'text', }] });
    const newCurrent = newNotes.length - 1;
    setGlobal({ ...global, notes: newNotes, currentNote: newCurrent, dropDown: false });
  }

  const openSettings = () => {
    setSettingsOpened(true);
  }

  const openAbout = () => {
    setAboutOpened(true);
  }

  return (
    <>
      <div className={`${styles.Nav} ${styles[global.theme]} ${global.dropDown ? styles.dropped : ''}`}>
        <div className={`${styles.list} ${scrollable.scrollable}`}>
          {notes.map((note: object, i: number) => {
            return <NavNote key={i} note={i}></NavNote>;
          })}
          <AddNote addNote={addNote} />
        </div>
        <div className={styles.bottom}>
          {/* <span className={styles.text}>Coming to Android soon!</span> */}
          <button onClick={openSettings} className={styles.link}>Settings</button>
          <button onClick={openAbout} className={styles.link}>About</button>
        </div>
      </div>
      {(settingsOpened || aboutOpened) && <div onClick={() => { setSettingsOpened(false); setAboutOpened(false); }} className={styles.greyedout}></div>}
      {settingsOpened &&
        <SettingsSection isOpen={setSettingsOpened} />
      }
      {aboutOpened &&
        <AboutSection isOpen={setAboutOpened} />
      }
    </>
  )
}