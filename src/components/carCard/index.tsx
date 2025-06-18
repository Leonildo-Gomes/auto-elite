import { AlertCircle, Calendar, CheckCircle, Fuel, GaugeCircle, MapPin, XCircle } from 'lucide-react';
import type { CarCardProps } from "../../types";

import { useState } from 'react';
import { Link } from 'react-router-dom';
 




export function CarCard(car  :   CarCardProps) {
    const { id, make,model,year,price, images,  fuelType, mileage, featured, availability, condition, location}= car
    const [loadImages, setLoadImages ] = useState<string[]>([]); 
  
   function handleImageLoad(id: string): void {
        setLoadImages((prevState) => [...prevState, id]); 
   }
   const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-800';
      case 'reserved':
        return 'bg-yellow-100 text-yellow-800';
      case 'Sold':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getAvailabilityIcon = (status: string) => {
    switch (status) {
      case 'Available':
        return <CheckCircle className="h-3 w-3 mr-1" />;
      case 'reserved':
        return <AlertCircle className="h-3 w-3 mr-1" />;
      case 'Sold':
        return <XCircle className="h-3 w-3 mr-1" />;
      default:
        return null;
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'New':
        return 'bg-blue-100 text-blue-800';
      case 'certified':
        return 'bg-purple-100 text-purple-800';
      case 'Used':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  return (
        <div className='bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:translate-y-[-8px] relative '>
            { /* STATUS*/ }
            { featured &&(
                <div className='absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 text-xs font-semibold z-10 rounded'>
                    Featured
                </div>
            ) }
            <div className='absolute top-2 left-2 z-10 flex flex-col gap-1'>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full  flex items-center ${getAvailabilityColor(availability)}` }>
                    {getAvailabilityIcon(availability)}
                    {availability}
                </span>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getConditionColor(condition)}`}>
                    {condition}
                </span>
            </div>

            { /* IMAGE*/ }
            <div className="w-full rounded-lg h-72 bg-slate-200"
                        style={{ display: loadImages.includes(id) ? 'none' : 'block' }}>
            </div>
           <div>
                <img className='w-full rounded-md h-72'
                    src={images[0]?.url} 
                    alt={`${make} ${model}`} 
                    onLoad={() => handleImageLoad(id)} 
                    style={{ display: loadImages.includes(id) ? 'block' : 'none' }}
                />
           </div>
           { /* INFO CAR*/ }
           <div className="p-4" >
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-800">{make}</h3>
                    <span className="text-lg font-bold text-blue-600">{price.toLocaleString('nb-NO', { style: 'currency', currency: 'NOK' })}</span>
                </div>
                <div className='grid grid-cols-2 gap-y-2 mb-4'>
                    <div className="flex items-center  text-sm  text-gray-600" >
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{ year}</span>
                    </div>

                     <div className="flex items-center  text-sm  text-gray-600" >
                        <GaugeCircle className="h-4 w-4 mr-1" />
                        <span>{ mileage.toLocaleString()} mi</span>
                    </div>
                     <div className="flex items-center  text-sm  text-gray-600" >
                        <Fuel className="h-4 w-4 mr-1" />
                        <span>{fuelType}</span>
                    </div>
                     <div className="flex items-center  text-sm  text-gray-600" >
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{location} </span>
                    </div>
                    
                </div>
                { /* BUTTONS*/ }
                <div className='mt-4 flex justify-between'>
                    <Link  to={`/detail-car/${id}`} className='bg-gray-100 hover:bg-gray-200 text-gray-800 rounded px-3 py-1.5 text-sm transition-colors duration-200 cursor-pointer'
                        >
                        More Details
                    </Link>
                    <button className={`px-3 py-1.5 rounded text-sm transition-colors duration-200 ${
                        availability === 'Available' 
                            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                            : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                        }`} disabled={availability !== 'Available'}>
                        {availability === 'Available'? 'Contact Seller' : availability}
                    </button>
                </div>
           </div>
        </div>
    )
}