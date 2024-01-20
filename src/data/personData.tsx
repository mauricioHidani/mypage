import { DiJava } from "react-icons/di";
import { BiLogoSpringBoot, BiLogoLinkedin, BiLogoGmail } from "react-icons/bi";

export const data = {
    fullname: "Mauricio Mityo Hidani", 
    snapshot: "Desenvolvedor Backend apaixonado por Java e com formação acadêmica em Análise e Desenvolvimento de Sistemas pela Universidade Paulista. Meu entusiasmo pela programação me levou a estudar de forma autodidata, e estou ansioso para aplicar meus conhecimentos em projetos desafiadores.", 
    github: "https://github.com/mauricioHidani/", 
    stack: "Backend", 
    stacks: [
        {
            id: "84714012-afa8-4090-988c-50ca3e481a51", 
            title: "Java", 
            path: "https://www.java.com/pt-BR/",
            icon: (<DiJava size={32} className="" />)
        }, 
        {
            id: "",
            title: "spring",
            path: "", 
            icon: (<BiLogoSpringBoot size={32} className="" />)
        }
    ], 
    contacts: [
        {
            id: "77a3b9b2-f1f0-427f-8f32-72bdfba49fae", 
            title: "linkedin", 
            path: "https://www.linkedin.com/in/mauricio-hidani/", 
            icon: (<BiLogoLinkedin size={24} className="" />)
        }, 
        {
            id: "", 
            title: "gmail",
            path: "mailto:mauricio.hidani.work@gmail.com",
            icon: (<BiLogoGmail size={24} className="" />) 
        }
    ],
    path: "/about"
};