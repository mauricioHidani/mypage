import NavbarItem from "./navbarItem";

export default function NavbarList(
    {
        items
    }: {
        items: Array<{
            key: string, 
            title: string, 
            path: string, 
        }>
    }
) {
    return(
        <ul 
            className="
                flex 
                flex-col md:flex-row 
                gap-4 md:gap-6 
                text-xl md:text-sm 
                uppercase 
            "
        >
            { items.map(item => 
                <NavbarItem key={ item.key } item={ item } />
            ) }
        </ul>
    );
}
