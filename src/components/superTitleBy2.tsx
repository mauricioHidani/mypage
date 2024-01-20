
export default function SuperTitleBy2(
    {
        firstPart,
        secondPart
    }: 
    {
        firstPart: string,
        secondPart: string
    }
) {
    const titleStyle = `
        flex 
        flex-col md:flex-row 
        md:gap-6 
        text-2xl md:text-5xl 
        tracking-wide md:tracking-widest 
        uppercase 
        font-bold
    `;

    return(
        <h1 className={titleStyle}>
            <span>{firstPart}</span>
            <span>{secondPart}</span>
        </h1>
    );
}
