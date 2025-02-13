import { MarvelRivalsApi } from "./MarvelRivalsAPI";
import { Player } from "./Player";



const main = async () => {
    const env = {
        apikey : "afb62a1899c2c6a7ffef6a589a4e64c4a5e6f0ae04d9b68cce60b6f0ec6ba776"
    };
    
    const api = new MarvelRivalsApi(env.apikey);
    
    const playerNames:string[] = [
        "PinkRaccoon",
    ]
    
    const players:Player[] = []
    for(const playerName of playerNames){
        const player = await Player.createPlayer(api, playerName);
        players.push(player)
        console.log(player.getTopThreeCompHeros());
    }
    
    console.log('debug');
}

main();