import { useState, FunctionComponent, useEffect, useRef, useCallback } from 'react';
import { useNote } from '../../NoteContext';
import styles from './Item.module.css';
// Components
import Tools from './Tools/Tools';

interface IItemProps {
  id: number;
  removeItem: (id: number) => void;
  type: string;
  addItem: (type: string | null, pos: number | null) => void;
  focus: boolean;
}

const Item: FunctionComponent<IItemProps> = (props) => {
  const [toolVisibility, setToolVisibility] = useState('hidden');
  const { note, setNote } = useNote();
  const { id, type } = props;
  const { checked } = note.items[id];

  const mainRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);

  // Show and hide item tool
  const showTool = (e: any) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setToolVisibility('visible');
    }
  }
  const hideTool = (e: any) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setToolVisibility('hidden');
    }
  }

  // Set width and height of textarea
  const resize = () => {
    const input = inputRef.current;
    if (input) {
      input.style.width = input.value.length + 'ch';
      input.style.height = 'auto';
      input.style.height = `calc(${input.scrollHeight}px - 0.75ch`;
    };
  }

  // Toggle checkbox in items object
  const toggle = () => {
    let newItems = [...note.items];
    newItems[id].checked = !checked;
    setNote({ ...note, items: newItems })
  }

  // Focus item and set caret to end of content
  const focusEnd = (element: any) => {
    // Set caret to end
    // const sel = window.getSelection();
    // sel?.setBaseAndExtent(parent, 1, parent.childNodes[0], 0);
    const input = element;
    var len = input.value.length;

    // Mostly for Web Browsers
    if (input.setSelectionRange) {
      input.focus();
      input.setSelectionRange(len, len);
    } else if (input.createTextRange) {
      var t = input.createTextRange();
      t.collapse(true);
      t.moveEnd('character', len);
      t.moveStart('character', len);
      t.select();
    }
  }

  // Set note focus to this item
  // Show item tool
  const setToCurrent = useCallback((e: any) => {
    setNote((note: any) => ({ ...note, focus: id }));
    showTool(e);
  }, [setNote, id]);

  // Updates the items object according to input's inner text
  const updateItems = useCallback((e: any) => {
    let newItems = [...note.items];
    newItems[id].content = e.target.value;
    setNote({ ...note, items: newItems });
    resize();
  }, [note, id, setNote]);

  // Manage key presses
  const keyDown = useCallback((e: any) => {
    const input = inputRef.current;
    if (e.key === 'Enter') {
      e.preventDefault();
      const newType = type === 'heading' ? 'text' : type;
      props.addItem(newType, id + 1);
    } else if (e.key === 'Backspace' && input?.value === '' && id !== 0) {
      props.removeItem(id);
    }
  }, [props, id, type])

  // When mounting the component:
  useEffect(() => {
    // Add main's event listeners for hover and focus
    const main = mainRef.current;
    main?.addEventListener('mouseenter', showTool);
    main?.addEventListener('focusin', setToCurrent);
    main?.addEventListener('mouseleave', hideTool);
    main?.addEventListener('focusout', hideTool);
    // Focus item if it was previously focused for the given note
    const input = inputRef.current;
    if (input && props.focus) {
      focusEnd(input);
    }
    // Set input's value according to the items object
    const text = note.items[id].content;
    if (input) {
      input.value = text ? text : '';
    }
    resize();
    if (checkboxRef.current) {
      checkboxRef.current.checked = checked;
    }
    return () => {
      // Remove main's event listeners for hover and focus
      main?.removeEventListener('mouseenter', showTool);
      main?.removeEventListener('focusin', showTool);
      main?.removeEventListener('mouseleave', hideTool);
      main?.removeEventListener('focusout', hideTool);
    }
  }, [])

  // Set input's event listener for input and keypressed
  useEffect(() => {
    const input = inputRef.current;
    input?.addEventListener('input', updateItems);
    input?.addEventListener('keydown', keyDown);
    return () => {
      input?.removeEventListener('input', updateItems);
      input?.removeEventListener('keydown', keyDown);
    }
  }, [updateItems, keyDown])

  // Set input's inner text when an item in the items array gets added or deleted
  useEffect(() => {
    const input = inputRef.current;
    if (input && props.focus) {
      focusEnd(input);
    }
    const text = note.items[id].content;
    if (input) {
      input.value = text;
    }
  }, [note.items.length, props.focus])

  // Return JSX according to item type
  const makeItem = () => {
    switch (type) {
      case 'text':
        return (
          <textarea rows={1} ref={inputRef} className={styles.input} placeholder='...'></textarea>
        );
      case 'heading':
        return (
          <textarea rows={1} ref={inputRef} className={`${styles.input} ${styles.heading}`} placeholder='...'></textarea>
        );
      case 'bulleted':
        return (
          <>
            <div className={styles.bulleted}></div>
            <textarea rows={1} ref={inputRef} className={styles.input} placeholder='...'></textarea>
          </>
        );
      case 'checkbox':
        return (
          <>
            <div className={`${styles.checkbox} checked${checked}`}><input ref={checkboxRef} type="checkbox" onClick={toggle}></input></div>
            <textarea rows={1} ref={inputRef} className={`${styles.input} checked${checked}`} placeholder='...'></textarea>
          </>
        );
      default:
        return (
          <textarea ref={inputRef} className={styles.input} placeholder='...'></textarea>
        );
    }
  }

  return (
    <div ref={mainRef} className={styles.this}>
      {makeItem()}
      <Tools visibility={toolVisibility} id={id} removeItem={props.removeItem}></Tools>
    </div>
  )
}

export default Item;