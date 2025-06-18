import { zodResolver } from '@hookform/resolvers/zod';
import { addDoc, collection } from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { Trash, Upload } from 'lucide-react';
import { useContext, useState, type ChangeEvent } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';
import { z } from 'zod';
import { Container } from "../../../components/container";
import { ButtonSubmit } from '../../../components/customButton';
import { InputField } from '../../../components/input';
import { SelectField } from '../../../components/selectInput';
import { AuthContext } from '../../../context/AuthContext';
import { db, storage } from '../../../services/firebaseConnection';
interface ImageItemProps {
     uid: string; 
     name: string;
     previewUrl: string; 
     url: string; 
}
const schema = z.object({
    make: z.string().nonempty("Make is required"), 
    model: z.string().nonempty("Model is required"), 
    year: z.number().min(4,"Year must be at least 1").positive("Year must be a positive number"),
    price: z.number().min(1,"Price must be at least 1").positive("Price must be a positive number"),
    mileage: z.number().min(1,"Mileage must be at least 1").positive("Mileage must be a positive number"),
    fuelType: z.string().nonempty("Fuel Type is required"), 
    transmission: z.string().nonempty("Transmission is required"), 
    bodyType: z.string().nonempty("Body Type is required"),
    condition: z.string().nonempty("Condition is required"),
    availability: z.string().nonempty("Availability is required"),
    location: z.string().nonempty("Location is required"),
    color: z.string().nonempty("Color is required"), 
    featured: z.boolean().optional(),
     
     
})
type FormData= z.infer<typeof schema>
export function NewCar() {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const { register, handleSubmit, reset,formState:  {errors } } = useForm<FormData>(
        {
            resolver: zodResolver(schema),
            mode: 'onChange'
        } 
    ); 
    const [carImages, setCarImages ] =useState<ImageItemProps[]> ([]); 
    async function onSubmit(data: FormData) {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        console.log(data);
        if(!user?.uid) {
            toast.error('User not logged in');
            return;
        }
        if(carImages.length=== 0){
            toast.error('Please add at least one image');
            return;
        }
        const carListImages= carImages.map((image) => {
            return {
                uid: image.uid,
                name: image.name,
                url: image.url,
            }
        })

        addDoc(collection(db, 'cars'), {
            make: data.make,
            model: data.model,
            year: data.year,
            price: data.price,
            mileage: data.mileage,
            fuelType: data.fuelType,
            transmission: data.transmission,
            bodyType: data.bodyType,
            condition: data.condition,
            availability: data.availability,
            location: data.location,
            color: data.color,
            images: carListImages,
            featured: data.featured,
            createdAt: new Date(),
            userId: user.uid,
            owner:user.name,
        })
        .then(() => {
        toast.success('Car added successfully');
           reset();
           setCarImages([]);
        })
        .catch((error) => {
            toast.error('Error adding car:');
            console.log(error);
        });


    }
    async function handleFile(event: ChangeEvent<HTMLInputElement>) {
        if(event.target.files && event.target.files[0] ) {
            const imageFile = event.target.files[0];
            if(imageFile.type !== 'image/jpeg' && imageFile.type !== 'image/png') {
                toast.error('Image must be in JPEG or PNG format');
                return;
            }
            await handleUpload(imageFile);
        }  
    }
    async function handleUpload(imageFile: File) {
        if(!user?.uid) {
            toast.error('User not logged in');
            return;
        }
        const currentUserId=user.uid;
        const  uidImage=uuidV4();
        const uploadRef= ref(storage, `images/${currentUserId}/${uidImage}`);
        const uploadTask= uploadBytesResumable(uploadRef, imageFile);
        uploadTask.on('state_changed', (snapshot) => 
            {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                toast.success("Upload is " + progress + "% done");
            },
            (error) => {
                toast.error("Erro no upload:"+ error.code+','+ error.message);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    const ImageItem= {
                        uid:currentUserId,
                        name: uidImage,
                        previewUrl: URL.createObjectURL(imageFile),
                        url: url
                    };
                    setCarImages((prevImages) => [...prevImages, ImageItem]);
                });        
            }    
        )
    }
    async function handleDeleteImage(image: ImageItemProps) {
        const imagePath=`images/${user?.uid}/${image.name}`;
        const imageRef=ref(storage, imagePath);
        try {
            await deleteObject(imageRef);
            setCarImages((prevImages) => prevImages.filter((prevImage) => prevImage.name !== image.name));
        } catch (error) {
            toast.error('Error deleting image: ' + error);
        }
    }

    return (
        <Container>
            <div className='w-full bg-white p-3 rounded-lg mt-6'>
                        <div className="flex items-center justify-between mt-6 ">
                        <h2 className="text-2xl font-bold text-gray-900"> Add New Vehicle</h2>
                        <button onClick={() => navigate(-1)}
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
                                    onChange={handleFile}
                                />
                        </div>
                        </button>
                       { carImages.map((image) => (
                            <div  key={image.uid} className=' w-full h-32flex items-center justify-center relative'>
                                    <button className='absolute top-2 right-2 cursor-pointer'
                                    onClick={()=> handleDeleteImage(image)}>
                                        <Trash size={30} color = '#ff0000' className="h-5 w-5 mr-2"/>
                                    </button>
                                    <img src={image.previewUrl} alt={image.name}
                                    className='h-32 object-cover rounded-lg w-full'/>
                            </div>  
                        ))} 
                         
                    </div>
            </div>

            <div className="w-full bg-white  p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2 mt-2">
                <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
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
                                placeholder='-- Select Fuel Type --'
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
                                        placeholder='-- Select Transmission --'
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
                                        placeholder='-- Select Body Type --'
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
                            <div className="flex w-full mb-3 flex-col md:flex-row items-center  gap-4">
                                <div className='w-full'>
                                    <SelectField 
                                        name="condition"
                                        label="Condition"
                                        error={ errors.condition?.message}
                                        register = { register} 
                                        placeholder='-- Select Condition --'
                                        options={[
                                            { value: 'New', label: 'New' },
                                            { value: 'Used', label: 'Used' },
                                        ]}
                                    />
                                </div>
                                <div className='w-full'>
                                    <SelectField    
                                        name="availability"
                                        label="Availability"
                                        error={ errors.availability?.message}
                                        register = { register} 
                                        placeholder='-- Select Availability -- '
                                        options={[
                                            { value: 'Available', label: 'Available' },
                                            { value: 'Sold', label: 'sold' },
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className="flex w-full mb-3 flex-col md:flex-row items-center gap-4">
                                <div className='w-full md:w-1/2'>
                                    <InputField
                                        name="location"
                                        label="Location"
                                        type="text"
                                        placeholder='City, State'
                                        error={ errors.location?.message}
                                        register = { register}
                                    />
                                </div>
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
                            <div className="flex w-full mb-3 flex-col md:flex-row items-center gap-4">
                                <div  className="md:w-1/2 w-full flex items-center">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" {...register("featured")} />
                                        Mark as featured
                                    </label>
                                </div>
                            </div>
                    </div>
                    <div className='flex justify-end space-x-3'>
                        <button className='px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover_bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                            onClick= {() => navigate(-1)}>
                            Cancel
                        </button>
                        <ButtonSubmit />
                    </div>
                </form>
            </div>
        </Container>     
    );
   
}


