import { useState, FunctionComponent, useEffect, useRef, useCallback } from 'react';
import styles from './Item.module.css';
import Tools from './Tools/Tools';
import { useItems } from '../../../../../ItemsContext';

interface IItemProps {
  id: number;
  children: any;
  removeItem: any;
}

const Item: FunctionComponent<IItemProps> = (props) => {
  const [toolVisibility, setToolVisibility] = useState('hidden');
  const { notes, setNotes } = useItems();
  const { id } = props;

  const mainRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLSpanElement>(null);

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

  useEffect(() => {
    const main = mainRef.current;
    main?.addEventListener('mouseenter', showTool);
    main?.addEventListener('focusin', showTool);
    main?.addEventListener('mouseleave', hideTool);
    main?.addEventListener('focusout', hideTool);
    const input = inputRef.current;
    input?.focus();
    if (input) {
      input.innerText = notes[0].items[id]
    }
    return () => {
      main?.removeEventListener('mouseenter', showTool);
      main?.removeEventListener('focusin', showTool);
      main?.removeEventListener('mouseleave', hideTool);
      main?.removeEventListener('focusout', hideTool);
    }
  }, [])

  const updateItems = useCallback((e: any) => {
    let newItems = { ...notes[0].items };
    newItems[id] = e.target.innerText;
    setNotes({ ...notes, 0: { items: newItems } });
  }, [notes[0].items, id, setNotes]);
  // Add event listener on input to update items object
  useEffect(() => {
    const input = inputRef.current;
    input?.addEventListener('input', updateItems);
    return () => {
      input?.removeEventListener('input', updateItems);
    }
  }, [updateItems])

  return (
    <div ref={mainRef} className={styles.this}>
      <Tools visibility={toolVisibility} id={id} removeItem={props.removeItem}></Tools><span ref={inputRef} className={styles.text} contentEditable></span>
    </div>
  )
}

export default Item;