import { MarvelRivalsApi } from "./MarvelRivalsAPI";

export class Player {
    api: MarvelRivalsApi;
    playerName:string;
    playerData:object;

    public static async createPlayer(MRAPIInstance: MarvelRivalsApi, playerName:string): Promise<Player> {
        const player = new Player(MRAPIInstance, playerName);
        await player._insantiate();
        return player;
    }

    private async _insantiate() {
        const request = await this.api.getPlayerData(this.playerName);
        this.playerData = request.data;
    }

    private constructor(MRAPIInstance: MarvelRivalsApi, playerName: string){
        this.api = MRAPIInstance;
        this.playerName = playerName;
    }
}