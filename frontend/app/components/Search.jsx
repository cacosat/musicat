import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

export default function SearchBar({children, ...props}) {
    // helper function + hooks
    const name = props.name;

    return <>
        <div className="flex items-center gap-2">
            <Input type="email" placeholder={`${name}`} />
            <div className="flex gap-2">
                {children}
            </div>
        </div>
    </>
}