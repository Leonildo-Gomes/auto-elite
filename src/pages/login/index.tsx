import { Car, Lock, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from "../../components/container";
import { InputField } from '../../components/input';
export function Login() {
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
                        Sign in to AutoElite
                    </h2>
                    <p className="text-center text-sm text-gray-600">
                        Or{' '}
                        <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
                            create a new account
                        </Link>
                    </p>
                </div>
                { /* FORM*/ }
                <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md" >
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6">
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

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <Link to="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                                        Forgot your password?
                                    </Link>
                                </div>
                            </div> 
                            <div>
                                <button type='submit' 
                                    className='bg-blue-600 text-white w-full flex justify-center py-2 px-4 border border-transparent rounded-md
                                    shadow-sm text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer'
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                

            </div>
        </Container>
    )
} 