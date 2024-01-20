import { ReactElement, JSXElementConstructor } from 'react';
import Link from 'next/link';

export default function LargeStackList(
    {
        stacks
    }: 
    {
        stacks: Array<{
            id: string, 
            title: string, 
            path: string,
            icon: ReactElement<any, string | JSXElementConstructor<any>> | null
        }> 
    }
) {
    const listStyle = `
        flex 
        gap-3 
        y-[64px]
    `;
    const itemStyle = `
        flex 
        items-center 
        justify-center
    `;
    const linkStyle = `
        flex 
        flex-col 
        md:gap-[0.022rem] 
        items-center 
        justify-center 
        text-xs md:text-sm 
        text-color-normal 
        hover:text-color-hover 
        active:text-color-active
    `;
    const titleStyle = `
        hidden md:block
    `;

    return(
        <ul className={ listStyle }>
            { stacks.map(
                stack => <li key={ stack.id } className={ itemStyle }>
                    <Link href={ stack.path } target="_blank" title={ stack.title } className={ linkStyle }>
                        <span>{ stack.icon }</span>
                        <span className={ titleStyle }>{ stack.title }</span>
                    </Link>
                </li>
            ) }
        </ul>
    );
}
