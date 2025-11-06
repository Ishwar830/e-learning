import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function PasswordInput(){
    const [showPassword, setShowPassword] = useState(false);
    return (
       <div className="flex gap-2 items-center justify-between">
          <label htmlFor="user-password">Password:</label>
          <div className="relative flex items-center">
             <input
                className="border rounded-sm p-1"
                type={showPassword ? "text" : "password"}
                name="user-password"
                id="user-password"
                minLength={8}
                maxLength={12}
                required
             />
             <button
                onClick={(e) => {
                   e.stopPropagation();
                   setShowPassword(!showPassword);
                }}
                className="absolute right-2"
                type="button"
             >
                {!showPassword ? <Eye /> : <EyeOff />}
             </button>
          </div>
       </div>
    );
}