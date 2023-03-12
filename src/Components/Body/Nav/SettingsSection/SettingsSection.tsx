import WindowedSection from '../../../UI/WindowedSection/WindowedSection';
import styles from './SettingsSection.module.scss';
import textButton from '../../../../Resources/SASS/textButton.module.scss'
import { useGlobal } from '../../../../GlobalContext';
import { saveAs } from 'file-saver';
import { FunctionComponent } from 'react';

interface ISettingsSectionProps {
  isOpen: (open: boolean) => void;
}

const SettingsSection: FunctionComponent<ISettingsSectionProps> = (props) => {
  const { global, setGlobal } = useGlobal();
  const deleteNotes = () => {
    const confirmation = window.confirm('Are you sure you want to delete your notes? This will be permanent.\nRemember you can always export your notes.')
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

  const importNotes = (e: any) => {
    let fr = new FileReader();
    fr.readAsText(e.target.files[0]);
    fr.onload = () => {
      if (typeof fr.result === 'string') {
        setGlobal(JSON.parse(fr.result));
        props.isOpen(false);
      }
    }
  }

  const changeTheme = (e: any) => {
    setGlobal({...global, themeSelect: e.target.value});
  }

  return (
    <WindowedSection isOpen={props.isOpen} title='Settings'>
      <div className={styles.centeredButtons}>
        <button onClick={deleteNotes} className={`${textButton.textButton} ${textButton[global.theme]}`}>Delete notes</button>
        <button onClick={exportNotes} className={`${textButton.textButton} ${textButton[global.theme]}`}>Export notes</button>
        {/* <button onClick={importNotes} className={textButton.textButton}>Import notes</button> */}
        <label className={`${styles.loadFile} ${textButton.textButton} ${textButton[global.theme]}`}>
          Import notes
          <input type='file' accept='.txt' onChange={importNotes}></input>
        </label>
      </div>
      <br></br>
      <label htmlFor='themeSelect'>Theme: </label>
      <select className={styles[global.theme]} name='theme' id='themeSelect' onInput={changeTheme} value={global.themeSelect} >
        <option value='system'>System preference</option>
        <option value='dark'>Dark</option>
        <option value='light'>Light</option>
      </select>
    </WindowedSection >
  )
}
export default SettingsSection;