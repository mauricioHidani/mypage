import { ReactNode } from 'react';

export default function JustifiedText(
    {
        children
    }: 
    {
        children: ReactNode
    }
) {
    const textStyle = `
        my-3
        text-justify
    `;

    return(
        <p className={textStyle}>
            {children}
        </p>
    );
}