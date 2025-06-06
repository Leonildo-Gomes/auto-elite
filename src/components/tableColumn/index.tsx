import { Eye, Pencil, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { CarCardProps } from "../../types";
export function TableColumn({ car } :   CarCardProps) {
     //const { make, model, year, price,  fuelType, images, featured, transmission } = car;
     const navigate = useNavigate();
    return (
        <tr className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            { /* IMGAGE and VEHICLE*/  }
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="h-16 w-16 flex-shrink-0">
                        <img className="h-16 w-16 rounded-md object-cover"
                            src={car.images[0]}
                            alt={car.make} 
                        />
                    </div>
                    <div className="ml-4">
                    <div className="text-sm text-gray-900 font-medium">
                        {car.make} {car.model}
                    </div>
                    <div className="text-sm text-gray-500">{car.year} </div>
                </div>
                </div>
            </td>
             { /* DETAILS*/  } 
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900 font-medium">
                    {car.bodyType}
                </div>
                <div className="text-sm text-gray-500">{car.transmission} • {car.fuelType}</div>
            </td>
            { /* PRICE*/  } 
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900 font-medium">${car.price}</div>
            </td>
            { /* STATUS*/  } 
            <td>
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${car.featured ?      'bg-green-100 text-green-800' : ' bg-gray-100 text-gray-800' }` } >
                    {car.featured ? 'Featured' : 'Standard'}

                </span>
            </td>
           { /* ACTIONS*/  } 
           <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
             <div className='flex justify-end space-x-2'>
                <button className='text-blue-600 hover:text-indigo-900' onClick={() => navigate(`/detail-car/${car.id}`)}>
                    <Eye className="h-5 w-5 mr-1" />
                </button>
                <button className='text-indigo-600 hover:text-indigo-900'>
                    <Pencil className="h-5 w-5 mr-1" />
                </button>
                <button className='text-red-600 hover:text-red-900'>
                    <Trash2 className="h-5 w-5 mr-1" />
                </button>
                <button></button>
                <button></button>
             </div>

           </td>
        </tr>
    )
} 