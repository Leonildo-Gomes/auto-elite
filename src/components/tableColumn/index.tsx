import { deleteDoc, doc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { db, storage } from '../../services/firebaseConnection';
import type { CarTableProps } from "../../types";


export function TableColumn( car: CarTableProps) {
     const { id,make, model, year, price,  fuelType, images, featured, transmission , bodyType, onDelete} = car;
     const navigate = useNavigate();
   async function handleDeleteCar( car: CarTableProps){
        const docRef=doc(db, "cars", car.id);
        await deleteDoc(docRef)
        .then(()=> { 
            toast.success('Car deleted successfully');
            car.images.map( async (image)=>{ 
                const imageRef= ref(storage, `images/${image.uid}/${image.name}/`);
                try {
                    await deleteObject(imageRef);
                } catch (error) {
                    toast.error('');
                    console.log(error)    
                }
            })
            onDelete(car.id);
        })
        .catch((error) => {
            toast.error('Error deleting car');
            console.log(error)
         })

       
    }

    return (
        <tr  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            { /* IMGAGE and VEHICLE*/  }
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="h-16 w-16 flex-shrink-0">
                        <img className="h-16 w-16 rounded-md object-cover"
                            src={images[0].url}
                            alt={make} 
                        />
                    </div>
                    <div className="ml-4">
                    <div className="text-sm text-gray-900 font-medium">
                        {make} {model}
                    </div>
                    <div className="text-sm text-gray-500">{year} </div>
                </div>
                </div>
            </td>
             { /* DETAILS*/  } 
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900 font-medium">
                    {bodyType}
                </div>
                <div className="text-sm text-gray-500">{transmission} • {fuelType}</div>
            </td>
            { /* PRICE*/  } 
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900 font-medium">${price}</div>
            </td>
            { /* STATUS*/  } 
            <td>
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${featured ?      'bg-green-100 text-green-800' : ' bg-gray-100 text-gray-800' }` } >
                    {featured ? 'Featured' : 'Standard'}

                </span>
            </td>
           { /* ACTIONS*/  } 
           <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
             <div className='flex justify-end space-x-2'>
                <button className='text-blue-600 hover:text-indigo-900' onClick={() => navigate(`/detail-car/${id}`)}>
                    <Eye className="h-5 w-5 mr-1" />
                </button>
                <button className='text-indigo-600 hover:text-indigo-900'>
                    <Pencil className="h-5 w-5 mr-1" />
                </button>
                <button className='text-red-600 hover:text-red-900' onClick={()=> handleDeleteCar(car)}>
                    <Trash2 className="h-5 w-5 mr-1" />
                </button>
             </div>

           </td>
        </tr>
    )
} 