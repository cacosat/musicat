import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

export default function SearchBar({ children, fullWidth, ...props }) {
    const name = props.name;

    // Estilo condicional basado en la prop fullWidth
    const inputStyle = fullWidth ? "w-full" : "";

    return (
        <div className="flex items-center gap-2">
            <Input type="email" placeholder={`${name}`} className={inputStyle} />
            <div className="flex gap-2">
                {children}
            </div>
        </div>
    );
}