import { MarvelRivalsApi } from '@/api/MarvelRivalsAPI'
import { Player } from '@/api/Player'
import {
  ArrowRightIcon,
  UsersIcon,
} from '@heroicons/react/16/solid'
import Image from 'next/image'


export default async function Page({ params }) {
  const playerName = atob(decodeURIComponent((await params).player))
  const player = await Player.createPlayer(playerName)
  const heros = player.getTopThreeCompHeros()

  const images = heros.reduce(function(acc, hero) {
    return {
      ...acc,
      [hero]: player.playerData.heroes_ranked.find(x => x.hero_name == hero).hero_thumbnail
    }
  }, {})

  const toTitleCase = str => str.replace(/\b\w/g, char => char.toUpperCase());

  const wins = player.playerData.overall_stats.ranked.total_wins
  const matches = player.playerData.overall_stats.ranked.total_matches

  return (
    <div className="bg-white">
      <div className="absolute inset-0">
        <Image
          alt="rivals splash image"
          src="/splash.jpg"
          width={1920}
          height={1080}
          className="size-full object-cover"
        />
      </div>
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-12 lg:px-8">
        <div className="relative overflow-hidden rounded-lg">

          <div className="relative px-6 py-32 sm:px-12 sm:py-12 lg:px-16">
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <div className="bg-white py-24 sm:py-32 rounded-lg shadow-lg">
                <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-2">
                  <div className="max-w-xl">
                    <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                      Top heros for {toTitleCase(playerName)}
                    </h2>
                    <div className="mt-6 text-lg/8 text-gray-600">
                      Total Wins: {wins}
                    </div>
                    <div className="mt-6 text-lg/8 text-gray-600">
                      Total Losses: {matches - wins}
                    </div>
                  </div>
                  <ul role="list" className="grid gap-x-4 gap-y-4 sm:grid-cols-1 sm:gap-y-4">
                    {heros.map((hero) => (
                      <li key={hero}>
                        <div className="flex items-center gap-x-6">
                          <img alt="" src={'http://marvelrivalsapi.com/rivals' + images[hero]} className="size-16 rounded-full" />
                          <div>
                            <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{toTitleCase(hero)}</h3>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
