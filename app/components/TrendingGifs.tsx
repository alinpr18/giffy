import Image from 'next/image'
import { getTrendingGifs } from '../services/getTrendingGifs'

export const TredingGifs = async (): Promise<JSX.Element> => {
  const trendingGifs = await getTrendingGifs()

  return (
    <section className='grid gap-4'>
      <h2 className='text-2xl text-white'>↗️ Trending</h2>
      <div className='flex gap-2 overflow-auto'>
        {trendingGifs.map(gif => (
          <Image key={gif.id} className='rounded h-[140px] w-full' src={gif.images.original.url} width={140} height={140} alt={gif.title} />
        ))}
      </div>
    </section>
  )
}
