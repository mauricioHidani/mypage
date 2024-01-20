import { ReactNode } from "react";

export default function DiscountNavbarFullDark(
    { 
        children
    } :
    {
        children: ReactNode | null 
    }
) {
    return(
        <div
            className="
                w-full 
                md:h-[calc(100vh-3.5rem)] 
                p-5
                md:px-28 
                md:py-8
                bg-color-1th 
                text-color-2th 
            "
        >
            { children }
        </div>
    );
}
