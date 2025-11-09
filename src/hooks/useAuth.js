import { createContext, useContext } from "react";

export const AuthContext = createContext(null);

export default function useAuth(){
   const auth = useContext(AuthContext);
   return auth;
}
