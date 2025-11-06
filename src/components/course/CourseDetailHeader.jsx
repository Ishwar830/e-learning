import CourseStats from "./CourseStats";

export default function CourseDetailHeader({ course }) {
   return (
      <header>
         <div className="h-[300px] bg-slate-500 rounded-md mb-2">
            Preview Video
         </div>
         <section className="grid gap-2">
            <h1 className="text-2xl font-semibold">{course.title}</h1>
            <p>{course.description}</p>
            <p>{course.instructor}</p>
            <CourseStats
               rating={course.rating}
               reviewCount={course.reviewCount}
               tag={course.tag}
               studentsEnrolled={course.studentsEnrolled}
               level={course.level}
            />
            <p>Duration: {course.duration}</p>
            <p>Language: {course.language}</p>
         </section>
      </header>
   );
}
