import type { Car } from '../types';

// Mock data for car listings
export const cars: Car[] = [
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
    images: [
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    featured: true,
    availability: 'available',
    location: 'New York, NY',
    condition: 'used'
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
    images: [
      'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    featured: true,
    availability: 'available',
    location: 'Los Angeles, CA',
    condition: 'certified'
  },
  {
    id: '3',
    make: 'Audi',
    model: 'A4',
    year: 2023,
    price: 52000,
    mileage: 2000,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'White',
    images: [
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    featured: false,
    availability: 'available',
    location: 'Chicago, IL',
    condition: 'used'
  },
  {
    id: '4',
    make: 'Tesla',
    model: 'Model 3',
    year: 2023,
    price: 58000,
    mileage: 1000,
    fuelType: 'Electric',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Red',
    images: [
      'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    featured: true,
    availability: 'reserved',
    location: 'San Francisco, CA',
    condition: 'new'
  },
  {
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
    images: [
      'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    featured: false,
    availability: 'available',
    location: 'Miami, FL',
    condition: 'used'
  },
  {
    id: '6',
    make: 'Honda',
    model: 'CR-V',
    year: 2021,
    price: 32000,
    mileage: 15000,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'SUV',
    color: 'Gray',
    images: [
      'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    featured: false,
    availability: 'sold',
    location: 'Dallas, TX',
    condition: 'used'
  },
  {
    id: '7',
    make: 'Ford',
    model: 'Mustang',
    year: 2023,
    price: 65000,
    mileage: 500,
    fuelType: 'Gasoline',
    transmission: 'Manual',
    bodyType: 'Coupe',
    color: 'Yellow',
    images: [
      'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    featured: true,
    availability: 'available',
    location: 'Detroit, MI',
    condition: 'new'
  },
  {
    id: '8',
    make: 'Chevrolet',
    model: 'Camaro',
    year: 2022,
    price: 62000,
    mileage: 3000,
    fuelType: 'Gasoline',
    transmission: 'Manual',
    bodyType: 'Coupe',
    color: 'Black',
    images: [
      'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    featured: false,
    availability: 'available',
    location: 'Houston, TX',
    condition: 'used'
  },
  {
    id: '9',
    make: 'Jeep',
    model: 'Wrangler',
    year: 2022,
    price: 45000,
    mileage: 8000,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'SUV',
    color: 'Green',
    images: [
      'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    featured: false,
    availability: 'available',
    location: 'Phoenix, AZ',
    condition: 'certified'
  }
];

export const makes = [...new Set(cars.map(car => car.make))];
export const models = [...new Set(cars.map(car => car.model))];
export const bodyTypes = [...new Set(cars.map(car => car.bodyType))];
export const availabilityOptions = [...new Set(cars.map(car => car.availability))];
export const conditionOptions = [...new Set(cars.map(car => car.condition))];
export const locationOptions = [...new Set(cars.map(car => car.location))];
export const years = [...new Set(cars.map(car => car.year))].sort((a, b) => a - b);

// Get min and max prices from the data
export const priceRange = {
  min: Math.min(...cars.map(car => car.price)),
  max: Math.max(...cars.map(car => car.price))
};

// Get min and max years from the data
export const yearRange = {
  min: Math.min(...years),
  max: Math.max(...years)
};