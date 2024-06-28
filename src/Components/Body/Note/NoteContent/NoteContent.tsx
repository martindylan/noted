import { useNote } from '../NoteContext';
import styles from './NoteContent.module.scss';
// Components
import Item from './Item/Item';
import AddItem from './AddItem/AddItem';
import { useRef } from 'react';
import { DragDropContext, DragStart, DropResult, Droppable } from '@hello-pangea/dnd';
import { ItemType, NoteType } from '../../../../types';

export default function NoteContent() {
  const { note, setNote } = useNote();
  const bottomRef = useRef<HTMLDivElement>(null);

  const onDragStart = (e: DragStart) => {
    setNote((prev: NoteType) => ({ ...prev, isDragging: true }));
  }

  const onDragEnd = (e: DropResult) => {
    if (!e.destination || e.source.index === e.destination.index) return;

    let newItems = [...note.items];
    const droppedItem = { ...note.items[e.source.index] };

    if (e.destination.index > e.source.index) {
      newItems.splice(e.destination.index + 1, 0, droppedItem);
      newItems.splice(e.source.index, 1);
    } else {
      newItems.splice(e.destination.index, 0, droppedItem);
      newItems.splice(e.source.index + 1, 1);
    }

    setNote({ ...note, items: newItems, focus: e.destination.index, isDragging: false });
  }

  // Add item
  const addItem = (type: string, pos: number | null) => {
    let newItems = [...note.items];
    let i = pos ? pos : newItems.length;
    newItems.splice(i, 0, { content: '', type: type, checked: false, id: new Date().getTime() });
    setNote({ ...note, items: newItems, focus: i });
  }

  // Remove item
  const removeItem = (id: number) => {
    if (note.items.find((item: ItemType) => item.id === id)?.content !== "") {
      const confirmation = window.confirm('Are you sure you want to delete this item?');
      if (!confirmation) return;
    };
    let newItems = [...note.items];
    newItems.splice(id, 1);
    setNote({ ...note, items: newItems, focus: id - 1 });
  }

  // Scroll to bottom of note content
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView();
  }

  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <Droppable droppableId={`${note.id}`} type='NOTE'>
        {(provided, snapshot) => (
          <div className={styles.NoteContent} ref={provided.innerRef} {...provided.droppableProps}>
            {note.items.map((item: ItemType, i: number) => {
              const isFocused = note.focus === i;
              return <Item key={item.id} index={i} item={item} focus={isFocused} removeItem={removeItem} addItem={addItem} scrollToBottom={scrollToBottom} />
            })}
            {provided.placeholder}
            <AddItem addItem={addItem} />
            <div ref={bottomRef}></div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
