import { createContext } from "react";

interface AuthContextData {
    user: UserProps | null;
    signed: boolean;
    loadingAuth: boolean;
    handleInfoUser: ({ uid ,name, email}:UserProps) => void;
}
 export interface UserProps {
    uid:string; 
    name:string  |  null;
    email:string |  null; 
}
export const  AuthContext = createContext<AuthContextData>({} as AuthContextData); 

