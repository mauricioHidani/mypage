"use client";

import { Component } from 'react';

type Props = {
    footerData: {
        created: string, 
        local: string, 
        version: string, 
        author: string
    }
};

class Footer extends Component<Props> {
    render() {
        const { footerData } = this.props;

        return(
            <div className="md:px-52 py-5 bg-1th-color text-xs text-2th-color">
                <div className="flex items-center justify-center">
                    <div className="after:content-['_-']">
                        <span>{ footerData.created }</span>
                    </div> 
                    <div className="after:content-['_version']">
                        <span>&nbsp;{ footerData.version }</span>
                    </div>
                </div>
                <div className="text-center text-gray-500">
                    <span>{ footerData.local }</span>
                </div>
                <div className="flex items-center justify-center before:content-['created_by'] before:font-bold text-gray-400 before:text-xs text-xs">
                    <span>&nbsp;{ footerData.author }</span>
                </div>
            </div>
        );
    }
}

export default Footer;
