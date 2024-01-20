import Link from "next/link";
import { JSXElementConstructor, ReactElement } from "react";
import DiscountNavbarFullDark from "./discountNavbarFullDark";
import CircularLink from "./circularLink";

import { CgDetailsMore } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import LargeStackList from "./largeStackList";
import SimpleLink from "./simpleLink";
import SuperTitleBy2 from "./superTitleBy2";

export default function Presentation(
    { person } : {
        person: {
            fullname: string, 
            snapshot: string, 
            github: string, 
            stack: string, 
            stacks: Array<{
                id: string, 
                title: string, 
                path: string,
                icon: ReactElement<any, string | JSXElementConstructor<any>> | null
            }>, 
            contacts: Array<{
                id: string, 
                title: string, 
                path: string, 
                icon: ReactElement<any, string | JSXElementConstructor<any>> | null
            }>,
            path: string
        }
    }
) {
    return(
        <DiscountNavbarFullDark>
            <LargeStackList stacks={person.stacks} />
            <SimpleLink target="_blank" path={person.github} title="github">{person.github}</SimpleLink>
            <SuperTitleBy2 firstPart="Desenvolvedor" secondPart={person.stack} />
            <h3 
                className="
                    text-lg 
                    uppercase 
                    italic 
                    tracking-wider 
                    text-gray-500 
                "
            >
                { person.fullname }
            </h3>
            <p
                className="
                    my-3
                    text-justify 
                "
            >
                { person.snapshot }
            </p>
            <ul
                className="
                    flex 
                    flex-col md:flex-row 
                    gap-2 
                    my-3
                "
            >
                { person.contacts.map(contact => 
                    <li 
                        key={ contact.id }
                        className=" 
                            flex 
                            items-center 
                            md:justify-center 
                            h-[32px] 
                            w-[100px] md:w-auto 
                        "
                    >
                        <Link 
                            href={ contact.path }
                            title={ contact.title }
                            className="
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
                            "
                        >
                            <span>{ contact.icon }</span>
                            <span>{ contact.title }</span>
                        </Link>
                    </li>
                ) }
            </ul>
            <div 
                className="
                    flex 
                    justify-end 
                    mx-10 md:mx-28 
                    gap-2
                "
            >
                <CircularLink 
                    path={ person.path } 
                    title="mais" 
                    target="_target" 
                    size="12" 
                >
                    <span><CgDetailsMore size={ 24 } /></span>
                </CircularLink>
                <CircularLink 
                    path="#main-project"
                    title="Projeto Principal"
                    size="12"
                >
                    <span><FaCode size={ 24 } /></span>
                </CircularLink>
            </div>
        </DiscountNavbarFullDark>
    );
}