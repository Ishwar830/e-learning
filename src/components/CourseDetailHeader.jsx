import CourseStats from "./CourseStats";

export default function CourseDetailHeader(){
    return(
        <header>
            <div className="h-[300px] bg-slate-500 rounded-md mb-2">
                Preview Video
            </div>
            <section className="grid gap-2">
                <h1 className="text-2xl font-semibold">Course Heading</h1>
                <p>Course Description</p>
                <p>Instructor</p>
                <CourseStats/>
            </section>
        </header>
    );
}