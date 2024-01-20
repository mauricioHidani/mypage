import { ReactElement, JSXElementConstructor } from 'react';

import CircularLink from "./circularLink";

export default function CircularLinkList(
    {
        size,
        items        
    }: 
    {
        size: string,
        items: Array<{
            id: string,
            title: string,
            path: string,
            target?: string,
            icon: ReactElement<any, string | JSXElementConstructor<any>> | null
        }>
    }
) {
    const contentStyle = `
        flex 
        justify-end 
        mx-10 md:mx-28 
        gap-2
    `;

    return(
        <div className={contentStyle}>
            { items.map(item => <CircularLink 
                    key={item.id}
                    title={item.title}
                    path={item.path}
                    target={item.target}
                    size={size}
                >
                    <span>{ item.icon }</span>
                </CircularLink>
            )}
        </div>
    );
}
