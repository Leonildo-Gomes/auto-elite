import { Car, LogOut, Search, UserCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Header() {
    const signed = false;
    return (
        <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-md">
            <div  className="container mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    { /* LOGO + TITLE */ }
                    <div className="flex items-center mb-4 md:mb-0">
                        <Link to="/"className='flex items-center mb-4 md:mb-0' >
                            <Car className="h-8 w-8 mr-2"/> 
                            <h1 className="text-2xl font-bold" >AutoElite</h1>
                        </Link>
                    </div> 
                    { /* SEARCH INPUT*/ }
                    <div className='flex-1 max-w-md mx-4'>
                        <div className='relative'>
                            <input 
                               type="text" 
                               placeholder="Search for makes, models..."
                               className="w-full py-2 pl-10 pr-4 rounded-full bg-blue-800 text-white placeholder-blue-300 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" /> 
                                <Search className="absolute left-3 top-2.5 h-5 w-5 text-blue-300" />
                        </div>
                    </div>

                    { /* NAVBAR*/ }
                    <nav className="flex items-center space-x-6">
                        <Link to="/" className="hover:text-blue-300 transition-colors duration-200">Home</Link>
                        <Link to="/inventory" className="hover:text-blue-300 transition-colors duration-200">Inventory</Link>
                        <Link to="/services" className="hover:text-blue-300 transition-colors duration-200">Services</Link>
                        <Link to="/contact" className="hover:text-blue-300 transition-colors duration-200">Contact</Link>
                        { !signed && 
                            <Link to="/login" className="hover:text-blue-300 transition-colors duration-200">
                                <div>
                                    <UserCircle className="h-6 w-6" /> 
                                </div>
                            </Link> 
                        } 
                        { signed && 
                            <Link to="/login" className="hover:text-blue-300 transition-colors duration-200">
                                <div>
                                    <LogOut className="h-6 w-6" /> 
                                </div>
                            </Link> 
                        } 
                    </nav>
                </div>
            </div>
        </header>
    )
} 