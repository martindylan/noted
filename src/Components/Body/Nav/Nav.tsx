import { useGlobal } from '../../../GlobalContext';
import AddNote from './AddNote/AddNote';
import styles from './Nav.module.scss'
import scrollable from '../../../Resources/SASS/scrollable.module.scss';
import NavNote from './NavNote/NavNote';
import { useState } from 'react';
import AboutSection from './AboutSection/AboutSection';
import SettingsSection from './SettingsSection/SettingsSection';
import settingsImg from '../../../Resources/Img/settings.png';
import aboutImg from '../../../Resources/Img/about.png';

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
        {(settingsOpened || aboutOpened) && <div onClick={() => { setSettingsOpened(false); setAboutOpened(false); }} className={`${styles.greyedout} ${styles.show}`}></div>}
        <div className={`${styles.list} ${scrollable.scrollable} ${scrollable[global.theme]}`}>
          {notes.map((note: object, i: number) => {
            return <NavNote key={i} note={i}></NavNote>;
          })}
          <AddNote addNote={addNote} />
        </div>
        <div className={styles.bottom}>
          <button onClick={openSettings} className={styles.link}><img src={settingsImg} alt='Settings'></img></button>
          {settingsOpened &&
            <SettingsSection isOpen={setSettingsOpened} />
          }
          <button onClick={openAbout} className={styles.link}><img src={aboutImg} alt='About'></img></button>
          {aboutOpened &&
            <AboutSection isOpen={setAboutOpened} />
          }
        </div>
      </div>
    </>
  )
}