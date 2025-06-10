
import type { LucideIcon } from 'lucide-react';
import type { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface Option {
  value: string;
  label: string;
}
interface SelectFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  Icon?: LucideIcon;
  options: Option[];
  register: UseFormRegister<any>;
  error?: string;
  rules?: RegisterOptions;
}
 export function  SelectField({  name, placeholder='Select an option', label, Icon, options, error ,register, rules}: SelectFieldProps) { 

    return (
        <div className=''>
            { label && (
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    {label} 
                </label>
            ) }
            
            <div className="mt-1 relative">
                <select  
                    className='appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    id={name} 
                    { ...register(name, rules) }
                >
                    <option value=''>{placeholder}</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <div
                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                />
                 {Icon && <Icon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />}  
            </div>
            { error && <p className='my-1 text-red-500'>{ error }</p>}
        </div>
             
     )
     
}