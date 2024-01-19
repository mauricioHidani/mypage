import Link from "next/link";
import { Component } from "react";

type Props = {
    contact: {
        id: string,
        title: string,
        path: string
    }
};

class ContactItem extends Component<Props> {
    render() {
        const { contact } = this.props;

        return(
            <Link href={ contact.path } className="text-xl md:text-lg text-purple-300 hover:text-purple-500 active:text-purple-500">
                <span>{ contact.title }</span>
            </Link>
        );
    }
}

export default ContactItem;
