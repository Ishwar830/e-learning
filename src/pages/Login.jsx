import EmailInput from "../components/form/EmailInput";
import PasswordInput from "../components/form/PasswordInput";
import CloseFormButton from "../components/form/CloseFormButton";

export default function Login() {
   return (
      <form
         className="grid gap-4 bg-white rounded-md p-4 shadow-lg border border-slate-500"
         method="post"
      >
         <EmailInput />
         <PasswordInput />
         <p className="flex gap-2 justify-around items-center">
            <button className="border rounded-md p-1">Submit</button>
            <CloseFormButton/>
         </p>
      </form>
   );
}
