import { useLoaderData, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import CourseContent from "../components/course/CourseContent";
import CourseDetailHeader from "../components/course/CourseDetailHeader";
import useAuth from "../hooks/useAuth";
import { CircleCheck, LoaderCircle } from "lucide-react";

export default function CourseDetail() {
   const { course } = useLoaderData();
   const params = useParams();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <div className="p-4 lg:px-[clamp(16px,10%,80px)] grid gap-4">
         <CourseDetailHeader course={course} />
         <div className="place-self-center">
            <EnrollCourseButton courseId={parseInt(params.courseId)} />
         </div>
         <div>
            <h2 className="text-2xl font-semibold">Description</h2>
            <p>{course.longDescription}</p>
         </div>
         <CourseContent lessons={course.lessons} />
      </div>
   );
}

function EnrollCourseButton({ courseId }) {
   const [isSubmitting, setIsSubmitting] = useState(false);
   const { user, enrollCourse } = useAuth();
   const navigate = useNavigate();

   const isEnrolled = user && user.enrolledCourses.includes(courseId);

   return (
      <button
         disabled={isEnrolled}
         onClick={async () => {
            if (!user) {
               navigate("/login");
               return;
            }

            setIsSubmitting(true);
            await enrollCourse(courseId);
            setIsSubmitting(false);
         }}
         className="bg-slate-800 text-white p-2 w-30 h-12 flex justify-center items-center text-lg font-semibold
         rounded-md hover:cursor-pointer"
      >
         {isEnrolled ? (
            <span className="flex gap-2 items-center text-green-600">
               <CircleCheck />
               Enrolled
            </span>
         ) : isSubmitting ? (
            <span>
               <LoaderCircle className="animate-spin"/>
            </span>
         ): "Enroll Now"}
      </button>
   );
}
