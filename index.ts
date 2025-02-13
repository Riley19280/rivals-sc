import { MarvelRivalsApi } from "./MarvelRivalsAPI";
import { Player } from "./Player";
import env from "./env.json"

const api = new MarvelRivalsApi(env.apikey);

const playerNames:string[] = [
    "NotMexican",
]

const players:Player[] = []
for(const playerName of playerNames){
    const player = await Player.createPlayer(api, playerName);
    players.push(player)
    console.log(player.getTopThreeCompHeros());
}

console.log('debug')