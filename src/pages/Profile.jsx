import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import CourseList from "../components/course/CourseList";
import fakeAPI from "../services/fakeAPI";
import { LoaderCircle, User } from "lucide-react";

export default function Profile() {
   const { user } = useAuth();
   const [enrolledCourses, setEnrolledCourses] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const handleEnrolledCourses = async () => {
         const res = await fakeAPI.getUserEnrollments(user.id);
         if (res.success) setEnrolledCourses(res.data);
         setIsLoading(false);
      };

      if (user) {
         handleEnrolledCourses();
      }
   }, [user]);

   if (!user) {
      return <Navigate to="/login" replace></Navigate>;
   }

   return (
      <main className="p-4 grid gap-4">
         <section className="flex gap-4 items-center">
            <div className="rounded-full size-20 bg-slate-400">
               <User className="size-full p-2" stroke="white" />
            </div>
            <div>
               <p>{user.name}</p>
               <p>{user.email}</p>
            </div>
         </section>

         <section className="min-h-[300px] grid grid-rows-[min-content_1fr] ">
            <h2 className="mb-4 text-lg">My Courses</h2>
            {isLoading ? (
               <LoaderCircle size={32} className="animate-spin place-self-center"></LoaderCircle>
            ) : (
               <CourseList courses={enrolledCourses}></CourseList>
            )}
         </section>
      </main>
   );
}
