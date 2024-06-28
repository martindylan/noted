import { useState, useEffect, useRef, useCallback } from 'react';
import { useGlobal } from '../../../../../GlobalContext';
import { useNote } from '../../NoteContext';
import styles from './Item.module.scss';
import inputTextBox from '../../../../../Resources/SASS/inputTextBox.module.scss';
// Components
import Tools from './Tools/Tools';
import { Draggable } from '@hello-pangea/dnd';
import { ItemType, NoteType } from '../../../../../types';

interface IItemProps {
  index: number;
  item: ItemType;
  focus: boolean;
  addItem: (type: string, pos: number) => void;
  removeItem: (id: number) => void;
  scrollToBottom: () => void;
  setDeleteIndex: (id: number) => void;
}

const Item = (props: IItemProps) => {
  const [toolVisibility, setToolVisibility] = useState('hidden');
  const { note, setNote } = useNote();
  const { index, item, focus, addItem, removeItem, setDeleteIndex, scrollToBottom } = props;
  const { checked } = item;
  const { global } = useGlobal();

  const mainRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);

  // Show/hide item's tools
  const showTools = (e: MouseEvent | FocusEvent) => {
    const element = e.currentTarget as any;
    if (!element.contains(e.relatedTarget as HTMLDivElement)) {
      setToolVisibility('visible');
    }
  }
  const hideTools = (e: FocusEvent) => {
    const element = e.currentTarget as HTMLDivElement;
    if (!element.contains(e.relatedTarget as HTMLDivElement)) {
      setToolVisibility('hidden');
    }
  }

  // Change item's type
  const changeType = (newType: string) => {
    let newItems = [...note.items];
    newItems[index].type = newType;
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
    newItems[index].checked = !checked;
    setNote({ ...note, items: newItems });
  }

  // Set this item to be note's focused item
  const setToCurrent = useCallback((e: FocusEvent) => {
    setNote((note: NoteType) => ({ ...note, focus: index }));
    // Since this item is now focused, also show item's tools
    showTools(e);
  }, [setNote, index]);

  // Update the elements according to their corresponding reference in the note's items array
  const updateElements = () => {
    if (index < 0) return;
    const input = inputRef.current;
    if (input && focus && !global.dropDown) {
      input.focus();  // Focus element
      if (index === note.items.length - 1 && window.screen.width >= 768) { // If this is the last item && not on mobile phone
        scrollToBottom(); // Scroll down to the bottom so that the + button is visible
      }
    }
    const text = item.content;
    // Set textarea value to corresponding reference in note's items
    if (input) input.value = text;
    resize();
    // If this item is of type checkbox, set the checkbox to corresponding reference in note's items
    if (checkboxRef.current) {
      checkboxRef.current.checked = checked;
    }
  }

  // Updates the items array according to the elements
  const updateItemsArray = useCallback((e: Event) => {
    const input = e.target as HTMLTextAreaElement;
    let newItems = [...note.items];
    newItems[index].content = input.value;
    setNote({ ...note, items: newItems });
    resize();
  }, [note, index, setNote]);

  // Handle key presses
  const keyDown = useCallback((e: KeyboardEvent) => {
    const input = inputRef.current;
    if (e.key === 'Enter') {
      e.preventDefault();
      const newType = item.type === 'heading' ? 'text' : item.type;
      addItem(newType, index + 1);
    }
    else if (e.key === 'Backspace' && input?.value === '' && (index !== 0 || note.items.length > 1)) {
      e.preventDefault();
      if (item.type !== 'text') {
        let newItems = [...note.items];
        newItems[index].type = 'text';
        setNote({ ...note, focus: index, items: newItems });
      } else {
        removeItem(index);
      }
    }
  }, [props, index, item.type])

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
      main?.removeEventListener('focusin', setToCurrent);
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

  return (
    <div ref={mainRef}>
      <Draggable draggableId={`${item.id}`} index={index}>
        {(provided, snapshot) => (
          <div className={`${styles.Item} ${snapshot.isDragging ? styles.isDragging : ''}`} ref={provided.innerRef} {...provided.draggableProps}>
            {item.type === 'bulleted' &&
              <div className={inputTextBox.bulleted}><div className={`${inputTextBox.bullet} ${inputTextBox[global.theme]}`}></div></div>
            }

            {item.type === 'checkbox' &&
              <div className={`${inputTextBox.checkbox} ${inputTextBox['checked' + checked]} ${inputTextBox[global.theme]}`}><input ref={checkboxRef} type="checkbox" onClick={toggle}></input></div>
            }

            {item.type === 'none'
              ?
              <div onDragOver={(e) => { e.preventDefault() }} className={`${styles.input} ${inputTextBox[item.type]} ${inputTextBox[checked ? 'checked' : '']} ${inputTextBox[global.theme]}`}></div>
              :
              <div style={{ display: 'flex', width: '0', flexGrow: 1 }} onDragOver={(e) => { e.preventDefault() }}>
                <textarea rows={1} ref={inputRef} className={`${styles.input} ${inputTextBox.inputTextBox} ${inputTextBox[item.type]} ${inputTextBox[checked ? 'checked' : '']} ${inputTextBox[global.theme]}`} placeholder='...'></textarea>
                <Tools show={note.isDragging ? 'hidden' : toolVisibility} item={item} index={index} removeItem={item.content == "" ? removeItem : setDeleteIndex} changeType={changeType} provided={provided} />
              </div>
            }
          </div>
        )}
      </Draggable>
    </div>
  )
}

export default Item;