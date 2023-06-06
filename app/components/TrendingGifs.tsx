import Image from 'next/image'
import { getTrendingGifs } from '../services/getTrendingGifs'

const GifsList = async (): Promise<JSX.Element[]> => {
  const trendingGifs = await getTrendingGifs()

  return (
    trendingGifs.map(gif => (
      <Image key={gif.id} className='rounded h-[140px] w-full' src={gif.images.original.url} width={140} height={140} alt={gif.title} />
    ))
  )
}

export const TredingGifs = (): JSX.Element => {
  return (
    <section className='grid gap-4'>
      <h2 className='text-2xl text-white'>↗️ Trending</h2>
      <div className='flex gap-2 overflow-auto'>
        {/* @ts-expect-error Server Component */}
        <GifsList />
      </div>
    </section>
  )
}
