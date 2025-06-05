import { zodResolver } from "@hookform/resolvers/zod";
import { createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { Car, Lock, Mail, User } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import z from "zod";
import { Container } from "../../components/container";
import { InputField } from "../../components/input";
import { auth } from "../../services/firebaseConnection";
const schema = z.object({
     name:z.string().nonempty("Name is required") ,
    email: z.string().email("Enter a valid email address").nonempty("Email is required"), 
    password: z.string().nonempty("Password is required").min(5, "Password must be at least 5 characters long"), 
     
})
type FormData= z.infer<typeof schema>
export function Register() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState:  {errors } } = useForm<FormData>(
        {
            resolver: zodResolver(schema),
            mode: 'onChange'
        } 
    ); 

     useEffect(() => {
        async function handleLogout() {
            await  signOut(auth);
        }
        handleLogout(); 
    }, []);
    function onsubmit(data: FormData) {
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((user) => {
            updateProfile(user.user, {
                displayName: data.name,
            })
            navigate('/managecar', { replace: true }) ;
            toast.success("Welcome to the AutoElite system");
            console.log(user);     
        })
        .catch((error) => {
            console.log("Error when registering new user"); 
            toast.error("Error when registering new user"); 
           console.log(error);
        })
        
        console.log(data)
    }  
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
                        <form className="space-y-6" onSubmit={handleSubmit(onsubmit)}>
                            <InputField 
                                type="name" 
                                name="name"  
                                label="Full Name" 
                                Icon={User} 
                                autoComplete="name" 
                                 error={ errors.name?.message}
                                register = { register} 
                            />
                             <InputField 
                                type="email" 
                                name="email"  
                                label="Email" 
                                Icon={Mail} 
                                autoComplete="email" 
                                 error={ errors.email?.message}
                                register = { register} 
                            />
                            <InputField 
                                type="password" 
                                name="password" 
                                label="Password" 
                                Icon={Lock} 
                                autoComplete="current-password" 
                                error={ errors.password?.message}
                                register = { register} 
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