import { useState, FunctionComponent, useEffect, useRef, useCallback } from 'react';
import { useGlobal } from '../../../../../GlobalContext';
import { useNote } from '../../NoteContext';
import styles from './Item.module.css';
// Components
import Tools from './Tools/Tools';

interface IItemProps {
  id: number;
  type: string;
  focus: boolean;
  addItem: (type: string, pos: number | null) => void;
  removeItem: (id: number) => void;
  scrollToBottom: () => void;
}

const Item: FunctionComponent<IItemProps> = (props) => {
  const [toolVisibility, setToolVisibility] = useState('hidden');
  const [draggedOver, setDraggedOver] = useState(false);
  const { note, setNote } = useNote();
  const { id, type, focus } = props;
  const { checked } = note.items[id] ? note.items[id] : false;
  const { global } = useGlobal()

  const mainRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);

  // Show/hide item's tools
  const showTools = (e: any) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setToolVisibility('visible');
    }
  }
  const hideTools = (e: any) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setToolVisibility('hidden');
    }
  }

  // Change item's type
  const changeType = (newType: string) => {
    let newItems = [...note.items];
    newItems[id].type = newType;
    setNote({ ...note, items: newItems });
  }

  // Set width and height of textarea element
  const resize = () => {
    const input = inputRef.current;
    if (input) {
      input.style.width = input.value.length + 'ch';
      input.style.height = 'auto';
      input.style.height = `calc(${input.scrollHeight}px - 0.75ch`;
    };
  }

  // Update item's checked property in items array
  const toggle = () => {
    let newItems = [...note.items];
    newItems[id].checked = !checked;
    setNote({ ...note, items: newItems });
  }

  // Set this item to be note's focused item
  const setToCurrent = useCallback((e: any) => {
    setNote((note: any) => ({ ...note, focus: id }));
    // Since this item is now focused, also show item's tools
    showTools(e);
  }, [setNote, id]);

  // Update the elements according to their corresponding reference in the note's items array
  const updateElements = () => {
    if (id < 0) return;
    const input = inputRef.current;
    if (input && focus && !global.dropDown) {
      input.focus();  // Focus element
      if (id === note.items.length - 1 && screen.width>=768) { // If this is the last item
        props.scrollToBottom(); // Scroll down to the bottom so that the + button is visible
      }
    }
    const text = note.items[id].content;
    // Set textarea value to corresponding reference in note's items
    if (input) input.value = text;
    resize();
    // If this item is of type checkbox, set the checkbox to corresponding reference in note's items
    if (checkboxRef.current) {
      checkboxRef.current.checked = checked;
    }
  }

  // Updates the items array according to the elements
  const updateItemsArray = useCallback((e: any) => {
    let newItems = [...note.items];
    newItems[id].content = e.target.value;
    setNote({ ...note, items: newItems });
    resize();
  }, [note, id, setNote]);

  // Handle key presses
  const keyDown = useCallback((e: any) => {
    const input = inputRef.current;
    if (e.key === 'Enter') {
      e.preventDefault();
      const newType = type === 'heading' ? 'text' : type;
      props.addItem(newType, id + 1);
    }
    else if (e.key === 'Backspace' && input?.value === '' && (id !== 0 || note.items.length > 1)) {
      e.preventDefault();
      if (note.items[id].type !== 'text') {
        let newItems = [...note.items];
        newItems[id].type = 'text';
        setNote({ ...note, focus: id, items: newItems });
      } else {
        props.removeItem(id);
      }
    }
  }, [props, id, type])

  // Handle drags
  const dragEnter = (e: any) => {
    e.preventDefault();
    setDraggedOver(true);
  }
  const dragLeave = (e: any) => {
    e.preventDefault();
    setDraggedOver(false);
  }
  const dragDrop = (e: any) => {
    const data = e.dataTransfer.getData('text/plain');
    if (data.slice(0, 7) !== 'itemId:') {
      return;
    }
    e.preventDefault();
    setDraggedOver(false);
    const draggedId = parseInt(data.slice(7));
    if (draggedId === id) return;
    let newItems = [...note.items];
    const droppedItem = { ...note.items[draggedId] };
    newItems.splice(id + 1, 0, droppedItem);
    newItems.splice(draggedId < id ? draggedId : draggedId + 1, 1);
    const newFocus = draggedId < id ? id : id + 1;
    setNote({ ...note, focus: newFocus, items: newItems });
  }

  // When mounting the component:
  useEffect(() => {
    // Add main's event listeners for hover and focus
    const main = mainRef.current;
    main?.addEventListener('mouseenter', showTools);
    main?.addEventListener('focusin', setToCurrent);
    main?.addEventListener('mouseleave', hideTools);
    main?.addEventListener('focusout', hideTools);
    updateElements(); // Update elements
    return () => {
      // Remove main's event listeners for hover and focus
      main?.removeEventListener('mouseenter', showTools);
      main?.removeEventListener('focusin', showTools);
      main?.removeEventListener('mouseleave', hideTools);
      main?.removeEventListener('focusout', hideTools);
    }
  }, [])

  // Set input's event listener for input and keypressed
  useEffect(() => {
    const input = inputRef.current;
    input?.addEventListener('input', updateItemsArray);
    input?.addEventListener('keydown', keyDown);
    return () => {
      input?.removeEventListener('input', updateItemsArray);
      input?.removeEventListener('keydown', keyDown);
    }
  }, [updateItemsArray, keyDown])

  // updateElements when an item in the items array gets added, deleted or changes type
  useEffect(() => {
    updateElements();
  }, [note.items])

  // Return JSX according to item type
  const makeItem = () => {
    const dragEnterStyle = draggedOver ? styles.draggedOver : styles.notDraggedOver;
    switch (type) {
      case 'text':
        return (
          <textarea onDragOver={(e) => { e.preventDefault() }} onDragEnter={dragEnter} onDragLeave={dragLeave} onDrop={dragDrop} rows={1} ref={inputRef} className={`${styles.input} ${dragEnterStyle}`} placeholder='...'></textarea>
        );
      case 'heading':
        return (
          <textarea onDragOver={(e) => { e.preventDefault() }} onDragEnter={dragEnter} onDragLeave={dragLeave} onDrop={dragDrop} rows={1} ref={inputRef} className={`${styles.input} ${styles.heading} ${dragEnterStyle}`} placeholder='...'></textarea>
        );
      case 'bulleted':
        return (
          <>
            <div className={styles.bulleted}><div className={styles.bullet}></div></div>
            <textarea onDragOver={(e) => { e.preventDefault() }} onDragEnter={dragEnter} onDragLeave={dragLeave} onDrop={dragDrop} rows={1} ref={inputRef} className={`${styles.input} ${dragEnterStyle}`} placeholder='...'></textarea>
          </>
        );
      case 'checkbox':
        return (
          <>
            <div className={`${styles.checkbox} checked${checked}`}><input ref={checkboxRef} type="checkbox" onClick={toggle}></input></div>
            <textarea onDragOver={(e) => { e.preventDefault() }} onDragEnter={dragEnter} onDragLeave={dragLeave} onDrop={dragDrop} rows={1} ref={inputRef} className={`${styles.input} ${dragEnterStyle}`} placeholder='...'></textarea>
          </>
        );
      case 'none':
        return (
          <div onDragOver={(e) => { e.preventDefault() }} onDragEnter={dragEnter} onDragLeave={dragLeave} onDrop={dragDrop} className={`${styles.input} ${styles.none} ${dragEnterStyle}`}></div>
        )
      default:
        return (
          <textarea onDragOver={(e) => { e.preventDefault() }} onDragEnter={dragEnter} onDragLeave={dragLeave} onDrop={dragDrop} rows={1} ref={inputRef} className={`${styles.input} ${dragEnterStyle}`} placeholder='...'></textarea>
        );
    }
  }

  return (
    <div ref={mainRef} className={styles.this}>
      {makeItem()}
      {type !== 'none' &&
        <>
          <Tools visibility={toolVisibility} id={id} removeItem={props.removeItem} changeType={changeType}></Tools>
        </>
      }
    </div >
  )
}

export default Item;