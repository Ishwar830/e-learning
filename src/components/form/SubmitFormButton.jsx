import { LoaderCircle } from "lucide-react";

export default function SubmitFormButton({isSubmitting}){
    return (
       <button
          disabled={isSubmitting}
          className="flex justify-center border rounded-md p-1"
       >
          {isSubmitting ? <LoaderCircle className="animate-spin" /> : "Submit"}
       </button>
    );
}