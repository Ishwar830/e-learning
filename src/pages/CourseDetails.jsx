import CourseContent from "../components/CourseContent";
import CourseDetailHeader from "../components/CourseDetailHeader";

export default function CourseDetail(){
    return(
       <div className="p-4 grid gap-4">
        <CourseDetailHeader/>
        <div className="place-self-center">
            <button className="bg-slate-800 text-white p-2 text-lg font-semibold rounded-md">Enroll Now</button>
        </div>
        <CourseContent/>
       </div> 
    );
}