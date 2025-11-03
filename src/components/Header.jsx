import { Menu, Globe } from "lucide-react";

function Header() {
    return (
        <header className="p-4">
            <div className="flex justify-between items-center">
                <Menu />
                <p className="text-2xl font-bold tracking-widest antialiased">Logo</p>
                <Globe/>
            </div>
        </header>
    );
}

export default Header;
