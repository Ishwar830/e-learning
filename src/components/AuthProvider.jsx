import fakeAPI from "../services/fakeAPI";
import { useState } from "react";
import { AuthContext } from "../hooks/useAuth";

export default function AuthProvider({ children }) {
   const [user, setUser] = useState(null);

   const userLogin = async (email, password) => {
      const response = await fakeAPI.authenticateUser(email, password);
      if (response.success) {
         setUser(response.data.user);
         return {
            success: true,
            token: response.data.token,
         };
      }
      return {
         success: false,
         error: response.error,
      };
   };

   const userSignup = async (userName, email, password) => {
      const response = await fakeAPI.createUser(userName, email, password);
      if (response.success) {
         setUser(response.data.user);
         return {
            success: true,
            token: response.data.token,
         };
      }

      return {
         success: false,
         error: response.error,
      };
   };

   const userLogout = () => setUser(null);

   const enrollCourse = async (courseId) => {
      if (user) {
         const res = await fakeAPI.enrollCourse(user.id, courseId);
         setUser({ ...user });
         return res;
      }
      return { success: false };
   };

   return (
      <AuthContext
         value={{ user, userLogin, userSignup, userLogout, enrollCourse }}
      >
         {children}
      </AuthContext>
   );
}
