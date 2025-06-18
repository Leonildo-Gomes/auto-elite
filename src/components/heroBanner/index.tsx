import { ChevronRight } from "lucide-react";


export function HeroBanner() {
    return (
        <section className="relative bg-gray-900 text-white">
            <div className="  inset-0 bg-[url('https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-40">
                <div className="relative container mx-auto px-4 py-24 ">
                     <div className="max-w-2xl ">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 "> 
                            Find Your Perfect Drive
                        </h1>
                        <p className="text-xl mb-8">
                             Explore our premium selection of quality vehicles at competitive prices
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-olors duration-200 flex items-center">
                                Browse Inventory
                                <ChevronRight className="ml-2 h-5 w-5" />
                            </button>
                            <button className="bg-transparent hover:bg-white/10 text-white border border-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                                Sell Your Car
                            </button>
                        </div>
                     </div>
                </div>

            </div>
        </section>
    )
}