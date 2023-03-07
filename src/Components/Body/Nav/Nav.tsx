import { useGlobal } from '../../../GlobalContext';
import AddNote from './AddNote/AddNote';
import styles from './Nav.module.css'
import scrollable from '../../../Resources/CSS/scrollable.module.css';
import NavNote from './NavNote/NavNote';
import { useState } from 'react';

export default function Nav() {
  const [settingsOpened, setSettingsOpened] = useState(false);
  const [aboutOpened, setAboutOpened] = useState(false);
  const { global, setGlobal } = useGlobal();
  const notes = global.notes;

  const addNote = () => {
    const newNotes = [...notes];
    const newTitle = prompt('Give your note a fancy title:');
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
      <div className={`${styles.this} ${global.dropDown ? styles.dropped : ''}`}>
        <div className={`${styles.list} ${scrollable.scrollable}`}>
          {notes.map((note: object, i: number) => {
            return <NavNote key={i} note={i}></NavNote>;
          })}
          <AddNote addNote={addNote}></AddNote>
        </div>
        <div className={styles.bottom}>
          {/* <span className={styles.text}>Coming to Android soon!</span> */}
          <button onClick={openSettings} className={styles.link}>Settings</button>
          <button onClick={openAbout} className={styles.link}>About</button>
        </div>
      </div>
      {(settingsOpened || aboutOpened) && <div onClick={() => { setSettingsOpened(false); setAboutOpened(false); }} className={styles.greyedout}></div>}
      {settingsOpened &&
        <div className={styles.popup}>
          <h2>Settings</h2>
        </div>}
      {aboutOpened &&
        <div className={styles.popup}>
          <div className={styles.bar}>
            <h2>About</h2>
          </div>
          <div className={styles.content}>
            <div>noted! is a web app for taking notes and saving them locally.</div>
            <div>It's built with React and TypeScript, and <a href='https://github.com/martindylan/noted' target='_blank'>here's a link</a> to the source code.</div>
            <br></br>
            <div className={styles.bottom}>
              <div>Dylan Martin</div>
              <div>2023</div>
            </div>
          </div>
        </div>}
    </>
  )
}