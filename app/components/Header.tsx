import Image from 'next/image'
import Logo from '../../public/logo.png'
import { SearchInput } from './SearchInput'
import Link from 'next/link'

export const Header = (): JSX.Element => {
  return (
    <header className='grid gap-4'>
      <Link className='w-fit mx-auto' href='/'>
        <Image width={144} src={Logo} alt='Giffy Logo' />
      </Link>
      <SearchInput />
    </header>
  )
}
