import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function Accordion({children}){
    const [isOpen, setIsOpen] = useState(false);
    return (
       <section className="border border-slate-400">
          <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 p-2 w-full bg-slate-200">
             <span>{isOpen ? <ChevronUp size={16}/> : <ChevronDown size={16} />}</span>
             <span>Lesson Title</span>
          </button>
          {isOpen && <section className="border-t border-slate-400">{children}</section>}
       </section>
    );
}