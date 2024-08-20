import Link from 'next/link'

export default function HomePage() {
  return (
    <section className='p-24'>
      <div className='mx-auto flex flex-col items-center gap-10 lg:w-3/5 xl:w-2/5'>
        <h1 className='text-4xl font-bold uppercase'>Next Ts project</h1>
        <div className='flex h-[150px] w-[150px] items-center justify-center rounded-full bg-neutral-900'>
          <div className='h-16 w-20 rotate-45 rounded-xl bg-neutral-200 shadow-lg shadow-neutral-500/75'></div>
        </div>
        <p className='text-center'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          aperiam ab dolor harum minus doloribus? Fugit quos tenetur laborum ex
          doloremque. Debitis iure magnam odit! Nihil eos non porro incidunt.
        </p>
        <p className='text-center'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          aperiam ab dolor harum minus doloribus? Fugit quos tenetur laborum ex
          doloremque. Debitis iure magnam odit! Nihil eos non porro incidunt.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero porro
          velit blanditiis repellendus autem esse suscipit voluptate ad laborum
          eligendi! Aliquid possimus facilis inventore praesentium tempore
          veritatis eaque soluta dolorem.
        </p>
        <Link
          href='/items'
          className='mt-20 rounded-xl bg-neutral-900 px-6 py-2 text-neutral-200 shadow-md shadow-neutral-500/50 duration-200 hover:scale-105 hover:bg-neutral-800 hover:shadow-lg hover:shadow-neutral-500/50'
        >
          Read more
        </Link>
      </div>
    </section>
  )
}
