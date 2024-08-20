'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavigationBar() {
  const path = usePathname()

  return (
    <section className='fixed left-1/2 mt-8 translate-x-[-50%] text-neutral-200'>
      <nav className='z-10 flex h-[50px] w-[500px] items-stretch justify-between rounded-xl bg-neutral-950 px-4 py-1'>
        <Link
          className='flex items-center px-4 duration-200 hover:text-neutral-50'
          href='/'
        >
          CarsIO
        </Link>
        <ul className='flex items-stretch gap-4'>
          <li className='flex items-stretch'>
            <Link
              className={`flex items-center rounded-lg px-4 duration-200 hover:bg-neutral-200 hover:text-neutral-800 ${path.startsWith('/items') ? 'bg-neutral-200 text-neutral-800' : undefined}`}
              href='/items'
            >
              ITEMS
            </Link>
          </li>
          <li className='flex items-stretch'>
            <Link
              className={`flex items-center rounded-lg px-4 duration-200 hover:bg-neutral-200 hover:text-neutral-800 ${path.startsWith('/news') ? 'bg-neutral-200 text-neutral-800' : undefined}`}
              href='/news'
            >
              NEWS
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}
