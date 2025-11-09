import CourseStats from "./CourseStats";

function CourseCard({ course }) {
   return (
      <div className="grid gap-4 p-4 rounded-md border border-slate-400 h-full hover:cursor-pointer">
         <div className="h-[200px] bg-rose-400 rounded-md">Course Image</div>
         <div>
            <p className="text-xl">{course.title}</p>
            <p className="text-md text-slate-600">{course.instructor}</p>
         </div>
         <CourseStats
            rating={course.rating}
            studentsEnrolled={course.studentsEnrolled}
            tag={course.tag}
            level={course.level}
         />
      </div>
   );
}

export default CourseCard;
