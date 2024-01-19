import Link from "next/link";

export default function NavbarItem(
    { 
        item 
    }
    : { 
        item: { 
            key: string, 
            title: string, 
            path: string 
        } 
    }
) {
    return(
        <Link 
            href="#" 
            title={ item.title }
            className="
                text-color-normal hover:text-color-hover active:text-color-active 
            "
        >
            <li 
                className="
                "
            >
                <span className="">{ item.title }</span>
            </li>
        </Link>
    );
}
