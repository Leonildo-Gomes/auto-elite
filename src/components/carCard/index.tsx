import { Banknote, Calendar, Fuel, GaugeCircle } from 'lucide-react';
import type { CarCardProps } from "../../types";

import { useNavigate } from 'react-router-dom';
 




export function CarCard({ car } :   CarCardProps) {
    const { id, make, model, year, price, mileage, fuelType, images, featured } = car;
    const navigate = useNavigate();
  
   
  return (
        <div className='bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:translate-y-[-8px]'>
            { /* IMAGE*/ }

           <div>
                <img src={images[0]} alt={`${make} ${model}`} />
           </div>
           { /* INFO CAR*/ }
           <div className="p-4" >
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-800">{ make}</h3>
                    <span className="text-lg font-bold text-blue-600">{price}</span>
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
                        <Banknote className="h-4 w-4 mr-1" />
                        <span>Financing </span>
                    </div>
                    
                </div>
                { /* BUTTONS*/ }
                <div className='mt-4 flex justify-between'>
                    <button className='bg-gray-100 hover:bg-gray-200 text-gray-800 rounded px-3 py-1.5 text-sm transition-colors duration-200 cursor-pointer'
                        onClick={() => navigate(`/detail-car/${id}`)}>
                        More Details
                    </button>
                    <button className='bg-blue-600 text-white rounded text-sm px-3 py-1.5 hover:bg-gray-700 transition-colors duration-200 cursor-pointer'>
                        Contact Seller
                    </button>
                </div>

           </div>


        </div>
    )
}