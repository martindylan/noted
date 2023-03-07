import React from 'react';
import styles from './Head.module.css';
import dropDownImg from '../../Resources/Img/dropdown.png';
import closeImg from '../../Resources/Img/close.png';
import { useGlobal } from '../../GlobalContext';

export default function Head() {

  const { global, setGlobal } = useGlobal();

  const dropDown = () => {
    setGlobal({ ...global, dropDown: !global.dropDown });
  }

  return (
    <div className={styles.this}>
      <h1 className={styles.title}>noted!</h1>
      <span className={styles.subtitle}>♡take notes locally within your browser♡</span>
      <div className={styles.dropdown}><div onClick={dropDown}><img src={global.dropDown ? closeImg : dropDownImg} alt='menu'></img></div></div>
    </div>
  )
}