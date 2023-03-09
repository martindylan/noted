import { useNote } from '../NoteContext';
import styles from './NoteContent.module.css';
// Components
import Item from './Item/Item';
import AddItem from './AddItem/AddItem';
import { useRef, useState } from 'react';

export default function NoteContent() {
  const { note, setNote } = useNote();
  const bottomRef = useRef<HTMLDivElement>(null);

  // Add item
  const addItem = (type: string, pos: number | null) => {
    let newItems = [...note.items];
    let i = pos ? pos : newItems.length;
    newItems.splice(i, 0, { content: '', type: type, done: false });
    setNote({ ...note, items: newItems, focus: i });
  }

  // Remove item
  const removeItem = (id: number) => {
    const confirmation = window.confirm('Are you sure you want to delete this item?');
    if (!confirmation) return;
    let newItems = [...note.items];
    newItems.splice(id, 1);
    setNote({ ...note, items: newItems, focus: id - 1 });
  }

  // Scroll to bottom of note content
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView();
  }

  return (
    <div className={styles.this}>
      <Item key={-1} id={-1} type={'none'} focus={false} removeItem={removeItem} addItem={addItem} scrollToBottom={scrollToBottom} />
      {note.items.map((item: any, i: number) => {
        const isFocused = note.focus === i;
        return <Item key={i} id={i} type={item.type} focus={isFocused} removeItem={removeItem} addItem={addItem} scrollToBottom={scrollToBottom} />
      })}
      <AddItem addItem={addItem} />
      <div ref={bottomRef}></div>
    </div>
  )
}
