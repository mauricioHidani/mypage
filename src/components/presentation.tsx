import Link from "next/link";
import { JSXElementConstructor, ReactElement } from "react";
import { data as presentation } from '@/data/presentationData';
import DiscountNavbarFullDark from "./discountNavbarFullDark";
import CircularLink from "./circularLink";

import { CgDetailsMore } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import LargeStackList from "./largeStackList";
import SimpleLink from "./simpleLink";
import SuperTitleBy2 from "./superTitleBy2";
import SimpleTitle from "./simpleTitle";
import JustifiedText from "./justifiedText";
import LargeContactList from "./largeContactList";
import CircularLinkList from "./circularLinkList";

export default function Presentation(
    { 
        person 
    } : 
    {
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
            <SimpleLink target="_blank" path={person.github} title="github">{ person.github }</SimpleLink>
            <SuperTitleBy2 content="Desenvolvedor">{ person.stack }</SuperTitleBy2>
            <SimpleTitle italic={true}>{ person.fullname }</SimpleTitle>
            <JustifiedText>{ person.snapshot }</JustifiedText>
            <LargeContactList contacts={person.contacts} />
            <CircularLinkList size="12" items={presentation.accessLinks} />
        </DiscountNavbarFullDark>
    );
}