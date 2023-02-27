import { FunctionComponent } from 'react'
import styles from './NewItem.module.css'
import { useItems } from '../../../../../ItemsContext';

type NewItemProps = {

}

const NewItem: FunctionComponent<NewItemProps> = (props) => {

  const { notes, setNotes } = useItems();

  const newItem = () => {
    let newItems = {...notes[0].items};
    const keys = Object.keys(notes[0].items);
    if (keys) {
      const newId = keys[keys.length-1]+1;
      newItems[newId] = '';
    } else {
      newItems[0] = '';
    }
    setNotes({ ...notes, 0: { items: newItems } });
  }

  return (
    <button className={styles.this} onClick={newItem}>+</button>
  )
}

export default NewItem;