import Image from 'next/image'
import { getSearchGifs } from '../services/getSearchGifs'

export default async function SearchPage ({ searchParams }: { searchParams: { q: string } }): Promise<JSX.Element> {
  const searchGifs = await getSearchGifs({ querySearch: searchParams.q })

  return (
    <main className='mt-6 grid gap-12'>
      <section className='grid gap-4'>
        <h2 className='text-2xl text-white'>🔎 {searchParams.q}</h2>
        <div className='grid grid-cols-4 gap-2 grid-rows-[masonry]'>
          {searchGifs.map(gif => (
            <Image key={gif.id} className='rounded w-full h-[140px]' src={gif.images.original.url} width={140} height={140} alt={gif.title} />
          ))}
        </div>
      </section>
    </main>
  )
}
