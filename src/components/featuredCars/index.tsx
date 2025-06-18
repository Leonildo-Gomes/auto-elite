import type { CarProps } from "../../types";
import { CarCard } from "../carCard";

interface FeaturedCarsProps {
  cars: CarProps[];
  
}
export function FeaturedCars( { cars }: FeaturedCarsProps) {
    const featuredCars = cars.filter(car => car.featured);

    if (featuredCars.length === 0) {
        return null;
    }
    return (
        <section className="mb-12">
            <div className="flex items-center mb-6">
                <div className="w-12 h-1 bg-blue-600 mr-4"></div>
                <h2 className="text-2xl font-bold text-gray-800">Featured Vehicles</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredCars.map((car) => (
                    <CarCard {...car} key={car.id} />
                ))}
            </div>
        </section>
    )
}