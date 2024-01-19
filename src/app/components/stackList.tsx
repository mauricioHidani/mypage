'use client'

import React, { Component, ReactElement } from "react";
import StackItem from "./stackItem";

type Props = {
    stacks: Array<{
        id: string,
        title: string,
        path: string,
        icon: ReactElement<any, string | React.JSXElementConstructor<any>>
    }>
};

class StackList extends Component<Props> {
    render() {
        const { stacks } = this.props;

        return(
            <ul className="mb-7 flex items-center gap-2 md:gap-3 text-slate-400">
                { stacks.map(stack => 
                    <li key={ stack.id }>
                        <StackItem stack={ stack } />
                    </li>
                ) }
            </ul>
        );
    }
}

export default StackList;
