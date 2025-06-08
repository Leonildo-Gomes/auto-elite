import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { Container } from "../../../components/container";
import { InputField } from '../../../components/input';

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
    return (
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
    )
}