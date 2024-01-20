import { ReactNode } from 'react';


export default function SimpleTitle(
    {
        italic, 
        children
    }: 
    {
        italic?: boolean, 
        children: ReactNode
    }
) {
    const titleStyle = `
        text-lg 
        uppercase 
        ${italic ? "italic" : ""} 
        tracking-wider 
        text-gray-500 
    `;

    return(
        <h3 className={titleStyle}>{children}</h3>
    );
}
