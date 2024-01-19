import React, { Component } from "react";
import { 
  PresentationContent,
  Fullname,
  Occupation,
  Repository,
  Stacks,
  Snapshot,
  MoreAbout,
  Contacts,
  MainProject,
  ItemList,
  ItemLink,
  ItemDescription,
} from "./PresentationStyle";

import PersonData from "../../Datas/Person";

interface Props {}

class Presentation extends Component<Props> {
  render() {
    return (
      <PresentationContent>
        <Occupation>{PersonData.occupation}</Occupation>
        <Fullname>{PersonData.fullname}</Fullname>
        <Repository href={PersonData.portfolio.url} title={PersonData.portfolio.title}>
          {PersonData.portfolio.iconSVG}
          {PersonData.portfolio.description}
        </Repository>
        <Stacks>
          {PersonData.stacks.map(stack =>
            <ItemList key={stack.id} showDescription={true} showIcon={true} iconSize="34px">
                <ItemLink href={stack.url} title={stack.title} normalColor="#3322ff">
                  {stack.iconSVG}
                  <ItemDescription>{stack.description}</ItemDescription>
                </ItemLink>
            </ItemList>
          )}
        </Stacks>
        <Snapshot>{PersonData.snapshot}</Snapshot>
        <MoreAbout href={"#"}>more</MoreAbout>
        <Contacts>
          {PersonData.contacts.map(contact => 
            <ItemList key={contact.id} direction="row" showDescription={true}>
              <ItemLink href={contact.url} title={contact.title}>
                {contact.iconSVG}
                <ItemDescription>{contact.description}</ItemDescription>
              </ItemLink>
            </ItemList>
          )}
        </Contacts>
        <MainProject href="#main-project">Main Project</MainProject>
      </PresentationContent>
    );
  }
}

export default Presentation;
