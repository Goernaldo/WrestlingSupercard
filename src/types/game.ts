export type Rarity='Common'|'Uncommon'|'Rare'|'Super Rare'|'Ultra Rare'|'Epic'|'Legendary'|'Mythic'|'Champion'|'Event';
export type StatKey='attack'|'defense'|'technique'|'stamina'|'charisma';
export interface WrestlerCard {id:string;wrestlerId:string;name:string;nickname:string;rarity:Rarity;level:number;maxLevel:number;stars:number;attack:number;defense:number;technique:number;stamina:number;charisma:number;overall:number;imagePath:string;frame:string;locked:boolean;favorite:boolean;championVersion:boolean;eventVersion:boolean}
export interface Mission {id:string;title:string;kind:'Täglich'|'Wöchentlich';progress:number;target:number;reward:string;claimed:boolean}
export interface Profile {username:string;role:'Owner'|'Admin'|'Player';level:number;xp:number;wins:number;losses:number;favorite:string;title:string}
export interface GameState {authenticated:boolean;profile:Profile;gold:number;diamonds:number;tickets:number;energy:number;collection:WrestlerCard[];missions:Mission[];settings:{sound:boolean;animations:boolean};packHistory:string[];fusionHistory:string[]}
