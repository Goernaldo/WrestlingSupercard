import type { GameState } from '../types/game';
export const STORAGE_KEY='cwsc-state-v01';
export function loadState(fallback:GameState):GameState{try{const raw=localStorage.getItem(STORAGE_KEY);return raw?{...fallback,...JSON.parse(raw)}:fallback}catch{return fallback}}
export function saveState(state:GameState){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
