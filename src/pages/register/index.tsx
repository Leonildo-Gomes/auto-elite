import { Car, Lock, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../../components/container";
import { InputField } from "../../components/input";

export function Register() {
    return (
        <Container>
            <div  className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="flex justify-center">
                        <Link to="/">
                            <Car className="h-12 w-12 text-blue-600"/>
                        </Link>
                    </div>
                    
                    <h2 className="text-center text-3xl font-extrabold text-gray-900">
                        Create your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                            Sign in
                        </Link>
                    </p>
                </div>
                { /* FORM*/ }
                <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md" >
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6">
                            <InputField 
                                type="name" 
                                name="name"  
                                label="Full Name" 
                                Icon={User} 
                                autoComplete="name" 
                                required 
                            />
                             <InputField 
                                type="email" 
                                name="email"  
                                label="Email" 
                                Icon={Mail} 
                                autoComplete="email" 
                                required 
                            />
                            <InputField 
                                type="password" 
                                name="password" 
                                label="Password" 
                                Icon={Lock} 
                                autoComplete="current-password" 
                                required 
                            /> 
                            <div>
                                <button type='submit' 
                                    className='bg-blue-600 text-white w-full flex justify-center py-2 px-4 border border-transparent rounded-md
                                    shadow-sm text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer'
                                >
                                    Create Account
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                

            </div>
        </Container>
    )
} 