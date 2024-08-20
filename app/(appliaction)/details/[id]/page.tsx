import { getCarById } from '@/lib/cars'
import Image from 'next/image'

export default function CarDetailsId({ params }: { params: { id: string } }) {
  const car = getCarById(params.id)
  return (
    <div className='flex'>
      <Image
        src={`/images/cars/${car[0].image}`}
        alt={car[0].name}
        width={300}
        height={300}
        className='mr-8 h-[300px] w-[300px] rounded-2xl object-cover shadow-lg'
      />
      <div className='flex flex-grow flex-col gap-2 text-2xl'>
        <p className='flex h-1/3 items-center rounded-2xl bg-neutral-200 px-8 shadow-md'>
          {car[0].name}
        </p>
        <p className='flex h-1/3 items-center rounded-2xl bg-neutral-200 px-8 shadow-md'>
          {car[0].date}
        </p>
        <p className='flex h-1/3 items-center rounded-2xl bg-neutral-200 px-8 shadow-md'>
          {car[0].collection}
        </p>
      </div>
    </div>
  )
}
