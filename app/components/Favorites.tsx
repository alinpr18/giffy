'use client'

import { useContext } from 'react'
import { AppContext } from '../context/Context'
import Image from 'next/image'

export const Favorites = (): JSX.Element => {
  const { favorites } = useContext(AppContext)

  if (favorites?.length === 0) return <></>

  return (
    <section className='grid gap-4'>
      <h2 className='text-2xl text-white'>❤️ Favorites</h2>
      <div className='flex gap-2 overflow-auto'>
        {favorites?.map((gif) => (
          <Image key={gif.id} className='rounded w-full h-[140px]' src={gif.images.original.url} width={140} height={140} alt={gif.title} />
        ))}
      </div>
    </section>
  )
}
