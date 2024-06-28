import WindowedSection from '../../../UI/WindowedSection/WindowedSection';
import styles from './SettingsSection.module.scss';
import { useGlobal } from '../../../../GlobalContext';
import { saveAs } from 'file-saver';
import React, { useRef } from 'react';
import { GlobalType } from '../../../../types';
import ButtonText from '../../../UI/ButtonText/ButtonText';

interface ISettingsSectionProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SettingsSection = (props: ISettingsSectionProps) => {
  const { global, setGlobal } = useGlobal();
  const importRef = useRef<HTMLInputElement>(null);

  const deleteNotes = () => {
    const confirmation = window.confirm(
      'Are you sure you want to delete your data?\n' +
      'You will lose your notes unless you export them.'
    )
    if (!confirmation) return;
    window.localStorage.clear();
    window.location.reload();
  }

  const exportNotes = () => {
    let blob = new Blob([JSON.stringify(global)], { type: 'text/plain' });
    let date = new Date();
    let name = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}_${date.getHours()}h${date.getMinutes()}m${date.getSeconds()}s_myNotes.txt`;
    saveAs(blob, name);
  }

  const importNotes = (e: React.ChangeEvent<HTMLDivElement>) => {
    const input = e.target as HTMLInputElement;
    if (!input.files) return;
    let fr = new FileReader();
    fr.readAsText(input.files[0]);
    fr.onload = () => {
      if (typeof fr.result === 'string') {
        const newGlobal: GlobalType = JSON.parse(fr.result);
        for (let i = 0; i < newGlobal.notes.length; i++) {
          const notes = newGlobal.notes[i];
          if (!notes.id) notes.id = new Date().getTime() + i;
          for (let j = 0; j < notes.items.length; j++) {
            const item = notes.items[j];
            if (!item.id) item.id = new Date().getTime() + j;
          }
        }
        setGlobal(newGlobal);
        props.setOpen(false);
      }
    }
    window.location.reload();
  }

  const changeTheme = (e: React.FormEvent<HTMLSelectElement>) => {
    const select = e.target as HTMLSelectElement;
    setGlobal({ ...global, themeSelect: select.value });
  }

  return (
    <WindowedSection isOpen={props.open} close={() => props.setOpen(false)} title='Settings'>
      <div className={styles.centeredButtons}>
        <ButtonText onClick={deleteNotes}>Delete data</ButtonText>
        <ButtonText onClick={exportNotes}>Export data</ButtonText>
        <ButtonText onClick={() => { importRef.current?.click() }} className={styles.loadFile}>
          Import data
          <input ref={importRef} type='file' accept='.txt' onChange={importNotes}></input>
        </ButtonText>
      </div>
      <br></br>
      <label htmlFor='themeSelect'>Theme: </label>
      <select className={styles[global.theme]} name='theme' id='themeSelect' onInput={changeTheme} value={global.themeSelect} >
        <option value='system'>System preference</option>
        <option value='dark'>Dark</option>
        <option value='light'>Light</option>
        <option value='wired'>Wired</option>
        <option value='sakura'>Sakura</option>
      </select>
    </WindowedSection >
  )
}
export default SettingsSection;