import React, { PropsWithChildren, useEffect, useRef } from 'react';
import styles from './WindowedSection.module.scss';
import closeImg from '../../../Resources/Img/close.png';
import { useGlobal } from '../../../GlobalContext';

interface IWindowedSectionProps {
  title?: string;
  foot?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const WindowedSection = (props: PropsWithChildren<IWindowedSectionProps>) => {
  const { global } = useGlobal();
  const mainRef = useRef<HTMLDivElement>(null);
  const { title, foot, open, setOpen, children } = props;

  const close = () => {
    setOpen(false);
  }
  const closeOnBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      // close();
    }
  }

  useEffect(() => {
    mainRef.current?.focus();
  }, [])

  return (
    <div style={{ display: open ? 'flex' : 'none' }}>
      <div onClick={() => setOpen(false)} className={`${styles.greyedout} ${styles[global.theme]}`}></div>
      <div ref={mainRef} tabIndex={0} className={`${styles.WindowedSection} ${styles[global.theme]}`} onBlur={closeOnBlur}>
        <div className={styles.topBar}>
          <h2>{title}</h2>
          <button className={styles.close} onClick={close}><img src={closeImg} alt='close'></img></button>
        </div>
        <div className={styles.content}>
          {children}
          <div className={styles.foot}>
            {foot}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WindowedSection;