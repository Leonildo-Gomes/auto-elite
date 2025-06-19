import { deleteDoc, doc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import { AlertCircle, CheckCircle, Eye, Pencil, Trash2, XCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { db, storage } from '../../services/firebaseConnection';
import type { CarTableProps } from "../../types";


export function TableColumn( car: CarTableProps) {
     const { id,make, model, year, price,  fuelType, images, featured, transmission , bodyType,availability,condition, onDelete} = car;
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
            return <CheckCircle className="h-4 w-4 mr-1" />;
        case 'reserved':
            return <AlertCircle className="h-4 w-4 mr-1" />;
        case 'Sold':
            return <XCircle className="h-4 w-4 mr-1" />;
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
                <div className="text-sm text-gray-900 font-medium">${price.toLocaleString('nb-NO', { style: 'currency', currency: 'NOK' })}</div>
            </td>
            { /* STATUS*/  } 
            <td className='px-6 py-4 whitespace-nowrap'>
               <div className='gap-1 flex flex-col'>
                    <span className={`px-2  text-xs leading-5 font-semibold rounded-full flex items-center ${getAvailabilityColor(car.availability)}`}>
                          {getAvailabilityIcon(car.availability)}
                         { availability } 
                    </span>
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getConditionColor(car.condition)}`}>
                         { condition } 
                    </span>
                   {featured && (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Featured
                        </span>
                   )}
               </div> 
            </td>
           { /* ACTIONS*/  } 
           <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
             <div className='flex justify-end space-x-2'>
                <button className='text-blue-600 hover:text-indigo-900' onClick={() => navigate(`/detail-car/${id}`)}>
                    <Eye className="h-5 w-5 mr-1" />
                </button>
                <button className='text-indigo-600 hover:text-indigo-900' onClick={() => navigate(`/edit-car/${id}`)}>
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