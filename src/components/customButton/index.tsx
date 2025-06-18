import { Plus } from "lucide-react";
import { useFormStatus } from "react-dom";


export function ButtonSubmit() {
    const  { pending } = useFormStatus();
    return (
        <button className='px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            type="submit" disabled={pending}>
            <Plus className=" inline-block h-5 w-5 mr-2" />
            { pending ? 'Submitting...' : ' Add Vehicle' }
        </button>
    )
}