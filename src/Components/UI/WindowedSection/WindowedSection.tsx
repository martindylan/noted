import React, { FunctionComponent, ReactElement, ReactNode, useEffect, useRef } from 'react';
import styles from './WindowedSection.module.scss';
import closeImg from '../../../Resources/Img/close.png';
import { useGlobal } from '../../../GlobalContext';

interface IWindowedSectionProps {
  title: string;
  children: ReactNode;
  foot?: string;
  isOpen: (open: boolean) => void;
}
const WindowedSection: FunctionComponent<IWindowedSectionProps> = (props) => {
  const { global } = useGlobal();
  const mainRef = useRef<HTMLDivElement>(null);
  const close = () => {
    props.isOpen(false);
  }
  const closeOnBlur = (e: any) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      // close();
    }
  }
  
  useEffect(()=>{
    mainRef.current?.focus();
  },[])
  
  return (
    <div ref={mainRef} tabIndex={0} className={`${styles.WindowedSection} ${styles[global.theme]}`} onBlur={closeOnBlur}>
      <div className={styles.topBar}>
        <h2>{props.title}</h2>
        <button className={styles.close} onClick={close}><img src={closeImg} alt='close'></img></button>
      </div>
      <div className={styles.content}>
        {props.children}
        <div className={styles.foot}>
          {props.foot}
        </div>
      </div>
    </div>
  )
}

export default WindowedSection;