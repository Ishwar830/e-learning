import { useNavigate } from "react-router";

export default function CloseFormButton(){
    const navigate = useNavigate();
    return (
       <button
          onClick={() => navigate("/")}
          className="border rounded-md p-1"
          type="button"
       >
          Close
       </button>
    );
}