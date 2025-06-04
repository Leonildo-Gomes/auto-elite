import type { Car } from "../../types";
import { CarCard } from "../carCard";


export function CardList() {
    const filteredCount=8;
    const totalCount= 5;
    const cars: Car[] = [
  {
    id: '1',
    make: 'BMW',
    model: '3 Series',
    year: 2022,
    price: 45000,
    mileage: 5000,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Black',
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: '2',
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2021,
    price: 48000,
    mileage: 8000,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Silver',
    image: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  }, {
    id: '5',
    make: 'Toyota',
    model: 'RAV4',
    year: 2022,
    price: 35000,
    mileage: 12000,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    bodyType: 'SUV',
    color: 'Blue',
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  }];
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
                            <CarCard car={car} key={car.id} />  
                        ))} 
                    </div>
                )
            }
            
            

        </section>
    )
} 