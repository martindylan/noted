import { useState, FunctionComponent, useEffect, useRef, useCallback } from 'react';
import { useGlobal } from '../../../../../GlobalContext';
import { useNote } from '../../NoteContext';
import styles from './Item.module.css';
// Components
import Tools from './Tools/Tools';

interface IItemProps {
  id: number;
  removeItem: any;
  type: string;
  addItem: (type: string) => void;
}

const Item: FunctionComponent<IItemProps> = (props) => {
  const [toolVisibility, setToolVisibility] = useState('hidden');
  const { note, setNote } = useNote();
  const { id } = props;
  const { global, setGlobal } = useGlobal();

  const mainRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLSpanElement>(null);

  // Set global current item to this item
  const setToCurrent = (e: any) => {
    setGlobal({ ...global, currentItem: id });
    showTool(e);
  }
  // Show and hide item tools when hovering/focusing
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

  // When mounting the component:
  // Set main's event listeners for hover and focus
  // Set input's inner text according to the items object
  useEffect(() => {
    const main = mainRef.current;
    main?.addEventListener('mouseenter', showTool);
    main?.addEventListener('focusin', setToCurrent);
    main?.addEventListener('mouseleave', hideTool);
    main?.addEventListener('focusout', hideTool);
    const input = inputRef.current;
    const text = note.items[id].content;
    if (input && text) {
      input.innerText = text;
    }
    return () => {
      main?.removeEventListener('mouseenter', showTool);
      main?.removeEventListener('focusin', showTool);
      main?.removeEventListener('mouseleave', hideTool);
      main?.removeEventListener('focusout', hideTool);
    }
  }, [])

  // Set input's inner text when an item in the items array gets added or deleted
  useEffect(() => {
    const input = inputRef.current;
    const text = note.items[id].content;
    if (input && text) {
      input.innerText = text;
    }
  }, [note.items.length])


  // Updates the items object according to input's inner text
  const updateItems = useCallback((e: any) => {
    let newItems = [...note.items];
    newItems[id].content = e.target.innerText;
    setNote({ ...note, items: newItems });
  }, [note, id, setNote]);

  // Manage key presses
  const keyPressed = useCallback((e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      props.addItem('');
    }
  }, [props])

  // Set input's event listener for input, on event calls updateItems();
  useEffect(() => {
    const input = inputRef.current;
    input?.addEventListener('input', updateItems);
    input?.addEventListener('keypress', keyPressed);
    return () => {
      input?.removeEventListener('input', updateItems);
      input?.removeEventListener('keypress', keyPressed);
    }
  }, [updateItems, keyPressed])

  // Return JSX according to item type
  const makeItem = () => {
    switch (props.type) {
      case 'text':
        return <span ref={inputRef} className={styles.text} contentEditable></span>;
      case 'bulleted':
        return <><div className={styles.bulleted}></div><span ref={inputRef} className={styles.text} contentEditable></span></>
      case 'heading':
        return <span ref={inputRef} className={`${styles.text} ${styles.heading}`} contentEditable></span>;
      default:
        return <span ref={inputRef} className={styles.text} contentEditable></span>;
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