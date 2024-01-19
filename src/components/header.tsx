import Navbar from "./navbar";

import { data as navbar } from "@/data/navbar";

export default function Header() {
    const { items } = navbar;

    return(
        <header 
            className="
                stick
                bg-color-1th
                text-color-2th 
            "
        >
            <Navbar items={ items } />
        </header>
    );
}
