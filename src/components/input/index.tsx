import type { LucideIcon } from 'lucide-react';

interface InputFieldProps {
    type: string;
    name: string;
    placeholder?: string;
    label?: string;
    Icon?: LucideIcon;
    autoComplete?: string;
    required?: boolean;
  }
 export function  InputField({ type, name, placeholder, label, Icon, autoComplete, required }: InputFieldProps) { 

    return (
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {label} 
            </label>
            <div className="mt-1 relative">
                <input  className='appearance-none-block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    type={type}  
                    name= {name}
                    placeholder={placeholder}
                    id={name} 
                    autoComplete={autoComplete} 
                    required={required}
                />
                 {Icon && <Icon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />}  
            </div>
        </div>
     )
     
}