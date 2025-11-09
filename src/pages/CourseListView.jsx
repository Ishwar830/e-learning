import { Search } from "lucide-react";
import CourseList from "../components/course/CourseList";
import { useLoaderData, useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import useDebouncedValue from "../hooks/useDebouncedValue";


export default function CourseListView() {
   const { courses } = useLoaderData();
   const [searchParams, setSearchParams] = useSearchParams();

   const [query, setQuery] = useState(searchParams.get("query") || "");
   const currentLevel = searchParams.get("level") || "";
   const currentSort = searchParams.get("sortBy") || "";

   const debouncedInput = useDebouncedValue(query);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   useEffect(() => {
      setSearchParams((prev) => {
         const newParams = new URLSearchParams(prev);
         newParams.set("query", debouncedInput);
         return newParams;
      });
   }, [debouncedInput, setSearchParams]);

   function handleFilterChange(e) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("level", e.target.value);
      setSearchParams(newParams);
   }

   function handleSortChange(e) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("sortBy", e.target.value);
      setSearchParams(newParams);
   }

   return (
      <section className=" grid gap-4 p-4">
         <div className="grid gap-4">
            <div className="flex gap-2 items-center">
               <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 border rounded-sm p-1"
                  name="query"
                  type="search"
               />
               <Search />
            </div>
            <div className="flex gap-2">
               <p className="flex gap-2">
                  <label htmlFor="level">Level</label>
                  <select
                     value={currentLevel}
                     onChange={handleFilterChange}
                     className="border"
                     name="level"
                     id="level"
                  >
                     <option value="">---</option>
                     <option value="Beginner">Beginner</option>
                     <option value="Intermediate">Intermediate</option>
                     <option value="Advanced">Advanced</option>
                  </select>
               </p>
               <p className="flex gap-2">
                  <label htmlFor="sortBy">Sort</label>
                  <select
                     value={currentSort}
                     onChange={handleSortChange}
                     className="border"
                     name="sortBy"
                     id="sortBy"
                  >
                     <option value="">---</option>
                     <option value="popularity">Popularity</option>
                     <option value="rating">Rating</option>
                  </select>
               </p>
            </div>
         </div>
         <CourseList courses={courses} />
      </section>
   );
}
