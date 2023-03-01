import { FunctionComponent } from 'react'
import { useContent } from '../../ContentContext';
import styles from './NewItem.module.css'

const NewItem: FunctionComponent<any> = () => {
  const { content, setContent } = useContent();

  const newItem = () => {
    let newItems = { ...content.items };
    const keys = Object.keys(content.items);
    if (keys) {
      const newId = keys[keys.length - 1] + 1;
      newItems[newId] = '';
    } else {
      newItems[0] = '';
    }
    setContent({ ...content, items: newItems });
  }

  return (
    <button className={styles.this} onClick={newItem}>+</button>
  )
}

export default NewItem;