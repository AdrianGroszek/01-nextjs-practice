import { DUMMY_CARS, DummyCarsType } from '@/dummy-cars'

export function getAllCars() {
  return DUMMY_CARS
}

export function getAvailableCarsCollections(): string[] {
  return DUMMY_CARS.reduce((collections: string[], car: DummyCarsType) => {
    const collection: string = car.collection
    if (!collections.includes(collection)) {
      collections.push(collection)
    }
    return collections
  }, [])
}

export function getAvailableCarsCollectionsYears(collection: string) {
  return DUMMY_CARS.reduce((years: string[], car: DummyCarsType) => {
    if (
      collection === car.collection.toLowerCase() &&
      !years.includes(car.date)
    ) {
      years.push(car.date)
    }
    return years
  }, [])
}

export function getCarsForCollection(collection: string): DummyCarsType[] {
  return DUMMY_CARS.filter(car => car.collection.toLowerCase() === collection)
}

export function getCarsForCollectionAndYear(
  collection: string,
  year: string
): DummyCarsType[] {
  return DUMMY_CARS.filter(car => {
    const carsCollection = car.collection.toLowerCase()
    const collectionYear = car.date

    return carsCollection === collection && collectionYear === year
  })
}

export function getCarById(id: string): DummyCarsType[] {
  return DUMMY_CARS.filter(car => car.id === id)
}
