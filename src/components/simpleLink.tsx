import Link from 'next/link';
import { ReactNode } from 'react';

export default function SimpleLink(
    {
        path, 
        target, 
        title, 
        children
    }: 
    {
        path: string, 
        target?: string, 
        title?: string, 
        children: ReactNode | null
    }
) {
    const linkStyle = `
        text-sm 
        text-color-4th 
        hover:text-color-hover 
        active:text-color-active 
    `;

    return(
        <div>
            <Link href={path} target={target} title={title} className={linkStyle}>
                {children}
            </Link>
        </div>
    );
}
