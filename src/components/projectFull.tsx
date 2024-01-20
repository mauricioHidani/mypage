import { ReactNode, ReactElement, JSXElementConstructor } from "react";
import { CgDetailsMore } from "react-icons/cg";

import CircularLink from "./circularLink";
import LargeStackList from "./largeStackList";
import SimpleLink from "./simpleLink";
import Image from "next/image";

export default function ProjectFull(
    {
        title,
        path,
        target,
        stacks,
        children
    }: 
    {
        title: string,
        path: string,
        target?: string,
        stacks: Array<{
            id: string, 
            title: string, 
            path: string,
            icon: ReactElement<any, string | JSXElementConstructor<any>> | null
        }>,
        children: ReactNode
    }
) {
    const contentStyle = `
        w-full
        md:h-[100vh]
        p-5
        md:px-28 
        md:py-8
    `;
    const titleStyle = `
        uppercase
        tracking-wide
        text-bold
        text-2xl md:text-4xl
        mb-[-0.42rem]
    `;
    const simpleContentStyle = `
        my-3
        text-justify
    `;
    const simpleCircularLink = `
        flex
        items-center
        justify-end
        right-0
        mx-10 md:mx-28
    `;

    return(
        <div className={contentStyle}>
            <h1 className={titleStyle}>{ title }</h1>
            <SimpleLink target={target} path={path} title="Mais Sobre">{ path }</SimpleLink>
            <Image width={1024} height={768} style={{ width: '100%', height: 'auto' }} alt="Imagem do Projeto" src="/landscape.jpg" />
            <p className={simpleContentStyle}>{ children }</p>
            <LargeStackList stacks={stacks} />
            <div className={simpleCircularLink}>
                <CircularLink path="/" title="Projeto Principal" target="_blank" size="12">
                    <span><CgDetailsMore size={24} /></span>
                </CircularLink>
            </div>
        </div>
    );
}
