import { MarvelRivalsApi } from "./MarvelRivalsAPI";
import { Player } from "./Player";
import env from "./env.json"

const api = new MarvelRivalsApi(env.apikey);

const playerNames:string[] = [
    "NotMexican",
    "Sleep_Tight",
    "Theta016"
]

const players:Player[] = []

playerNames.forEach(async (name) =>{
    players.push(await Player.createPlayer(api,name));
})


console.log('debug')