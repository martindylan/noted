import { FunctionComponent } from 'react';
import styles from './ItemTypeMenu.module.css';
import text from './img/text.png';
import heading from './img/heading.png';
import bulleted from './img/bulleted.png';
import checkbox from './img/checkbox.png';

interface IItemTypeMenu {
  sendTypeToParent: (type: string | null) => void;
}

const ItemTypeMenu: FunctionComponent<IItemTypeMenu> = (props) => {

  const sendTypeToParent = props.sendTypeToParent;

  return (
    <div className={styles.this}>
      <div className={styles.row}>
        <button onClick={() => sendTypeToParent('text')}><img src={text} alt='text' draggable="false"/></button>
        <button onClick={() => sendTypeToParent('heading')}><img src={heading} alt='heading' draggable="false"/></button>
      </div>
      <div className={styles.row}>
        <button onClick={() => sendTypeToParent('bulleted')}><img src={bulleted} alt='bulleted' draggable="false"/></button>
        <button onClick={() => sendTypeToParent('checkbox')}><img src={checkbox} alt='checkbox' draggable="false"/></button>
      </div>
    </div>
  )
}
export default ItemTypeMenu;