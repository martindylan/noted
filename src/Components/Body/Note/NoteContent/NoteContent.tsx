import { useNote } from '../NoteContext';
// Components
import Item from './Item/Item';
import AddItem from './AddItem/AddItem';
import { useState } from 'react';

export default function NoteContent() {
  const { note, setNote } = useNote();
  const [items, setItems] = useState(note.items);

  // Add item
  const addItem = (type: string | null, pos: number | null) => {
    let newItems = [...note.items];
    let i = pos ? pos : newItems.length;
    newItems.splice(i, 0, { content: '', type: type, done: false });
    setNote({ ...note, items: newItems, focus: i });
    setItems(newItems);
  }

  // Remove item
  const removeItem = (id: number) => {
    let newItems = [...items];
    newItems.splice(id, 1);
    setNote({ ...note, items: newItems, focus: id-1 });
    setItems(newItems);
  }

  return (
    <>
      {items.map((item: any, i: number) => {
        const isFocused = note.focus === i;
        return <Item id={i} key={i} removeItem={removeItem} type={item.type} addItem={addItem} focus={isFocused} />
      })}
      <AddItem addItem={addItem} />
    </>
  )
}
