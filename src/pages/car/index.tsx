
import { doc, getDoc } from 'firebase/firestore';
import { AlertCircle, ArrowLeft, Calendar, CheckCircle, ChevronLeft, ChevronRight, Fuel, GaugeCircle, Palette, Settings, XCircle } from 'lucide-react';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from '../../components/container';
import { db } from '../../services/firebaseConnection';
import type { CarProps } from "../../types";
export function DetailCar() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [car, setCar] = useState<CarProps | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
       async function findCar() {
            if(!id) {return};

            const docRef = doc(db, "cars", id);
            getDoc(docRef)
            .then((snapshot) => {
                if(!snapshot.exists()) {
                    navigate("/manegecar", { replace: true }); 
                    return
                } 
                setCar({ 
                    id: snapshot.id,
                    make: snapshot.data().make,
                    model: snapshot.data().model,
                    year: snapshot.data().year, 
                    price: snapshot.data().price,
                    images: snapshot.data().images,
                    featured: snapshot.data().featured,
                    availability: snapshot.data().availability,
                    location: snapshot.data().location,
                    condition: snapshot.data().condition,
                    bodyType: snapshot.data().bodyType,
                    fuelType: snapshot.data().fuelType, 
                    transmission: snapshot.data().transmission,
                    mileage: snapshot.data().mileage,
                    color: snapshot.data().color
                } as CarProps);
                
            })
            .catch((error) => {
                console.log(error);
            })
            
            console.log(findCar);
       }
       findCar();
      }, [id, navigate]); 

      const nextImage = () => {
        if(!car) {return};
        setCurrentImageIndex((prev) => 
            prev === car.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
         if(!car) {return};
        setCurrentImageIndex((prev) => 
            prev === 0 ? car.images.length - 1 : prev - 1
        );
    };
    const goToImage = (index: number) => {
        setCurrentImageIndex(index);
    };
    if(!car) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <h2  className="text-2xl font-bold mb-4 text-gray-900">Vehicle not found</h2>
                    <button className='flex justify-center items-center text-blue-600 hover:text-blue-800'
                        onClick={() => navigate(-1)} 
                    >
                        <ArrowLeft className='h-5 w-5 mr-2' />
                        Go Back
                    </button>
                </div>
                
            </div>
        )
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
        return <CheckCircle className="h-4 w-4 mr-2" />;
      case 'reserved':
        return <AlertCircle className="h-4 w-4 mr-2" />;
      case 'Sold':
        return <XCircle className="h-4 w-4 mr-2" />;
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

        <Container>
           <div className="min-h-screen bg-gray-100 py-12">
               <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                  { /* BUTTON BACK*/  }
                  <div className='mb-6'>
                     <button 
                            className='flex justify-center items-center text-blue-600 hover:text-blue-800'
                            onClick={() => navigate(-1)} 
                    >
                         <ArrowLeft className='h-5 w-5 mr-2' />
                         Go Back
                     </button>
                  </div>
                  { /* DETAILS VEHICLE*/  }
                  <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
                    <div className='md:flex'>

                        <div className='md:w-1/2'>
                            {/* Image Carousel */}
                            <div className='relative h-96 bg-gray-200'>
                                <img className='w-full h-96 object-cover'
                                src={car.images[currentImageIndex].url} 
                                alt={`${car.make}${car.model}- Image ${currentImageIndex + 1}`} 
                                />
                                 {/* Navigation Arrows */}
                                
                                    {car?.images.length > 1 && (
                                        <>
                                            <button className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all'
                                                onClick={prevImage}
                                            >
                                                <ChevronLeft  className="h-6 w-6"/>
                                            </button>
                                            <button  className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all'
                                                onClick={nextImage}
                                            >
                                                <ChevronRight className="h-6 w-6" />
                                            </button>
                                    </> 
                                )}
                                {/* Image Counter */}
                                {car?.images.length > 1 && (
                                    <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full">
                                        {currentImageIndex + 1} / {car.images.length}
                                    </div>
                                )}
                            </div>
                            {/* Thumbnail Navigation */}
                            {car?.images.length > 1 && (
                                <div className='flex space-x-2 overflow-auto'>
                                    {car.images.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToImage(index)}
                                            className={`flex-shrink-0 w-20 h-16 rounded-md overflow-fidden border-2 transition-all  ${index === currentImageIndex
                                                                ? 'border-blue-500 ring-2 ring-blue-200'
                                                                : 'border-gray-300 hover:border-gray-400'} `} 
                                        >
                                            <img 
                                                src={image.url} 
                                                alt={`${car.make}${car.model}- thumbnail ${index + 1}`}
                                                className='w-full h.full object-cover'
                                            />
                                        </button>
                                    ))

                                    }
                                </div>
                            )}
                            
                        </div>
                        <div className='md:w-1/2 p-8'>
                            <div className='mb-6'>
                                <h1 className='text-3xl font-bold text-gray-900'> {car.make}  {car.model} </h1>
                                <div className='flex items-center'>
                                    <span className='text-2xl font-bold text-blue-600'>{car.price.toLocaleString()}</span>
                                    <div className="flex gap-2">
                                         {car.featured && (
                                            <span className='ml-4 px-3 py-1 bg-yellow-100 text-sm font-semibold rounded-full'>Featured</span>
                                        )}
                                        <span className={` px-3 py-1 text-sm font-semibold rounded-full flex items-center ${getAvailabilityColor(car.availability)}`}>
                                            {getAvailabilityIcon(car.availability)}
                                            {car.availability}
                                        </span>
                                         <span className={` px-3 py-1 text-sm font-semibold rounded-full flex  ${getConditionColor(car.condition)}`}>
                                            {car.condition}
                                        </span>
                                    </div>
                                   
                                </div>
                            </div>

                            <div className='mb-8 grid grid-cols-2 gap-6'>
                                { /* YEAR*/  }
                                <div className='flex items-center'>
                                    <Calendar className='h-5 w-5 text-gray-400 mr-2'/>
                                    <div>
                                        <div>Year</div>
                                        <div className="font-medium">{car.year}</div>
                                    </div>
                                </div>
                                { /* MILEAGE*/  }
                                <div className='flex items-center'>
                                    <GaugeCircle className='h-5 w-5 text-gray-400 mr-2'/>
                                    <div>
                                        <div className='text-sm text-gray-500'>Mileage</div>
                                        <div className="font-medium">{car.mileage.toLocaleString()}</div>
                                    </div>
                                </div>
                                { /* FLUEL*/  }
                                <div className='flex items-center'>
                                    <Fuel className='h-5 w-5 text-gray-400 mr-2'/>
                                    <div>
                                        <div className='text-sm text-gray-500'>Fuel Type</div>
                                        <div className="font-medium">{car.fuelType}</div>
                                    </div>
                                </div>
                                { /* Transmission*/  }
                                <div className='flex items-center'>
                                    <Settings className='h-5 w-5 text-gray-400 mr-2'/>
                                    <div>
                                        <div className='text-sm text-gray-500'>Transmission</div>
                                        <div className="font-medium">{car.transmission}</div>
                                    </div>
                                </div>
                                { /* color*/  }
                                <div className='flex items-center'>
                                    <Palette className='h-5 w-5 text-gray-400 mr-2'/>
                                    <div>
                                        <div className='text-sm text-gray-500'>Color</div>
                                        <div className='font-medium'>{car.color}</div>
                                    </div>
                                </div>
                                { /* Location*/  }
                                <div className='flex items-center'>
                                    <Palette className='h-5 w-5 text-gray-400 mr-2'/>
                                    <div>
                                        <div className='text-sm text-gray-500'>Location</div>
                                        <div className='font-medium'>{car.location}</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className='w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-10000 transition-colors duration-200'>
                                        
                                        Book Now
                                </button>
                                <button className='w-full bg-gray-100 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-200 mt-4'>
                                    Schedule Test Drive
                                </button>
                            </div>

                        </div>
                    </div>

                  </div>

               </div>
           </div>
        </Container>
    )
}