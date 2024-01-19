"use client"

import { useState } from "react";
import SmallLogo from "./smallLogo";
import NavbarList from "./navbarList";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar(
    { 
        items
    }
    : { 
        items: Array<{
            key: string, 
            title: string, 
            path: string, 
        }>
    }
) {
    const [ active, setActive ] = useState(true);

    function onActive() {
        setActive(!active);
    }

    return(
        <div 
            className=" 
                flex 
                items-center 
                justify-between 
                px-5 md:px-12
                h-16 md:h-14
            "
        >
            <SmallLogo />
            <nav 
                className={`
                    absolute md:relative
                    top-16 md:top-0 
                    left-0 
                    px-7 md:px-0
                    py-4 md:py-0 
                    w-full md:w-auto 
                    bg-color-3th md:bg-inherit 
                    ${ active ? 'block' : 'hidden' }
                `}
            >
                <NavbarList items={ items } />
            </nav>
            <button 
                onClick={ onActive }
                className="
                    block md:hidden 
                "
            >
                <FiMenu 
                    size="22" 
                    className={` 
                        text-green-500 
                        ${ !active ? 'block' : 'hidden' }
                    `} 
                />
                <AiOutlineClose 
                    size="22" 
                    className={` 
                        text-red-500 
                        ${ active ? 'block' : 'hidden' }
                    `}
                />
            </button>
        </div>
    );
} 
