import Link from "next/link";
import StackList from "./stackList";

import { BiLogoJava, BiLogoSpringBoot } from "react-icons/bi";
import ContactList from "./contactList";

const styleIcon = "text-3xl lg:text-5xl text-slate-100 hover:text-purple-500";

const person = {
    fullname: "Mauricio Mityo Hidani",
    stack: "Desenvolvedor Backend",
    snapshot: `Desenvolvedor Backend apaixonado por Java e com 
                formação acadêmica em Análise e Desenvolvimento 
                de Sistemas pela Universidade Paulista. Meu 
                entusiasmo pela programação me levou a estudar 
                de forma autodidata, e estou ansioso para 
                aplicar meus conhecimentos em projetos 
                desafiadores.`,
    stacks: [
        {
            id: "0cfac38e-6e5a-4608-bc4d-870ba249f398",
            title: "java",
            path: "https://www.java.com/pt-BR/",
            icon: (<BiLogoJava className={ styleIcon } />),
        },
        {
            id: "9d1066dd-88e1-4ee2-8ff7-106b0c3d42f2",
            title: "spring boot",
            path: "/spring-boot",
            icon: (<BiLogoSpringBoot className={ styleIcon } />),
        },
    ],
    contacts: [
        {
            id: "ed2dc8f5-94be-4517-8966-ca053b96fe64",
            title: "linkedin",
            path: "https://"
        },
        {
            id: "46390b16-9767-4c21-98fa-0d9d81a744d6",
            title: "gmail",
            path: "mailto:mauricio.hidani.work@gmail.com"
        },
        {
            id: "46390b16-9767-4c21-98fa-0d9d81a744d6",
            title: "github",
            path: "https://"
        }
    ],
};

export default function Presentation() {
	return (
        <div className="bg-1th-color h-auto md:h-[calc(100vh-4rem)] px-10 lg:px-52 py-10 lg:py-20 flex flex-col justify-center">
            <StackList stacks={person.stacks} />
            <h1 className="text-3xl lg:text-5xl uppercase text-slate-100">
                { person.stack }
            </h1>
            <h6 className="italic uppercase text-green-500">
                { person.fullname }
            </h6>
            <p className="mt-3 text-justify text-slate-400">
                { person.snapshot }
            </p>
            <ContactList contacts={ person.contacts } />
        </div>
    );
}
