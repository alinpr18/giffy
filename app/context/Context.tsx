'use client'

import { createContext, useState } from 'react'

export const AppContext = createContext(null)

export function AppContextProvider ({ children }: { children: React.ReactNode }): JSX.Element {
  const [favorites, setFavorites] = useState(() => {
    const storageItem = localStorage.getItem('favorites')
    if (storageItem != null) return JSON.parse(storageItem)

    return []
  })

  return (
    <AppContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </AppContext.Provider>
  )
}
