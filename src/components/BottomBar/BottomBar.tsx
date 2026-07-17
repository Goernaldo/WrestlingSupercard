import {NavLink} from 'react-router-dom';import styles from './BottomBar.module.css';
export function BottomBar(){return <nav className={styles.bar}>{[['Home','/home'],['Karten','/collection'],['Play','/match'],['Packs','/packs'],['Profil','/profile']].map(([n,p])=><NavLink key={p} to={p}>{n}</NavLink>)}</nav>}
