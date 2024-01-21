import { ReactNode } from "react";

export default function ContentGrid3(
    {
        children
    }: 
    {
        children: ReactNode
    }
) {
    return(
        <div
            className="
                grid
                grid-cols-1 md:grid-cols-3
                gap-6
                p-5
                md:px-28 
                md:py-8
            "
        >
            { children }
        </div>
    );
}
