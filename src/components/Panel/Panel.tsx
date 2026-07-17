import type {ReactNode} from 'react';import styles from './Panel.module.css';
export function Panel({title,eyebrow,children,className=''}:{title?:string;eyebrow?:string;children:ReactNode;className?:string}){return <section className={`${styles.panel} ${className}`}>{(title||eyebrow)&&<header>{eyebrow&&<small>{eyebrow}</small>}{title&&<h2>{title}</h2>}</header>}{children}</section>}
