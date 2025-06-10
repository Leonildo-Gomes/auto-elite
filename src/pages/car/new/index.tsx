import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { Container } from "../../../components/container";

import { Plus, Upload } from 'lucide-react';
import { InputField } from '../../../components/input';
import { SelectField } from '../../../components/selectInput';

const schema = z.object({
    make: z.string().nonempty("Make is required"), 
    model: z.string().nonempty("Model is required"), 
    year: z.number().min(4,"Year must be at least 1").positive("Year must be a positive number"),
    price: z.number().min(1,"Price must be at least 1").positive("Price must be a positive number"),
    mileage: z.number().min(1,"Mileage must be at least 1").positive("Mileage must be a positive number"),
    fuelType: z.string().nonempty("Fuel Type is required"), 
    transmission: z.string().nonempty("Transmission is required"), 
    bodyType: z.string().nonempty("Body Type is required"), 
    color: z.string().nonempty("Color is required"), 
    images: z.string().nonempty("Image is required"),
     
     
})
type FormData= z.infer<typeof schema>
export function NewCar() {
     const { register, handleSubmit, formState:  {errors } } = useForm<FormData>(
            {
                resolver: zodResolver(schema),
                mode: 'onChange'
            } 
        ); 

        function onsubmit(data: FormData) {
            console.log(data)
        }
        return (
            <Container>
                <div className='w-full bg-white p-3 rounded-lg mt-6'>
                         <div className="flex items-center justify-between mt-6 ">
                            <h2 className="text-2xl font-bold text-gray-900"> Add New Vehicle</h2>
                            <button 
                                className="text-blue-600 hover:text-blue-800">
                                Back to Management  
                            </button>
                        </div>
                        <div className='flex flex-col sm:flex-row items-center gap-2 mt-10'>
                            <button className='border-2 w-48 rounded-lg flex items-center justify-center h-32 border-gray-600 mf-w:48 cursor-pointer'>
                                <div className='absolute cursor-pointer'>
                                    <Upload  size={30} className="h-5 w-5 mr-2" />
                                </div>
                                <div>
                                    <input 
                                    type="file" 
                                    accept='image/*'
                                    className='opacity-0 cursor-pointer'
                                    />
                            </div>
                            </button>
                        </div>
                </div>

                <div className="w-full bg-white  p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2 mt-2">
                    <form className='w-full' onSubmit={handleSubmit(onsubmit)}>
                        <div className='w-full '>
                            <div className="flex w-full mb-3 flex-col md:flex-row items-center  gap-4">
                                <div className="w-full " >
                                    <InputField 
                                        name="make"
                                        label="Make"
                                        type="text"
                                        error={ errors.make?.message}
                                        register = { register} 
                                    />
                                </div>
                                <div className="w-full ">
                                    <InputField 
                                            name="model"
                                            label="Model"
                                            type="text"
                                            error={ errors.model?.message}
                                            register = { register} 
                                    />
                                </div>
                            </div>

                            <div className="flex w-full mb-3 flex-col md:flex-row items-center  gap-4">
                                <div className='w-full'>
                                    <InputField 
                                        name="year"
                                        label="Year"
                                        type="number"
                                        error={ errors.year?.message}
                                        register = { register} 
                                         rules={{ valueAsNumber: true }}
                                    />
                                </div>
                                <div className='w-full'>
                                    <InputField 
                                        name="price"
                                        label="Price"
                                        type="number"
                                        error={ errors.price?.message}
                                        register = { register} 
                                         rules={{ valueAsNumber: true }}
                                    />

                                </div>
                            </div>

                             <div className="flex w-full mb-3 flex-col md:flex-row items-center gap-4">
                                <div className='w-full'>
                                    <InputField 
                                        name="mileage"
                                        label="Mileage"
                                        type="number"
                                        error={ errors.mileage?.message}
                                        register = { register} 
                                        rules={{ valueAsNumber: true }}
                                    />
                                </div>
                                <div className='w-full'>
                                  <SelectField 
                                    name="fuelType"
                                    label="Fuel Type"
                                    error={ errors.fuelType?.message}
                                    register = { register} 
                                    placeholder='Select Fuel Type'
                                    options={[
                                        { value: 'Gasoline', label: 'Gasoline' },
                                        { value: 'Diesel', label: 'Diesel' },
                                        { value: 'Electric', label: 'Electric' },
                                        { value: 'Hybrid', label: 'Hybrid' },       
                                    ]}
                                  />
                                </div>
                             </div>

                             <div className="flex w-full mb-3 flex-col md:flex-row items-center  gap-4">
                                <div className='w-full'>
                                    <SelectField 
                                        name="transmission"
                                        label="Transmission"
                                        error={ errors.transmission?.message}
                                        register = { register} 
                                        placeholder='Select Transmission'
                                        options={[
                                            { value: 'Automatic', label: 'Automatic' },
                                            { value: 'Manual', label: 'Manual' },
                                        ]}
                                    />
                                </div>
                                <div className='w-full'>
                                    <SelectField    
                                        name="bodyType"
                                        label="Body Type"
                                        error={ errors.bodyType?.message}
                                        register = { register} 
                                        placeholder='Select Body Type'
                                        options={[
                                            { value: 'Sedan', label: 'Sedan' },
                                            { value: 'Hatchback', label: 'Hatchback' },
                                            { value: 'SUV', label: 'SUV' }, 
                                            { value: 'Coupe', label: 'Coupe' },
                                            { value: 'Truck', label: 'Truck' },
                                        ]}
                                    />
                                </div>
                             </div>
                              <div className="flex w-full mb-3 flex-col md:flex-row items-center gap-4">
                                <div className='w-full md:w-1/2'>
                                    <InputField 
                                        name="color"
                                        label="Color"
                                        type="text"
                                        error={ errors.color?.message}  
                                        register = { register} 
                                    />
                                </div>
                              </div>
                        </div>
                        <div className='flex justify-end space-x-3'>
                            <button className='px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover_bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
                                Cancel
                            </button>

                            <button className='px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                                type="submit">
                                <Plus className=" inline-block h-5 w-5 mr-2" />
                                Add Vehicle
                            </button>
                        </div>

                    </form>
                    

                </div>

            </Container>
            
        );
   /* return (
        <Container>
            <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="space-y-4">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900"> Add New Vehicle</h2>
                        <button 
                            className="text-blue-600 hover:text-blue-800">
                            back to Management  
                        </button>
                    </div>
                    <div className="w-full  p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2 mt-2">
                        <form  className='w-full bg-amber-700 rounded-lg p-4'>
                                <div className='mb-3 flex flex-row items-center gap-4'>
                                    <InputField 
                                        name="make"
                                        label="Make"
                                        type="text"
                                        error={ errors.make?.message}
                                        register = { register} 
                                    />
                                    <InputField 
                                        name="model"
                                        label="Model"
                                        type="text"
                                        error={ errors.model?.message}
                                        register = { register} 
                                    />
                                </div>
                                <div className='mb-3 flex flex-row items-center gap-4'>
                                    <InputField 
                                        name="year"
                                        label="Year"
                                        type="text"
                                        error={ errors.year?.message}
                                        register = { register} 
                                    />
                                    <InputField 
                                        name="price"
                                        label="Price"
                                        type="text"
                                        error={ errors.price?.message}
                                        register = { register} 
                                    />
                                </div>
                                <div className='mb-3 flex flex-row items-center gap-4'>
                                    <InputField 
                                        name="mileage"
                                        label="Mileage"
                                        type="text"
                                        error={ errors.mileage?.message}
                                        register = { register} 
                                    />
                                    <InputField 
                                        name="fuelType"
                                        label="Fuel Type"
                                        type="text"
                                        error={ errors.fuelType?.message}
                                        register = { register} 
                                    />
                                </div>
                                
                            
                        </form>

                    </div>
                    
                </div>
            </div>
        </Container>
    )*/
}