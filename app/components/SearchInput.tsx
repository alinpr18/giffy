'use client'

import { useRouter } from 'next/navigation'

export const SearchInput = (): JSX.Element => {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const searchQuery = formData.get('search') as string
    if (searchQuery === '') return
    const encodedSearchQuery = encodeURI(searchQuery)
    router.push(`/search?q=${encodedSearchQuery}`)

    form.reset()
  }

  return (
    <form onSubmit={handleSubmit} className='bg-black flex rounded overflow-auto'>
      <input name='search' className='w-full h-12 text-xl px-4' placeholder='Search gifs' type='text' />
      <button className='w-12'>🔎</button>
    </form>
  )
}
