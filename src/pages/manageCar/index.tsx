import { collection, getDocs, query, where } from "firebase/firestore";
import { Plus } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/container';
import { TableColumn } from '../../components/tableColumn';
import { AuthContext } from '../../context/AuthContext';
import { db } from "../../services/firebaseConnection";
import type { CarProps } from "../../types";

 export function ManageCar() {
    const { user } = useContext(AuthContext);
    const [cars, setCars] = useState<CarProps[]>([])
    const navigate=useNavigate();

    useEffect(() => {
        async function getCars() {
        if(!user?.uid){
                return; 
        } 
        const carsRef = collection(db, "cars");
        const queryRef=query(carsRef, where("userId", "==", user.uid));
        getDocs(queryRef)
        .then((snapshot) => {
            const list=[] as CarProps[];
            snapshot.forEach((doc) => {
                list.push({
                    id: doc.id,
                    make: doc.data().make,
                    model: doc.data().model,
                    year: doc.data().year,
                    price: doc.data().price,
                    images: doc.data().images,
                    featured: doc.data().featured,
                    availability: doc.data().availability,
                    location: doc.data().location,
                    condition: doc.data().condition,
                    bodyType: doc.data().bodyType,
                    fuelType: doc.data().fuelType,
                    transmission: doc.data().transmission,
                    mileage: doc.data().mileage,
                    color: doc.data().color
                })
            })
            setCars(list);
            console.log(list);
        }).catch((error) => {
            console.log(error);
        })

        
    }
        getCars();
    }, [user]);
    
    return (
       <Container>
            <div className='min-h-screen bg-gray-100 py-12'>
                <div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className='flex justify-between items-center px-6 py-4 border-b border-gray-200'>
                            <h2 className="text-2xl font-bold text-gray-900">Vehicle Management</h2>
                            <button className='flex items-center  justify-center bg-blue-600 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-offset-2 focus:ring-blue-500 cursor-pointer'
                                    onClick={() => navigate('/new-car')}
                            >
                                <Plus className="h-5 w-5 mr-2" />
                                Add New Vehicle
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                               <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Vehicle
                                        </th >
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Details
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Price
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                               </thead>
                               <tbody >
                                    { cars.map( (car) => (<TableColumn key={car.id} {...car} />)) }

                               </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
       </Container>
    )
 }