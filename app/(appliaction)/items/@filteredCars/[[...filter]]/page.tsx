import CarsList from '@/components/cars-list'
import { DummyCarsType } from '@/dummy-cars'
import {
  getAvailableCarsCollections,
  getAvailableCarsCollectionsYears,
  getCarsForCollection,
  getCarsForCollectionAndYear
} from '@/lib/cars'
import Link from 'next/link'

type FilteredCarsPage = {
  params: {
    filter: string[]
  }
}

export default function FilteredCarsPage({ params }: FilteredCarsPage) {
  const selectedCollection = params.filter?.[0]
  const selectedYear = params.filter?.[1]

  let cars: DummyCarsType[] | undefined
  let links: string[] = getAvailableCarsCollections()

  if (selectedCollection && !selectedYear) {
    cars = getCarsForCollection(selectedCollection.split('-').join(' '))
    links = getAvailableCarsCollectionsYears(
      selectedCollection.split('-').join(' ')
    )
  }

  if (selectedCollection && selectedYear) {
    cars = getCarsForCollectionAndYear(
      selectedCollection.split('-').join(' '),
      selectedYear
    )
    links = []
  }

  let carsContent = (
    <p className='mt-4 text-cyan-700'>No cars found for the selected filter.</p>
  )

  if (cars && cars.length > 0) {
    carsContent = <CarsList allCars={cars} />
  }

  return (
    <>
      <h3 className='mb-2 text-xl font-bold'>
        Filtered Cars{' '}
        {cars && cars?.length > 0 ? (
          <span className='text-cyan-700'>{cars.length}</span>
        ) : (
          <span className='text-cyan-700'>0</span>
        )}
      </h3>
      <ul className='mb-4 flex gap-2'>
        {links.map((link, index) => {
          const href = selectedCollection
            ? `/items/${selectedCollection}/${link}`
            : `/items/${link.toLowerCase().split(' ').join('-')}`
          return (
            <li key={index} className='flex'>
              <Link
                href={href}
                className='rounded-lg bg-cyan-700 px-4 py-1 text-neutral-50 shadow-md duration-200 hover:bg-cyan-600'
              >
                {link}
              </Link>
            </li>
          )
        })}
      </ul>
      {carsContent}
    </>
  )
}
