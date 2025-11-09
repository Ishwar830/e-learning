import useAuth from "../hooks/useAuth";
import useAuthForm from "../hooks/useAuthForm";
import { useNavigate } from "react-router";
import BaseForm from "../components/form/BaseForm";
import EmailInput from "../components/form/EmailInput";
import PasswordInput from "../components/form/PasswordInput";

export default function LoginForm() {
   const { userLogin } = useAuth();
   const { formData, setEmail, setPassword, formError, setFormError } =
      useAuthForm();
   const navigate = useNavigate();

   const login = async () => {
      const res = await userLogin(formData.email, formData.password);
      if (res.success) navigate("/");
      else {
         setFormError(res.error);
      }
      console.log(res);
   };

   return (
      <BaseForm handleSubmit={login} errorMsg={formError}>
         <EmailInput email={formData.email} onEmailChange={setEmail} />
         <PasswordInput
            password={formData.password}
            onPasswordChange={setPassword}
         />
      </BaseForm>
   );
}
