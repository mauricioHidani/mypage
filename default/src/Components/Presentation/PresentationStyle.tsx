import styled from "styled-components";

export const PresentationContent = styled.div<{
}>`
  display: grid;
  max-width: 100%;
  grid-template-areas: "occupation occupation"
                       "fullname stacks"
                       "repository stacks"
                       "snapshot snapshot"
                       "more-about more-about"
                       "contacts contacts"
                       "main-project main-project";
  grid-template-columns: .4fr 1fr;
  grid-template-rows: 3.2rem .1fr .1fr 1fr .1fr .3fr .2fr;
  background: yellow;

  @media (max-width: 768px) {
    display: block;
    overflow-wrap: break-word;
  }
`;

export const Occupation = styled.h1<{
}>`
  grid-area: occupation;
  letter-spacing: .32rem;
  text-transform: uppercase;
  text-align: left;
  font-size: 3rem;
  background: green;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

export const Fullname = styled.h3<{
}>`
  grid-area: fullname;
  font-style: italic;
  text-align: start;
  text-transform: uppercase;
  font-size: 1.22rem;
  background: red;
`;

export const Repository = styled.a<{
}>`
  grid-area: repository;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: .32em;

  & > .icon {
    width: 32px;
    height: 32px;
    font-size: 32px;
  }

  background: blue;
`;

export const Stacks = styled.ul<{
  horDirection?:string,
}>`
  grid-area: stacks;
  display: flex;
  align-items: center;
  justify-content: ${props => props.horDirection || "start"};
  list-style: none;
  background: cyan;

  & > li {
    padding-right: .54em;
  }

  @media (max-width: 768px) {
    display: block;

    column-count: 3;
    & > li {
      padding: .5em .24em;
    }
    & > li > a > p {
      display: none;
    }
  }
`;

export const Contacts = styled.div<{
  
}>`
  grid-area: contacts;
  list-style: none;
  background: red;
`;

export const ItemList = styled.li<{
  direction?:string,
  showDescription?:boolean,
  showIcon?:boolean,
  iconSize?:string,
}>`
  & > a {
    flex-direction: ${props => props.direction === "row" ? "row" : "column"};
  }

  & > a > .icon {
    display: ${props => props.showDescription ? "block" : "none"};
    width: ${props => props.iconSize !== undefined ? props.iconSize : "24px"};
    height: ${props => props.iconSize !== undefined ? props.iconSize : "24px"};
    font-size: ${props => props.iconSize !== undefined ? props.iconSize : "24px"};
  }
  & > a > p {
    display: ${props => props.showDescription ? "block" : "none"};
  }
`;

export const ItemDescription = styled.p<{
}>`
  
`;

export const ItemLink = styled.a<{
  normalColor?:string,
  hoverColor?:string,
  activeColor?:string,
}>`
  display: inline-block;
  margin: 0 auto;
  color: ${props => props.normalColor || "#333"};
  fill: ${props => props.normalColor || "#333"};

  &:hover {
    color: ${props => props.hoverColor || "#333"};
    fill: ${props => props.hoverColor || "#333"};
  }
  &:active {
    color: ${props => props.activeColor || "#333"};
    fill: ${props => props.activeColor || "#333"};
  }
`;

export const Snapshot = styled.p<{
}>`
  grid-area: snapshot;
  text-align: justify;
  background: greenyellow;
`;

export const MoreAbout = styled.a<{
}>`
  grid-area: more-about;
  background: green;
`;

export const MainProject = styled.a<{
}>`
  grid-area: main-project;
  background: blue;
`;

// export const PresentationContent = styled.div<{ 
//   isFullSize?:boolean, 
//   width?:string,
//   height?:string,
//   heightDiscount?:string,
// }>`
//   margin: 0 auto;
//   width: ${props => props.isFullSize ? "100%" : props.width};
//   height: ${props => props.isFullSize ? props.heightDiscount !== undefined ? 
//                                           "calc(100vh - "+props.heightDiscount+")" : "100vh" : 
//                                         props.heightDiscount !== undefined ? 
//                                           "calc("+props.height+"-"+props.heightDiscount+")" : props.height};
//   display: grid;
//   grid-template-areas: "contacts occupation occupation"
//                        "contacts fullname stacks"
//                        "contacts portfolio-repository stacks"
//                        "contacts snapshot snapshot"
//                        "contacts more-about more-about"
//                        ". main-project main-project";
//   grid-template-columns: 100px 250px 1fr;
//   grid-template-rows: .2fr 1rem .15 1fr .1fr .2fr;

//   @media (max-width: 768px) {
//     padding: 1em 2em;
//     width: auto;
//     height: auto;
//     display: block;
//   }
// `;

// export const ContactsList = styled.ul<{
// }>`
//   grid-area: contacts;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 1rem;

//   @media (max-width: 768px) {
//     padding-top: 1em;
//     flex-direction: row;
//     justify-content: start;
//   }
// `;

// export const StacksList = styled.ul<{
// }>`
//   grid-area: stacks;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: start;
//   gap: 1em;

//   @media (max-width: 768px) {
//     padding-top: 1em;
//   }
// `;

// export const ItemList = styled.li<{
//   showDescriptionn?:boolean,
//   descriptionSize?:string,
//   showIcon?:boolean,
//   iconSize?:string,
// }>`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

//   & > a > p {
//     display: ${props => props.showDescriptionn ? "block" : "none"};
//     font-size: ${props => props.descriptionSize || ".86rem"};
//   }
//   & > a > .icon {
//     display: ${props => props.showIcon ? "block" : "none"};
//     width: ${props => props.iconSize || "24px"};
//     height: ${props => props.iconSize || "24px"};
//   }
// `;

// export const ItemListLink = styled.a<{
//   flexDirection?:string,
//   normalColor?:string,
//   hoverColor?:string,
//   activeColor?:string,
// }>`
//   display: flex;
//   flex-direction: ${props => props.flexDirection || "column"};
//   align-items: center;
//   justify-content: center;

//   & > p {
//     color: ${props => props.normalColor};
//   }
//   &:hover > p {
//     color: ${props => props.hoverColor};
//   }
//   &:active > p {
//     color: ${props => props.activeColor};
//   }
//   & > .icon {
//     color: ${props => props.normalColor};
//     fill: ${props => props.normalColor};
//   }
//   &:hover > .icon {
//     color: ${props => props.hoverColor};
//     fill: ${props => props.hoverColor};
//   }
//   &:active > .icon {
//     color: ${props => props.activeColor};
//     fill: ${props => props.activeColor};
//   }
// `;

// export const Occupation = styled.h1<{
//   fontSize?:string
// }>`
//   grid-area: occupation;
//   letter-spacing: .32rem;
//   text-transform: uppercase;
//   font-size: ${props => props.fontSize || "3rem"};
  
//   @media (max-width: 820px) {
//     font-size: "1.5rem";
//   }
// `;

// export const Fullname = styled.p<{
//   fontSize?:string
// }>`
//   grid-area: fullname;
//   letter-spacing: .12rem;
//   text-transform: uppercase;
//   font-size: ${props => props.fontSize || "1rem"};
// `;

// export const PortifolioRepository = styled.div<{
//   showIcon?:boolean,
//   iconSize?:string,
// }>`
//   grid-area: portfolio-repository;
//   display: flex;
//   flex-direction: column;
//   align-items: start;
//   justify-content: center;

//   & > a > .icon {
//     width: ${props => props.iconSize || "24px"};
//     height: ${props => props.iconSize || "24px"};
//   }
// `;

// export const PortifolioRepositoryLink = styled.a<{
// }>`
//   width: 90px;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   gap: .32em;
// `;

// export const Snapshot = styled.p<{
//   textAlign?:string,
// }>`
//   grid-area: snapshot;
//   padding-top: 1em;
//   white-space: 1.5rem;
//   text-align: ${props => props.textAlign || "justify"};
// `;

// export const MoreAbout = styled.a<{
// }>`
//   grid-area: more-about;
// `;

// export const MainProjectLink = styled.a<{
// }>`
//   grid-area: main-project;
//   margin: 0 auto;
//   width: 300px;
//   height: 54px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: 2px solid #333;
//   border-radius: 13px;
// `;

// export const HorLine = styled.div<{
// }>`
//   position: absolute;
//   width: 100%;
//   height: 4px;
//   top: calc(50vh - 2px);
//   left: 0;
//   background: magenta;
// `;