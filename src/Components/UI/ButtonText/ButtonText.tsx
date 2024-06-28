import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styles from './ButtonText.module.scss';
import { useGlobal } from 'GlobalContext';



export default function ButtonText(props: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  const { children, } = props;
  const { global } = useGlobal();

  return (
    <button
      {...props}
      className={`${styles.ButtonText} ${styles[global.theme]} ${props.className}`}
    >
      {children}
    </button>
  )
}
