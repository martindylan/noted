import { useNote } from '../NoteContext';
// Components
import Item from './Item/Item';
import AddItem from './AddItem/AddItem';
import { useState } from 'react';

export default function NoteContent() {
  const { note, setNote } = useNote();
  const [ items, setItems ] = useState(note.items);

  // Add item
  const addItem = (type: string) => {
    let newItems = [...note.items];
    const keys = Object.keys(note.items);
    if (keys) {
      newItems[newItems.length] = { content: '', type: type };
    } else {
      newItems[0] = '';
    }
    setNote({ ...note, items: newItems });
    setItems(newItems);
  }

  // Remove item
  const removeItem = (id: number) => {
    let newItems = [...items];
    newItems.splice(id, 1);
    setNote({ ...note, items: newItems });
    setItems(newItems);
  }

  return (
    <>
      {items.map((item: any, i: number) => {
        return <Item id={i} key={i} removeItem={removeItem} type={item.type} addItem={addItem} />
      })}
      <AddItem addItem={addItem} />
    </>
  )
}
