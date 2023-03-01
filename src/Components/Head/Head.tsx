import React from 'react'
import styles from './Head.module.css'

export default function Head() {
  return (
    <div className={styles.this}>
      <h1 className={styles.title}>noted!</h1><span className={styles.subtitle}>♡take notes locally within your browser♡</span>
    </div>
  )
}