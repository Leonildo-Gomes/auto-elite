import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/container';
import { TableColumn } from '../../components/tableColumn';
import { cars } from '../../data/cars';
 export function ManageCar() {
    const navigate=useNavigate();
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
                               <tbody>
                                    { cars.map( (car) => (<TableColumn car={car} />)) }

                               </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
       </Container>
    )
 }