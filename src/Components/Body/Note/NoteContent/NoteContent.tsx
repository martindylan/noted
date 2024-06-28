import { useNote } from '../NoteContext';
import styles from './NoteContent.module.scss';
// Components
import Item from './Item/Item';
import AddItem from './AddItem/AddItem';
import { useRef, useState } from 'react';
import { DragDropContext, DragStart, DropResult, Droppable } from '@hello-pangea/dnd';
import { ItemType, NoteType } from '../../../../types';
import ModalPrompt from '../../../UI/Modals/ModalPrompt';

export default function NoteContent() {
  const { note, setNote } = useNote();
  const [deleteIndex, setDeleteIndex] = useState(-1);

  const bottomRef = useRef<HTMLDivElement>(null);

  const onDragStart = (e: DragStart) => {
    setNote((prev: NoteType) => ({ ...prev, isDragging: true }));
  }

  const onDragEnd = (e: DropResult) => {
    const source = e.source.index;
    const destination = e.destination?.index;

    // if there's no drag destination, or source and destination index are the same, set isDragging to false and return function
    if ((destination === null || destination === undefined) || source === destination) {
      setNote((prev) => ({ ...prev, isDragging: false }))
      return;
    }

    let newItems = [...note.items];
    const droppedItem = { ...note.items[source] };

    if (destination > source) {
      newItems.splice(destination + 1, 0, droppedItem);
      newItems.splice(source, 1);
    } else {
      newItems.splice(destination, 0, droppedItem);
      newItems.splice(source + 1, 1);
    }

    setNote((prev) => ({ ...prev, items: newItems, focus: destination, isDragging: false }));
  }

  // Add item
  const addItem = (type: string, pos?: number) => {
    let newItems = [...note.items];
    // if no item position is given, add item at the end of the note
    let i = pos ? pos : newItems.length;
    newItems.splice(i, 0, { content: '', type: type, checked: false, id: new Date().getTime() });
    setNote({ ...note, items: newItems, focus: i });
  }

  // Remove item
  const removeItem = (index: number) => {
    let newItems = [...note.items];
    newItems.splice(index, 1);
    setDeleteIndex(-1);
    setNote({ ...note, items: newItems, focus: index - 1 });
  }

  // Scroll to bottom of note content
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView();
  }

  return (
    <>
      <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <Droppable droppableId={`${note.id}`} type='NOTE'>
          {(provided, snapshot) => (
            <div className={styles.NoteContent} ref={provided.innerRef} {...provided.droppableProps}>
              {note.items.map((item: ItemType, i: number) => {
                const isFocused = note.focus === i;
                return <Item key={item.id} index={i} item={item} focus={isFocused} removeItem={removeItem} addItem={addItem} setDeleteIndex={setDeleteIndex} scrollToBottom={scrollToBottom} />
              })}
              {provided.placeholder}
              <AddItem addItem={addItem} />
              <div ref={bottomRef}></div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <ModalPrompt
        title='Warning'
        prompt='Are you sure you want to delete this item?'
        acceptText='Delete'
        isOpen={deleteIndex > -1}
        background='rgba(0,0,0,0)'
        close={() => setDeleteIndex(-1)}
        onAccept={() => removeItem(deleteIndex)}
      />
    </>
  )
}
