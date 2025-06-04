import type { LucideIcon } from 'lucide-react';
import type { RegisterOptions, UseFormRegister } from 'react-hook-form';
interface InputFieldProps {
    type: string;
    name: string;
    placeholder?: string;
    label?: string;
    Icon?: LucideIcon;
    autoComplete?: string;
    register: UseFormRegister<any>;
    error?: string;
    rules?: RegisterOptions
  }
 export function  InputField({ type, name, placeholder, label, Icon, autoComplete, error ,register, rules}: InputFieldProps) { 

    return (
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {label} 
            </label>
            <div className="mt-1 relative">
                <input  className='appearance-none-block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    type={type}  
                    placeholder={placeholder}
                    id={name} 
                    autoComplete={autoComplete} 
                    { ...register(name, rules) }
                />
                 {Icon && <Icon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />}  
            </div>
            { error && <p className='my-1 text-red-500'>{ error }</p>}
        </div>
             
     )
     
}