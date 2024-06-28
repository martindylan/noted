import { useGlobal } from 'GlobalContext';
import AddNote from 'Components/Body/Nav/AddNote/AddNote';
import styles from './Nav.module.scss'
import scrollable from 'Resources/SASS/scrollable.module.scss';
import NavNote from 'Components/Body/Nav/NavNote/NavNote';
import { useState } from 'react';
import AboutSection from 'Components/Body/Nav/AboutSection/AboutSection';
import SettingsSection from 'Components/Body/Nav/SettingsSection/SettingsSection';
import settingsImg from 'Resources/Img/settings.png';
import aboutImg from 'Resources/Img/about.png';
import { NoteType } from 'types';

export default function Nav() {
  const [settingsOpened, setSettingsOpened] = useState(false);
  const [aboutOpened, setAboutOpened] = useState(false);
  const { global, setGlobal } = useGlobal();
  const notes = global.notes;

  const addNote = () => {
    const newNotes = [...notes];
    const newTitle = prompt('Give your note a fancy title:');
    if (!newTitle) return;
    newNotes.push({ title: newTitle, focus: 0, id: new Date().getTime(), isDragging: false, items: [{ content: '', type: 'text', checked: false, id: new Date().getTime() }] });
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
        <div className={`${styles.list} ${scrollable.scrollable} ${scrollable[global.theme]}`}>
          {notes.map((note: NoteType, i: number) => {
            return <NavNote key={note.id} note={i}></NavNote>;
          })}
          <AddNote addNote={addNote} />
        </div>
        <div className={styles.bottom}>
          <button onClick={openSettings} className={styles.link}><img src={settingsImg} alt='Settings'></img></button>
          <button onClick={openAbout} className={styles.link}><img src={aboutImg} alt='About'></img></button>
        </div>
      </div>
      <SettingsSection open={settingsOpened} setOpen={setSettingsOpened}/>
      <AboutSection open={aboutOpened} setOpen={setAboutOpened} />
    </>
  )
}