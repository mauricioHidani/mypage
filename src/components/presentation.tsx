    import Link from "next/link";
    import { JSXElementConstructor, ReactElement } from "react";
    import DiscountNavbarFullDark from "./discountNavbarFullDark";
    import CircularLink from "./circularLink";

    import { CgDetailsMore } from "react-icons/cg";
    import { FaCode } from "react-icons/fa";

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
                <ul 
                    className="
                        flex 
                        gap-3 
                        y-[64px] 
                    "
                >
                    { person.stacks.map(
                        stack => <li 
                            key={stack.id} 
                            className="
                                flex 
                                items-center 
                                justify-center 
                            "
                        >
                            <Link 
                                href={stack.path}
                                target="_blank" 
                                title={ stack.title }
                                className="
                                    flex 
                                    flex-col 
                                    md:gap-[0.022rem] 
                                    items-center 
                                    justify-center 
                                    text-xs md:text-sm 
                                    text-color-normal 
                                    hover:text-color-hover 
                                    active:text-color-active
                                "
                            >
                                <span>{ stack.icon }</span>
                                <span className="hidden md:block">{ stack.title }</span>
                            </Link>
                        </li>
                    ) }
                </ul>
                <div className="">
                    <Link 
                        href={ person.github } 
                        target="_blank" 
                        title="gihub" 
                        className="
                            text-sm 
                            text-color-4th 
                            hover:text-color-hover 
                            active:text-color-active 
                        "
                    >
                        <span>{ person.github }</span>
                    </Link>
                </div>
                <h1
                    className="
                        flex 
                        flex-col md:flex-row 
                        md:gap-6 
                        text-2xl md:text-5xl 
                        tracking-wide md:tracking-widest 
                        uppercase 
                        font-bold  
                    "
                >
                    <span>Desenvolvedor</span>
                    <span>{ person.stack }</span>
                </h1>
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