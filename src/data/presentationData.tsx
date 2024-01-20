import { FaCode } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";

export const data = {
    accessLinks: [
        {
            id: "bf6d5c58-b842-4269-8ebb-55c79b2f30f4",
            title: "Projeto Principal",
            path: "#main-project",
            target: "",
            icon: (<FaCode size={24} />)
        },
        {
            id: "a15f81a9-062a-4345-bccc-9a9974ab5865",
            title: "Mais",
            path: "/about",
            target: "_blank",
            icon: (<CgDetailsMore size={24} />)
        },
    ]
};
