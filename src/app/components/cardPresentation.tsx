'use client'

import React, { Component, ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ButtonLink from './buttonLink';

import { GrMore } from "react-icons/gr";

type Props = {
    title: string, 
    content: string, 
    path: string, 
    imageUrl: string, 
    stacks: Array<{
        id: string, 
        title: string, 
        path: string, 
        icon: ReactElement<any, string | React.JSXElementConstructor<any>>
    }>
};

class CardPresentation extends Component<Props> {
    render() {
        const { title, content, path, imageUrl, stacks } = this.props;

        return(
            <div className={`px-10 lg:px-52 py-10 lg:py-20 h-auto lg:h-screen`}>
                <h1 className={`text-xl md:text-2xl lg:text-4xl uppercase`}>
                    { title }
                </h1>
                <Link href={ path } className={``}>
                    <span>{ path }</span>
                </Link>
                <ul className={``}>
                    { stacks.map(
                        stack => <li key={ stack.id } className={``}>
                            <Link href={ stack.path } className={``}>
                                <span className={``}>
                                    { stack.title }
                                </span>
                                <span className={``}>
                                    { stack.icon }
                                </span>
                        </Link>
                        </li>
                    )}
                </ul>
                <div className="flex items-center justify-center pt-5 pb-2 mx-auto">
                    <Image 
                        src="/landscape.jpg" 
                        alt="image_of_project" 
                        width={1024} 
                        height={256} 
                        style={{ width: '100%', height: 'auto' }} 
                    /> 
                </div>
                <p className="text-justify">
                { content }
                </p>
                <div className="flex items-center justify-end py-3">
                <ButtonLink path="" title="mais">
                    <GrMore />
                </ButtonLink>
                </div>
            </div>
        );
    }
}

export default CardPresentation;
