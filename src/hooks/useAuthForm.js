import { useState } from "react";

const initialData = {
    name: "",
    email: "",
    password: ""
}

export default function useAuthForm(){
    const [formData, setFormData] = useState(initialData);
    const [formError, setFormError] = useState("");

    const setEmail = (email) => setFormData({...formData, email});
    const setName = (name) => setFormData({...formData, name});
    const setPassword = (password) => setFormData({...formData, password});

    return {
        formData,
        setEmail,
        setName,
        setPassword,
        formError,
        setFormError
    }
}