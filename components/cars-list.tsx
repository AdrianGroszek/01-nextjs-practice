import { DummyCarsType } from '@/dummy-cars'
import Link from 'next/link'
import Image from 'next/image'

type CarsListProps = {
  allCars: DummyCarsType[]
}

export default function CarsList({ allCars }: CarsListProps) {
  return (
    <ul className='grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3'>
      {allCars.map(car => (
        <li
          key={car.id}
          className='overflow-hidden rounded-lg bg-neutral-100 shadow-lg duration-200 hover:translate-y-[-.25rem] hover:bg-neutral-50'
        >
          <Link href={`/details/${car.id}`} className='flex items-center'>
            <Image
              className='mr-2 h-[100px] w-[100px] object-cover'
              src={`/images/cars/${car.image}`}
              alt={`${car.name} picture`}
              width={100}
              height={100}
            />
            <div className='text-neutral-800'>
              <p className='font-bold'>{car.name}</p>
              <p className='text-neutral-500'>{car.collection}</p>
              <p className='text-neutral-500'>{car.date}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
