'use client'

import { Dispatch, SetStateAction, createContext, useEffect, useState } from 'react'
import { Daum } from '../services/getSearchGifs'

interface MyContextType {
  favorites: Daum[]
  setFavorites: Dispatch<SetStateAction<Daum[]>>
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const AppContext = createContext<MyContextType>(null!)

export function AppContextProvider ({ children }: { children: React.ReactNode }): JSX.Element {
  const [favorites, setFavorites] = useState<Daum[]>([])

  useEffect(() => {
    const storageItem = localStorage.getItem('favorites')
    if (storageItem !== null) setFavorites(JSON.parse(storageItem))
  }, [])

  return (
    <AppContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </AppContext.Provider>
  )
}
