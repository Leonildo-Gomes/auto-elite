
import { useParams } from 'react-router-dom';
import { CarForm } from '../../carForm';

export function NewCar({ isEdit }: { isEdit: boolean }) {
     const { id } = useParams();

     return <CarForm  id={id} isEdit={isEdit}/>
    
   
}


