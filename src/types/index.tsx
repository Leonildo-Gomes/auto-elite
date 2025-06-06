export interface Car {
  id: string ;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  bodyType: string;
  color: string;

  images: string[];
  featured: boolean;
}


 export interface CarCardProps {
    car: Car;
}
