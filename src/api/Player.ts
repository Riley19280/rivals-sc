import { MarvelRivalsApi } from './MarvelRivalsAPI'

export class Player {
  playerName: string
  playerData: any

  public static async createPlayer(playerName: string): Promise<Player> {
    const player = new Player(playerName)
    await player._insantiate()
    return player
  }

  private async _insantiate() {
    this.playerData = await MarvelRivalsApi.getInstance().getPlayerData(this.playerName)
  }

  private constructor(playerName: string) {
    this.playerName = playerName
  }

  getTopThreeCompHeros(): string[] {
    return this.playerData.heroes_ranked
               .sort(
                 (hero1: { matches: number; }, hero2: { matches: number; }) => {
                   return hero1.matches - hero2.matches
                 },
               )
               .slice(-3)
               .reverse()
               .map((hero: { hero_name: string; }) => hero.hero_name)
  }
}
