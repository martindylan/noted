import React, { PropsWithChildren, useEffect, useRef } from 'react';
import styles from 'Components/UI/WindowedSection/WindowedSection.module.scss';
import closeImg from 'Resources/Img/close.png';
import { useGlobal } from 'GlobalContext';

interface IWindowedSectionProps {
  title?: string;
  foot?: string;
  background?: string;
  isOpen: boolean;
  close: () => void;
}

const WindowedSection = (props: PropsWithChildren<IWindowedSectionProps>) => {
  const { global } = useGlobal();
  const mainRef = useRef<HTMLDivElement>(null);
  const { title, foot, background, isOpen, close, children } = props;

  const closeOnBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      // close();
    }
  }

  useEffect(() => {
    mainRef.current?.focus();
  }, [])

  return (
    <div style={{ display: isOpen ? 'flex' : 'none' }}>
      <div onClick={() => close()} className={`${styles.greyedout} ${styles[global.theme]}`} style={{...(background && {background: background})}}></div>
      <div ref={mainRef} tabIndex={0} className={`${styles.WindowedSection} ${styles[global.theme]}`} onBlur={closeOnBlur}>
        <div className={styles.topBar}>
          <h2>{title || ''}</h2>
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