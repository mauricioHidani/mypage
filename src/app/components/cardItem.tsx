"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Component } from 'react';

type Props = {
    key: number, 
    number: number, 
};

class CardItem extends Component<Props> {
    render() {
        const { key, number } = this.props;

        return(
            <div key={ key } className="flex flex-col bg-1th-color px-4 py-2">
                <h3 className="uppercase font-bold text-2xl text-4th-color">title</h3>
                <Link href="https://github.com/" target="_blank" className="text-5th-color hover:4th-color">
                    <span>repositório</span>
                </Link>
                <div className="flex items-center justify-center">
                    <Image 
                        src="/landscape.jpg" 
                        alt="project_image" 
                        width={256} 
                        height={100} 
                        style={{ width: '100%', height: 'auto' }} 
                    />
                </div>
                <p className="text-2th-color text-justify">
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and 
                    publishing industries for previewing layouts and visual mockups.
                </p>
                <Link href="" target="_blank" className="text-5th-color hover:4th-color text-right">
                    <span>more</span>
                </Link>
            </div>
        )
    }
}

export default CardItem; 
