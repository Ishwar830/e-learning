import CourseStats from "./CourseStats";

function CourseCard(){
    return (
       <div className="grid gap-4 p-4 rounded-md border border-slate-400">
          <div className="h-[200px] bg-rose-400 rounded-md">Course Image</div>
          <div>
             <p className="text-xl">Intro to AI Agents</p>
             <p className="text-md text-slate-600">Matt Gerry</p>
          </div>
          <CourseStats/>
       </div>
    );
}

export default CourseCard;