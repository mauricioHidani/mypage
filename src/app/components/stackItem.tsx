import Link from 'next/link';
import React, { Component, ReactElement } from 'react';

type Props = {
    stack: {
        id: string, 
        title: string, 
        path: string, 
        icon: ReactElement<any, string | React.JSXElementConstructor<any>>
    }
};

class StackItem extends Component<Props> {
    render() {
        const { stack } = this.props;

        return(
            <Link href={ stack.path  } title={ stack.title } target='_blank' className="flex flex-col items-center hover:text-purple-500">
                { stack.icon }
                <span className="text-xs md:text-sm">
                    { stack.title }
                </span>
            </Link>
        );
    }
}

export default StackItem;
