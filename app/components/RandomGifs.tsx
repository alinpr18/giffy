import Image from 'next/image'
import { getSearchGifs } from '../services/getSearchGifs'
import { Button } from './Button'
import React from 'react'

const GifList = async (): Promise<JSX.Element[]> => {
  const randomGifs = await getSearchGifs({ querySearch: 'random' })

  return (
    randomGifs.map((gif) => (
      <div key={gif.id} className='relative'>
        <Button gif={gif} />
        <Image className='rounded w-full h-[140px]' src={gif.images.original.url} width={140} height={140} alt={gif.title} />
      </div>
    ))
  )
}

export const RandomGifs = (): JSX.Element => {
  return (
    <section className='grid gap-4'>
      <h2 className='text-2xl text-white'>🎲 Random</h2>
      <div className='grid grid-cols-4 gap-2 grid-rows-[masonry]'>
        {/* @ts-expect-error Server Component */}
        <GifList />
      </div>
    </section>
  )
}
