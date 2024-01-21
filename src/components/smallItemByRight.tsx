import { ReactNode } from "react";

export default function SmallItemByRight(
    { 
        mobMarginX,
        dekMarginX,
        yMargin,
        children 
    }: 
    { 
        mobMarginX?: string,
        dekMarginX?: string,
        yMargin?: string,
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
                text-white
                ${mobMarginX ? "mx-"+mobMarginX : "mx-10"}
                ${dekMarginX ? "md:mx-"+dekMarginX : "md:mx-28"}
                ${yMargin ? "my-"+yMargin : ""}
            `}
        >
            { children }
        </div>
    );
}
