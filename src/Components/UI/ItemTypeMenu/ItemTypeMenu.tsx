import { FunctionComponent, useEffect, useState } from 'react';
import styles from './ItemTypeMenu.module.scss';
import text from './img/text.png';
import heading from './img/heading.png';
import bulleted from './img/bulleted.png';
import checkbox from './img/checkbox.png';
import { useNote } from '../../Body/Note/NoteContext';
import { useGlobal } from '../../../GlobalContext';

interface IItemTypeMenu {
  sendTypeToParent: (type: string, pos: number | null) => void;
  id: number | null;
  visibility: boolean;
  fromTools: boolean;
}

const ItemTypeMenu: FunctionComponent<IItemTypeMenu> = (props) => {

  const { global } = useGlobal();
  const { note } = useNote();
  const id = props.id;
  const [type, setType] = useState(id !== null ? note.items[id].type : null);
  const sendType = props.sendTypeToParent;

  useEffect(() => {
    setType(id !== null ? note.items[id].type : null);
  }, [id !== null ? note.items[id].type : null])

  const isText = id !== null && type === 'text';
  const isHeading = id !== null && type === 'heading';
  const isBulleted = id !== null && type === 'bulleted';
  const isCheckbox = id !== null && type === 'checkbox';

  let fromToolsStyle;
  if (props.fromTools && id !== null) {
    fromToolsStyle = id > 1 ? styles.fromToolsUp : styles.fromToolsDown;
  } else {
    fromToolsStyle = styles.notFromTools;
  }
  return (
    <>
      {props.visibility &&
        <div className={`${styles.ItemTypeMenu} ${styles[global.theme]} ${fromToolsStyle}`}>
          {/* <div className={`${styles.ItemTypeMenu} ${styles[global.theme]} ${fromToolsStyle}`} style={{ visibility: props.visibility ? 'visible' : 'hidden', opacity: props.visibility ? 1 : 0 }}> */}
          <div className={styles.row}>
            <button className={isText ? styles.disabled : styles.enabled} disabled={isText} onClick={() => sendType('text', id ? id : null)}>
              <img className={styles[global.theme]} src={text} alt='text' draggable="false" />
            </button>
            <button className={isHeading ? styles.disabled : styles.enabled} disabled={isHeading} onClick={() => sendType('heading', id ? id : null)}>
              <img className={styles[global.theme]} src={heading} alt='heading' draggable="false" />
            </button>
          </div>
          <div className={styles.row}>
            <button className={isBulleted ? styles.disabled : styles.enabled} disabled={isBulleted} onClick={() => sendType('bulleted', id ? id : null)}>
              <img className={styles[global.theme]} src={bulleted} alt='bulleted' draggable="false" />
            </button>
            <button className={isCheckbox ? styles.disabled : styles.enabled} disabled={isCheckbox} onClick={() => sendType('checkbox', id ? id : null)}>
              <img className={styles[global.theme]} src={checkbox} alt='checkbox' draggable="false" />
            </button>
          </div>
        </div>
      }
    </>
  )
}
export default ItemTypeMenu;