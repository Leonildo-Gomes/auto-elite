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
  availability: string;
  location: string;
  condition: string;
}


 export interface CarProps {
    id: string;
    make:string;
    model: string;
    year: number;
    price: number;
    images: CarImageProps[];
    featured: boolean;
    availability: string;
    location: string;
    condition: string;
    bodyType: string;
    fuelType: string;
    transmission: string;
    mileage: number;
    color: string;
}

interface CarImageProps {
     uid: string; 
     name: string; 
     url: string 
}

/* export interface CarCardProps {
    car: Car;
}*/
export type CarCardProps= Pick<
  CarProps,
  'id' | 'make' | 'model' | 'year' | 'price' | 'images'  | 'fuelType'  | 'mileage'
>;


export type CarTableProps = Pick<
  CarProps,
  'id' | 'make' | 'model' | 'year' | 'price' | 'images' | 'featured' | 'bodyType' | 'fuelType' | 'transmission'> & {
  onDelete: (id: string) => void;
};
