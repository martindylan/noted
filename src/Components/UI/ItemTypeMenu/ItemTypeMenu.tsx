import { useEffect, useState } from 'react';
import styles from './ItemTypeMenu.module.scss';
import text from 'Components/UI/ItemTypeMenu/img/text.png';
import heading from 'Components/UI/ItemTypeMenu/img/heading.png';
import bulleted from 'Components/UI/ItemTypeMenu/img/bulleted.png';
import checkbox from 'Components/UI/ItemTypeMenu/img/checkbox.png';
import { useNote } from 'Components/Body/Note/NoteContext';
import { useGlobal } from 'GlobalContext';
import { ItemType } from 'types';

interface IItemTypeMenuProps {
  changeType: (type: string) => void;
  item: ItemType | null;
  index: number | null;
  visibility: boolean;
}

const ItemTypeMenu = (props: IItemTypeMenuProps) => {

  const { global } = useGlobal();
  const { note } = useNote();
  const { item, index, changeType, visibility } = props;
  const [type, setType] = useState(note.items.find((i: ItemType) => i.id === item?.id)?.type);

  useEffect(() => {
    setType(note.items.find((i: ItemType) => i.id === item?.id)?.type);
  }, [note.items.find((i: ItemType) => i.id === item?.id)?.type])

  const isText = item?.id !== null && type === 'text';
  const isHeading = item?.id !== null && type === 'heading';
  const isBulleted = item?.id !== null && type === 'bulleted';
  const isCheckbox = item?.id !== null && type === 'checkbox';

  let fromToolsStyle;
  if (item && index !== null) {
    fromToolsStyle = index >= 1 ? styles.fromToolsUp : styles.fromToolsDown;
  } else {
    fromToolsStyle = styles.notFromTools;
  }

  return (
    <>
      {visibility &&
        <div className={`${styles.ItemTypeMenu} ${styles[global.theme]} ${fromToolsStyle}`}>
          {/* <div className={`${styles.ItemTypeMenu} ${styles[global.theme]} ${fromToolsStyle}`} style={{ visibility: visibility ? 'visible' : 'hidden', opacity: visibility ? 1 : 0 }}> */}
          <div className={styles.row}>
            <button className={isText ? styles.disabled : styles.enabled} disabled={isText} onClick={() => changeType('text')}>
              <img className={styles[global.theme]} src={text} alt='text' draggable="false" />
            </button>
            <button className={isHeading ? styles.disabled : styles.enabled} disabled={isHeading} onClick={() => changeType('heading')}>
              <img className={styles[global.theme]} src={heading} alt='heading' draggable="false" />
            </button>
          </div>
          <div className={styles.row}>
            <button className={isBulleted ? styles.disabled : styles.enabled} disabled={isBulleted} onClick={() => changeType('bulleted')}>
              <img className={styles[global.theme]} src={bulleted} alt='bulleted' draggable="false" />
            </button>
            <button className={isCheckbox ? styles.disabled : styles.enabled} disabled={isCheckbox} onClick={() => changeType('checkbox')}>
              <img className={styles[global.theme]} src={checkbox} alt='checkbox' draggable="false" />
            </button>
          </div>
        </div>
      }
    </>
  )
}
export default ItemTypeMenu;