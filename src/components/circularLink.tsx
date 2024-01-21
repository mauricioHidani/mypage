import Link from "next/link";
import { ReactNode } from "react";

export default function CircularLink(
    {
        path, 
        title, 
        target, 
        size, 
        children  
    }:
    {
        path: string, 
        title: string, 
        target?: string, 
        size: string, 
        children: ReactNode | null 
    }
) {
    return(
        <Link 
            href={ path }
            title={ title }
            target={ target } 
        >
            <div
                className={`
                    flex 
                    items-center 
                    justify-center 
                    ${ "w-"+size } 
                    ${ "h-"+size } 
                    p-2 
                    rounded-full 
                    bg-color-normal
                    hover:bg-color-hover 
                    active:bg-color-active 
                    text-white
            `}
            >
                { children }
            </div>
        </Link>
    );
}
