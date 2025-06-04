import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState, type ReactNode } from "react";
import { auth } from "../services/firebaseConnection";
import { AuthContext, type UserProps } from "./AuthContext";

 export interface AuthProviderProps {
    children: ReactNode;
}
export function AuthProvider({ children }: AuthProviderProps) { 
     const [user, setUser]= useState<UserProps|null >(null);
     const [loading, setloading]= useState(true); 
    useEffect(() => {
        {/*Ver se o user esta Logado */}
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user.email, 
                    name:user.displayName
                })
                setloading(false);
            } else {
                setUser(null); 
                setloading(false); 
            }
        })

        return () => {
            unsubscribe();
        }
        
    }, []);

    function handleInfoUser({ uid ,name, email}:UserProps){
        setUser({ 
            name,
            email,
            uid
        }) 
     }   
    return (
        <AuthContext.Provider value={
            {
                user,
                signed: !!user,
                loadingAuth: loading,
                handleInfoUser

            }
        }>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthProvider;