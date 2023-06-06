'use client'

import { useContext } from 'react'
import { AppContext } from '../context/Context'

export const Button = ({ gif }): JSX.Element => {
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
