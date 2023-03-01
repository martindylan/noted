import { useState, FunctionComponent, useEffect, useRef, useCallback } from 'react';
import { useContent } from '../../ContentContext';
import styles from './Item.module.css';
// Components
import Tools from './Tools/Tools';

interface IItemProps {
  id: number;
  removeItem: any;
  type: string;
}

const Item: FunctionComponent<IItemProps> = (props) => {
  const [toolVisibility, setToolVisibility] = useState('hidden');
  const { content, setContent } = useContent();
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
    const text = content.items[id].content;
    input?.focus();
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

  const updateItems = useCallback((e: any) => {
    let newItems = { ...content.items };
    newItems[id].content = e.target.innerText;
    setContent({ ...content, items: newItems });
  }, [content, id, setContent]);

  useEffect(() => {
    const input = inputRef.current;
    input?.addEventListener('input', updateItems);
    return () => {
      input?.removeEventListener('input', updateItems);
    }
  }, [updateItems])

  const makeItem = () => {
    switch (props.type) {
      case 'text':
        return <span ref={inputRef} className={styles.text} contentEditable></span>;
      case 'bulleted':
        return <><div className={styles.bullet}></div><span ref={inputRef} className={styles.text} contentEditable></span></>
      case 'subtitle':
        return <span ref={inputRef} className={`${styles.text} ${styles.subtitle}`} contentEditable></span>;
      default:
        return <span ref={inputRef} className={styles.text} contentEditable></span>;
    }
  }

  return (
    <div ref={mainRef} className={styles.this}>
      <Tools visibility={toolVisibility} id={id} removeItem={props.removeItem}></Tools>
      {makeItem()}
    </div>
  )
}

export default Item;