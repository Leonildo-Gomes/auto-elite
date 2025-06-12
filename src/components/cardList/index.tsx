import type { CarProps } from "../../types";
import { CarCard } from "../carCard";

interface CarListProps {
  cars: CarProps[];
  filteredCount: number;
  totalCount: number;
}
export function CardList({ cars, filteredCount, totalCount }: CarListProps) {
    return (
        <section>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Available Vehicles</h2>
                <p className="text-sm text-gray-600 "> Showing {filteredCount} of {totalCount} vehicles</p>
            </div>
            { /* CARDS */ } 
            { cars.length=== 0 ? ( 
                <div className="bg-gray-50 p-8 text-center rounded-lg border border-gray-200">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">No vehicles found</h3>
                    <p className="text-gray-600">Try adjusting your filters to see more results.</p>
                </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        { cars .map((car) => (
                            <CarCard {...car} key={car.id} />  
                        ))} 
                    </div>
                )
            }
        </section>
    )
} 