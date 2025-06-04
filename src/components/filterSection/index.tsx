import { ChevronDown, ChevronUp, Filter } from 'lucide-react';
import { useState } from "react";

export function FilterSection() {
    const [isOpen, setIsOpen] = useState(false);
    const  toggleFilters=() => {
        setIsOpen(!isOpen); 
    }

    return (
        <section>
            <div className="px-6 py-4 border-b border-gray-200">
                <button className="flex items-center justify-between w-full lext-left font-medium text-gray-800"
                onClick={ toggleFilters}>
                    <div className='flex items-center '>
                        <Filter className="h-5 w-5 mr-2 text-blue-600" />
                        <span>Filter Vehicles</span>
                    </div>
                    {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-blue-600" />
                    ) : (
                        <ChevronDown className="h-5 w-5 text-blue-600" />
                    )}
                </button>
            </div>
            { isOpen && (
                <div>  
                    <div>
                        {/* Make Filter */}
                        <div>
                            <label htmlFor="make">Make</label>
                        </div>

                    </div>
                </div>
            )
             }

        </section>
    )
}