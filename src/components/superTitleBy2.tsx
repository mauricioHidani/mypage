import { ReactNode } from 'react';

export default function SuperTitleBy2(
    {
        content,
        children
    }: 
    {
        content: string,
        children: ReactNode
    }
) {
    const titleStyle = `
        flex 
        flex-col md:flex-row 
        md:gap-6 
        text-2xl md:text-5xl 
        tracking-wide md:tracking-widest 
        uppercase 
        font-bold
    `;

    return(
        <h1 className={titleStyle}>
            <span>{content}</span>
            <span>{children}</span>
        </h1>
    );
}
