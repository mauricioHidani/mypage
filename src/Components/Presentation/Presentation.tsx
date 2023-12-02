import React, { Component } from "react";
import { 
  PersonPresentation, 
  Occupation, 
  Fullname, 
  PortfolioRepository, 
  Stacks, 
  Item, 
  HeaderPresentation, 
  ItemLink, 
  Snapshot, 
  MoreLink,
  Contacts,
  SimpleHeader
} from "./PresentationStyle";

import PersonData from "../../Datas/Person";

import { FaGithub, FaJava } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSpring } from "react-icons/si";

interface Props {
  
}

class Presentation extends Component<Props> {
  render() {
    return (
      <PersonPresentation>
        <HeaderPresentation>
          <Occupation>Desenvolvedor Backend</Occupation>
          <Stacks>
            {PersonData.stacks.map(stack => <Item>
              <ItemLink iconSize={34} showTitle={true} title={stack.title}>
                {stack.iconSVG}
                <p>{stack.description}</p>
              </ItemLink>
            </Item>)}
          </Stacks>
          <Fullname>Mauricio Mityo Hidani</Fullname>
          <PortfolioRepository href="https://github.com/mauricioHidani" title="github" iconSize={22} target="_blank"><FaGithub className="icon" />Github</PortfolioRepository>
        </HeaderPresentation>
        <Snapshot textColor="#bbdae4">{PersonData.snapshot}</Snapshot>
        <MoreLink>more</MoreLink>
        
        <Contacts>
          <SimpleHeader>Contatos</SimpleHeader>
          {PersonData.contacts.map(contact => <Item>
            <ItemLink iconSize={34} showTitle={true} title={contact.title}>
              {contact.iconSVG}
              <p>{contact.description}</p>
            </ItemLink>
          </Item>)}
        </Contacts>
      </PersonPresentation>
    );
  }
}

export default Presentation;
