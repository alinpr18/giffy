'use client'

import { useContext } from 'react'
import { AppContext } from '../context/Context'
import { Daum } from '../services/getSearchGifs'

interface Props extends Daum {}

export const Button = ({ gif }: { gif: Props }): JSX.Element => {
  const { favorites, setFavorites } = useContext(AppContext)

  const handleClick = (): void => {
    const filter: boolean = favorites.some(e => e.id === gif.id)
    if (filter) return
    const newFavorites = [...favorites, gif]
    setFavorites(newFavorites)
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
  }

  return (
    <button onClick={handleClick} className='absolute right-0'>❤️</button>
  )
}
