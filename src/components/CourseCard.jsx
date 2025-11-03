import { Star } from "lucide-react";


function CourseCard(){
    return (
       <div className="grid gap-4 p-4 rounded-md border border-slate-400">
          <div className="h-[200px] bg-rose-400 rounded-md">Course Image</div>
          <div>
             <p className="text-xl">Intro to AI Agents</p>
             <p className="text-md text-slate-600">Matt Gerry</p>
          </div>
          <div className="flex gap-4 text-sm text-slate-800">
             <span className="font-bold bg-emerald-300 text-emerald-800 border p-1 rounded-sm border-slate-400 ">
                BestSeller
             </span>
             <span className="flex gap-1 items-center border p-1 rounded-sm border-slate-400 ">
                <Star size={16} fill="#FFD700" strokeWidth={1} /> 4.4
             </span>
             <span className="border p-1 rounded-sm border-slate-400 ">
                10,855 ratings
             </span>
          </div>
       </div>
    );
}

export default CourseCard;