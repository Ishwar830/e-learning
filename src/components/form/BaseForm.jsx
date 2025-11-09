import CloseFormButton from "./CloseFormButton";
import { useState } from "react";
import SubmitFormButton from "./SubmitFormButton";

export default function BaseForm({ handleSubmit, errorMsg, children }) {
   const [isSubmitting, setIsSubmitting] = useState(false);
   return (
      <form
         onSubmit={async (e) => {
            e.preventDefault();
            setIsSubmitting(true);
            await handleSubmit();
            setIsSubmitting(false);
         }}
         className="grid gap-4 bg-white rounded-md p-4 shadow-lg border border-slate-500"
         method="post"
      >
         {children}
         <p className="justify-self-center text-red-500 font-semibold ">
            {errorMsg}
         </p>
         <p className="grid grid-cols-2 gap-2 justify-around items-center">
            <SubmitFormButton isSubmitting={isSubmitting} />
            <CloseFormButton />
         </p>
      </form>
   );
}


