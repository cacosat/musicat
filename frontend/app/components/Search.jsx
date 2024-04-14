import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

export default function SearchBar({ children, fullWidth, ...props }) {
    const name = props.name;

    return (
        <div className="flex justify-center items-center gap-2 w-[80%]">
            <div className="rounded-md grow shadow-custom-vertical">
                <Input type="email" placeholder={`${name}`} />
            </div>
            <div className="flex gap-2">
                {children}
            </div>
        </div>
    );
}