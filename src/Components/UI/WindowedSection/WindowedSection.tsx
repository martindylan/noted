import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import styles from './WindowedSection.module.css';

interface IWindowedSectionProps {
  title: string;
  children: ReactNode;
  foot?: string;
  isOpen: () => void;
}
const WindowedSection: FunctionComponent<IWindowedSectionProps> = (props) => {
  return (
    <div className={styles.this}>
      <div className={styles.topBar}>
        <h2>{props.title}</h2>
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