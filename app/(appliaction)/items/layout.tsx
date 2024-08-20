import { ReactNode } from 'react'

export default function ItemsLayout({
  allCars,
  filteredCars
}: {
  allCars: ReactNode
  filteredCars: ReactNode
}) {
  return (
    <div>
      <section className='mb-8'>{filteredCars}</section>
      <section className='pb-8'>{allCars}</section>
    </div>
  )
}
