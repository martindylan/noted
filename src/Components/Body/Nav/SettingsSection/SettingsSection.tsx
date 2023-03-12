import WindowedSection from '../../../UI/WindowedSection/WindowedSection';
import styles from './SettingsSection.module.scss';
import textButton from '../../../../Resources/SASS/textButton.module.scss'
import { useGlobal } from '../../../../GlobalContext';
import { saveAs } from 'file-saver';
import { FunctionComponent } from 'react';

interface ISettingsSectionProps {
  isOpen: (open: boolean)=>void;
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
      if (typeof fr.result === 'string' ) {
        setGlobal(JSON.parse(fr.result));
        props.isOpen(false);
      }
    }
  }

  return (
    <WindowedSection isOpen={props.isOpen} title='Settings'>
      <div className={styles.centeredButtons}>
        <button onClick={deleteNotes} className={textButton.textButton}>Delete notes</button>
        <button onClick={exportNotes} className={textButton.textButton}>Export notes</button>
        {/* <button onClick={importNotes} className={textButton.textButton}>Import notes</button> */}
        <label className={`${styles.loadFile} ${textButton.textButton}`}>
          Import notes
          <input type='file' accept='.txt' onChange={importNotes}></input>
        </label>
      </div>
    </WindowedSection >
  )
}
export default SettingsSection;