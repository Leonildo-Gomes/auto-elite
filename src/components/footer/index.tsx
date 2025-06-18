import { Car, Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6">
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
                    { /* AutoElite*/  }
                    <div>
                        <div className='flex items-center mb-4'>
                            <Car className="h-6 w-6 mr-2"/>
                            <h2 className='text-xl font-bold'>AutoElite</h2>
                        </div>
                        <p className='text-gray-400 mb-4'>
                            Your trusted partner for finding the perfect vehicle. We offer a premium selection of quality cars at competitive prices.
                        </p>
                         { /* Social Media*/  }
                        <div className='flex space-x-4'>
                            <Link to="/" className='text-gray-400 hover:text-white transition-colors'>
                                <Mail className="h-5 w-5"/> 
                            </Link>
                            <a href="#" className='text-gray-400 hover:text-white transition-colors'>
                                <Facebook className="h-5 w-5"/>
                            </a>
                             <a href="#" className='text-gray-400 hover:text-white transition-colors'>
                                <Instagram className="h-5 w-5"/>
                            </a>
                             <a href="#" className='text-gray-400 hover:text-white transition-colors'>
                                <Twitter className="h-5 w-5"/>
                            </a>
                             <a href="#" className='text-gray-400 hover:text-white transition-colors'>
                                <Youtube className="h-5 w-5"/>
                            </a>

                        </div>

                    </div>
                    { /*Quick Links */  }
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
                        <ul className='space-y-2'>
                            <li>
                                <Link to="/" className='text-gray-400 hover:text-white transition-colors'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className='text-gray-400 hover:text-white transition-colors'>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className='text-gray-400 hover:text-white transition-colors'>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className='text-gray-400 hover:text-white transition-colors'>
                                    Contact
                                </Link>
                            </li>
                        </ul>

                    </div>
                    { /* Services*/  }
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>Services</h3>
                        <ul className='space-y-2'>
                            <li>
                                <a href="#" className='text-gray-400 hover:text-white transition-colors'>Car Sales</a>
                            </li>
                            <li>
                                <a href="#" className='text-gray-400 hover:text-white transition-colors'>Test Drive</a>
                            </li>
                            <li>
                                <a href="#"className='text-gray-400 hover:text-white transition-colors'>Trade-In</a>
                            </li>
                            <li>
                                <a href="#" className='text-gray-400 hover:text-white transition-colors'>Car Insurance</a>
                            </li>
                        </ul>

                    </div>
                    { /* Contact us */  }
                    <div>
                        <h3>Contact Us</h3>
                        <ul className='space-y-2'>
                            <li className='flex items-center'>
                                <MapPin className="h-5 w-5 mr-2 text-gray-400 mt-0.5"/>
                                <span className='text-gray-400'>123 Main Street, City</span>
                            </li>
                            <li>
                                <Phone className="h-5 w-5 mr-2 text-gray-400 mt-0.5"/>
                                <span className='text-gray-400'>(123) 456-7890 </span>
                            </li>
                            <li>
                                <Mail className="h-5 w-5 mr-2 text-gray-400 mt-0.5"/>
                                <span className='text-gray-400'>nfo@autoelite.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                 { /* ll rights reserved */  }
                <div className='border-t border-gray-800 mt-6 pt-6'>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <p className='text-gray-500 text-sm mb-4 md:mb-0'>
                            &copy; {new Date().getFullYear()} AutoElite. All rights reserved.
                        </p>
                        <div className='flex space-x-4 text-sm text-gray-500'>
                            <a href="#" className='hover:text-gray-400 transition-colors'>
                                Privacy Policy
                            </a>
                            <a href="#" className='hover:text-gray-400 transition-colors'>
                                Terms of Service
                            </a>
                            <a href="#" className='hover:text-gray-400 transition-colors'>
                                Cookie Policy
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
} 