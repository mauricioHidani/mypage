"use client"

import { Component } from "react";
import ContactItem from "./contactItem";

type Props = {
    contacts: Array<{
        id: string,
        title: string,
        path: string
    }>
};

class ContactList extends Component<Props> {
    render() {
        const { contacts } = this.props;

        return(
            <ul className="my-4 flex flex-col md:flex-row items-start mg:items-center gap-3 md:gap-2 text-slate-400">
                { contacts.map(contact => <li key={ contact.id }>
                    <ContactItem contact={ contact } />
                </li>
                ) }
            </ul>
        );
    }
}

export default ContactList;
