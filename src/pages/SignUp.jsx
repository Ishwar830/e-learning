import EmailInput from "../components/form/EmailInput";
import NameInput from "../components/form/NameInput";
import PasswordInput from "../components/form/PasswordInput";
import useAuth from "../hooks/useAuth";
import useAuthForm from "../hooks/useAuthForm";
import { useNavigate } from "react-router";
import BaseForm from "../components/form/BaseForm";

export default function SignUpForm() {
   const { userSignup } = useAuth();
   const { formData, setName, setEmail, setPassword, formError, setFormError } =
      useAuthForm();
   const navigate = useNavigate();

   const signup = async () => {
      const res = await userSignup(
         formData.name,
         formData.email,
         formData.password
      );
      if (res.success) navigate("/");
      else {
         setFormError(res.error);
      }
      console.log(res);
   };

   return (
      <BaseForm handleSubmit={signup} errorMsg={formError}>
         <NameInput name={formData.name} onNameChange={setName} />
         <EmailInput email={formData.email} onEmailChange={setEmail} />
         <PasswordInput
            password={formData.password}
            onPasswordChange={setPassword}
         />
      </BaseForm>
   );
}
