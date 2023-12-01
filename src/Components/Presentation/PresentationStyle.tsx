import styled from "styled-components";

export const PresentationSec = styled.div`
  margin: 0;
  padding: 5em 10em;
  background: linear-gradient(96deg, #9a4bac 0%, #9a4bac 60%, #17f988 100%);
`;

export const HeaderPresentation = styled.div`
  display: grid;
  grid-template-areas: "occupation occupation"
                       "fullname stacks"
                       "portfolio-repository stacks";
  grid-template-columns: 300px 1fr;
`;

export const Occupation = styled.h1<{ normalColor?:string, shadowColor?:string, align?:string, transform?:string }>`
  grid-area: occupation;
  letter-spacing: .32rem;
  text-transform: ${props => props.transform || "uppercase"};
  text-align: ${props => props.align || "left"};
  font-weight: 700;
  font-size: ${props => props.theme.occupationSize || "2rem"};
  color: ${props => props.normalColor || "#d3d3d3"};
`;

export const Fullname = styled.h3<{
  textColor?:string,
}>`
  grid-area: fullname;
  font-size: 1rem;
  letter-spacing: .12rem;
  text-transform: uppercase;
  color: ${props => props.textColor || props.theme.colors.textLight};
`;

export const PortfolioRepository = styled.a<{ normalColor?:string, hoverColor?:string, iconSize?:number }>`
  grid-area: portfolio-repository;
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: .32rem;
  font-size: ${props => props.theme.stdFontSize || "12pt"};
  color: ${props => props.normalColor || "#8ADAB2"};

  &:hover {
    color: ${props => props.hoverColor || "#D0F288"};
  }

  & > .icon {
    font-size: ${props => props.iconSize + "px" || "24px" };
  }
`;

export const Stacks = styled.ul`
  grid-area: stacks;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 1em;
`;

export const Stack = styled.li`
  
`;

export const StackLink = styled.a<{ 
  showTitle?:boolean, 
  iconSize?:number, 
  iconColor?:string, 
  iconHoverColor?:string 
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover { cursor: pointer; }
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

}>`
`;
