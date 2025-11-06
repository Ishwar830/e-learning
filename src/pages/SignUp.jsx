import EmailInput from "../components/form/EmailInput";
import NameInput from "../components/form/NameInput";
import PasswordInput from "../components/form/PasswordInput";

export default function SignUp() {
   return (
      <form
         className="grid gap-4 bg-white rounded-md p-4 shadow-lg border border-slate-500"
         method="post"
      >
         <NameInput />
         <EmailInput />
         <PasswordInput />
         <p className="flex gap-2 justify-around items-center">
            <button className="border rounded-md p-1">Submit</button>
            <CloseFormButton />
         </p>
      </form>
   );
}
