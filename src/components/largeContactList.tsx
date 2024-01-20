import { ReactElement, JSXElementConstructor } from "react";
import Link from 'next/link';

export default function LargeContactList(
    {
        contacts
    }: 
    {
        contacts: Array<{
            id: string, 
            title: string, 
            path: string, 
            icon: ReactElement<any, string | JSXElementConstructor<any>> | null
        }>
    }
) {
    const listStyle = `
        flex 
        flex-col md:flex-row 
        gap-2 
        my-3
    `;
    const itemStyle = `
        flex 
        items-center 
        md:justify-center 
        h-[32px] 
        w-[100px] md:w-auto
    `;
    const linkStyle = `
        flex 
        flex-row 
        items-center 
        justify-start md:justify-center 
        gap-2 
        pl-2
        text-color-normal 
        hover:text-color-hover 
        active:text-color-active
        text-xl md:text-sm
    `;

    return(
        <ul className={listStyle}>
            { contacts.map(contact => 
                <li key={contact.id} className={itemStyle}>
                    <Link href={contact.path} title={contact.title} className={linkStyle}>
                        <span>{ contact.icon }</span>
                        <span>{ contact.title }</span>
                    </Link>
                </li>
            ) }
        </ul>
    );
}
