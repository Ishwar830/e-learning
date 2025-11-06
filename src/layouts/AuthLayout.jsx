import { Outlet } from "react-router";

export default function AuthLayout(){
    return (
        <main className="min-h-dvh flex justify-center items-center bg-sky-300">
            <Outlet/>
        </main>
    );
}