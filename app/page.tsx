import { TredingGifs } from './components/TrendingGifs'
import { RandomGifs } from './components/RandomGifs'
import { Favorites } from './components/Favorites'

export default function Home (): JSX.Element {
  return (
    <main className='mt-6 grid gap-12'>
      <Favorites />
      <TredingGifs />
      <RandomGifs />
    </main>
  )
}
