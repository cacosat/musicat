import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

export default function SearchBar({children, ...props}) {
    // helper function + hooks
    const name = props.name;

    return <>
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder={`${name}`} />
            {children}
            {/* {children}, this should be the buttons to be added to the search bar according to each page */}
            {/* <Button variant="outline" type="submit">Subscribe</Button>
            <Button variant="outline" type="submit">Subscribe</Button> */}
        </div>
    </>
}