import type {ButtonHTMLAttributes} from 'react';import styles from './UiButton.module.css';
export function UiButton({className='',...props}:ButtonHTMLAttributes<HTMLButtonElement>){return <button className={`${styles.button} ${className}`} {...props}/>}
