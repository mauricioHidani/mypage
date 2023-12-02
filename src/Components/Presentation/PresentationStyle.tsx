import styled from "styled-components";

export const PersonPresentation = styled.div<{
}>`
  margin: 0;
  padding: 5em 10em;
  /* background: linear-gradient(96deg, #9a4bac 0%, #9a4bac 60%, #17f988 100%); */
  background: #333;
  
  @media (max-width: 768px) {
    padding: 2em;
  }
`;

export const HeaderPresentation = styled.div<{ 
}>`
  display: grid;
  grid-template-areas: "occupation occupation"
                       "fullname stacks"
                       "portfolio-repository stacks";
  grid-template-columns: 300px 1fr;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Occupation = styled.h1<{ 
  normalColor?:string, 
  shadowColor?:string, 
  align?:string, 
  transform?:string 
}>`
  grid-area: occupation;
  letter-spacing: .32rem;
  text-transform: ${props => props.transform || "uppercase"};
  text-align: ${props => props.align || "left"};
  font-weight: 700;
  font-size: ${props => props.theme.occupationSize || "2rem"};
  color: ${props => props.normalColor || "#d3d3d3"};

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const Fullname = styled.h3<{
  textColor?:string,
}>`
  grid-area: fullname;
  font-size: 1rem;
  letter-spacing: .12rem;
  text-transform: uppercase;
  color: ${props => props.textColor || props.theme.colors.textLight};

  @media (max-width: 768px) {
    padding-top: 1em;
    text-align: center;
  }
`;

export const PortfolioRepository = styled.a<{ 
  normalColor?:string, 
  hoverColor?:string, 
  iconSize?:number 
}>`
  grid-area: portfolio-repository;
  padding-top: .25em;
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .32rem;
  font-size: ${props => props.theme.stdFontSize || "12pt"};
  color: ${props => props.normalColor || "#8ADAB2"};

  &:hover { 
    color: ${props => props.hoverColor || "#D0F288"}; 
  }
  & > .icon { 
    font-size: ${props => props.iconSize + "px" || "24px" }; 
  }

  @media (max-width: 768px) { 
    margin: 0 auto; 
  }
`;

export const Stacks = styled.ul<{ 
}>`
  grid-area: stacks;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 1em;

  @media (max-width: 768px) {
    padding-top: .12em;
    justify-content: center;
    gap: 1.5em;
  }
`;

export const Item = styled.li<{
}>`
`;

export const ItemLink = styled.a<{ 
  showTitle?:boolean, 
  iconSize?:number, 
  iconColor?:string, 
  iconHoverColor?:string 
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover { 
    cursor: pointer; 
  }
  & > .icon { 
    width: ${props => props.iconSize+"px" || "32px"};
    height: ${props => props.iconSize+"px" || "32px"};
    font-size: ${props => props.iconSize+"px" || "32px"}; 
    color: ${props => props.iconColor || props.theme.colors.link};
    fill: ${props => props.iconColor || props.theme.colors.link};
    transition: .2s ease-out;
  }
  &:hover > .icon {
    color: ${props => props.iconColor || props.theme.colors.link};
    fill: ${props => props.iconColor || props.theme.colors.linkHover};
  }
  & > p {
    display: ${props => props.showTitle ? "block" : "none"};
  }

  @media (max-width: 768px) {
    & > .icon {
      width: 24px;
      height: 24px;
      font-size: 24px;
    }
    & > p {
      display: ${props => props.showTitle ? "block" : "none"};
    }
  }
`;

export const Snapshot = styled.p<{
  textColor?:string,
}>`
  padding-top: 2em;
  text-align: justify;
  line-height: 1.5em;
  color: ${props => props.textColor || props.theme.colors.textLight};
`;

export const MoreLink = styled.a<{
  normalColor?:string,
  hoverColor?:string
}>`
  color: ${props => props.normalColor || props.theme.colors.link};
  &:hover {
    cursor: pointer;
    color: ${props => props.hoverColor || props.theme.colors.linkHover};
  }
`;

export const Contacts = styled.ul<{
}>`
  padding: 2em 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1.5em;
`;

export const SimpleHeader = styled.h2<{
}>`
  letter-spacing: .22rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.link}
`;
