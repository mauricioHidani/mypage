import { JSXElementConstructor, ReactElement } from "react";
import { data as presentation } from '@/data/presentationData';

import DiscountNavbarFullDark from "./discountNavbarFullDark";
import LargeStackList from "./largeStackList";
import LargeContactList from "./largeContactList";
import CircularLinkList from "./circularLinkList"
import SimpleTitle from "./simpleTitle";
import SimpleLink from "./simpleLink";
import SuperTitleBy2 from "./superTitleBy2";
import JustifiedText from "./justifiedText";

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
            <SuperTitleBy2 content="Desenvolvedor">{ person.stack }</SuperTitleBy2>
            <SimpleLink target="_blank" path={person.github} title="github">{ person.github }</SimpleLink>
            <SimpleTitle italic={true}>{ person.fullname }</SimpleTitle>
            <JustifiedText>{ person.snapshot }</JustifiedText>
            <LargeContactList contacts={person.contacts} />
            <CircularLinkList size="12" items={presentation.accessLinks} />
        </DiscountNavbarFullDark>
    );
}