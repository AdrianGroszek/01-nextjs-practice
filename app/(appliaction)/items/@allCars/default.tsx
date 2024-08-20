import CarsList from '@/components/cars-list'
import { DUMMY_CARS, DummyCarsType } from '@/dummy-cars'

export default function AllCarsPage() {
  const allCars: DummyCarsType[] = DUMMY_CARS
  return (
    <>
      <h3 className='mb-4 text-xl font-bold'>All Cars</h3>
      <CarsList allCars={allCars} />
    </>
  )
}
