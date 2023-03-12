import React from 'react';
import styles from './Head.module.scss';
import dropDownImg from '../../Resources/Img/dropdown.png';
import closeImg from '../../Resources/Img/close.png';
import { useGlobal } from '../../GlobalContext';

export default function Head() {

  const { global, setGlobal } = useGlobal();

  const dropDown = () => {
    setGlobal({ ...global, dropDown: !global.dropDown });
  }

  return (
    <div className={`${styles.Head} ${styles[global.theme]}`}>
      <h1 className={styles.title}>noted!</h1>
      <span className={styles.subtitle}>♡take notes locally within your browser♡</span>
      <div className={styles.dropdown}><div onClick={dropDown}><img className={styles[global.theme]} src={global.dropDown ? closeImg : dropDownImg} alt='menu'></img></div></div>
    </div>
  )
}