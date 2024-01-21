import { ReactNode } from "react";

export default function SmallItemByRight(
    { 
        mobMarginX,
        dekMarginX,
        children 
    }: 
    { 
        mobMarginX?: string,
        dekMarginX?: string,
        children: ReactNode 
    }
) {
    return(
        <div
            className={`
                flex
                items-center
                justify-end
                right-0
                ${mobMarginX !== null ? "mx-["+mobMarginX+"]" : "mx-10"}
                ${dekMarginX !== null ? "md:mx-["+dekMarginX+"]" : "md:mx-28"}
            `}
        >
            { children }
        </div>
    );
}
