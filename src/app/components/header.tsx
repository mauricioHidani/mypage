"use client"

import Link from "next/link";
import React, { Component, useState } from "react";

import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";

type Props = {
    headerData: {
        items: Array<{
            id: string,
            title: string,
            path: string
        }>
    }
};

class Header extends Component<Props> {
    state = { menu: true };

    render() {
        const { headerData } = this.props;

        return(
            <header className="bg-1th-color text-2th-color">
                <div className="flex justify-between items-center w-[90%] mx-auto h-[4rem]">
                    <div className="">
                        logo
                    </div>
                    <div className={`absolute md:relative left-0 top-[4rem] md:top-0 min-h-[20vh] md:min-h-fit w-full md:w-auto px-[2rem] py-5 md:py-0 border-t-2 md:border-none border-white bg-1th-color md:bg-none md:visible ${this.state.menu ? "visible" : "hidden"}`}>
                        <ul className="flex flex-col md:flex-row md:items-center gap-[2rem]">
                        { headerData.items.map(item => 
                            <li key={ item.id } className="">
                                <Link href={ item.path } className="text-5th-color hover:text-4th-color">
                                <span className="uppercase text-lg md:text-sm">{ item.title }</span>
                                </Link>
                            </li>
                        ) }
                        </ul>
                    </div>
                    <button className="md:hidden" onClick={() => this.setState({menu: !this.state.menu})}>
                        <FiMenu className={`text-[1.25rem] md:hidden ${!this.state.menu ? "visible" : "hidden"}`} title="abrir" />
                        <TfiClose className={`md:hidden ${this.state.menu ? "visible" : "hidden"}`} title="fechar" />
                    </button>
                </div>
            </header>
        );
    }
}

export default Header;
