import { FaGithub, FaJava, FaLinkedin } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSpring, SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { AWSIcon } from "../Assets/Icons/AWSIcon";
import { KafkaIcon } from "../Assets/Icons/KafkaIcon";

const PersonData = {
  occupation: "Desenvolvedor Backend",
  fullname: "Mauricio Mityo Hidani",
  snapshot: "Desenvolvedor Backend apaixonado por Java e com formação acadêmica " + 
            "em Análise e Desenvolvimento de Sistemas pela Universidade " + 
            "Paulista. Meu entusiasmo pela programação me levou a estudar de " + 
            "forma autodidata, e estou ansioso para aplicar meus conhecimentos " + 
            "em projetos desafiadores.",
  portfolio: {
    title: "github",
    description: "Github",
    url: "https://github.com/mauricioHidani",
    iconSVG: <FaGithub className="icon" />,
  },
  stacks: [
    {
      id: "13e8077d-9fe4-40d4-b7b6-d8b82f2aeef4",
      title: "java",
      description: "Java",
      url: "https://www.java.com/pt-BR/",
      iconSVG: <FaJava className="icon" />,
    },
    {
      id: "7bbeac45-f3bd-4093-a867-54f74bc39072",
      title: "spring boot",
      description: "Spring",
      url: "https://spring.io/projects/spring-boot",
      iconSVG: <SiSpring className="icon" />,
    },
    {
      id: "ed426862-3652-45f3-af78-ddb5a8ba7f1d",
      title: "postgres",
      description: "Postgres",
      url: "https://www.postgresql.org/",
      iconSVG: <BiLogoPostgresql className="icon" />,
    },
    {
      id: "6000c15d-d0a5-437a-91c9-e827d4ed7445",
      title: "aws",
      description: "Amazon",
      url: "https://aws.amazon.com/",
      iconSVG: <AWSIcon className="icon" />,
    },
    {
      id: "22ae2b8c-17ee-4754-a90b-2455a955f6a0",
      title: "Apache Kafka",
      description: "Kafka",
      url: "https://kafka.apache.org/",
      iconSVG: <KafkaIcon className="icon" />,
    }
  ],
  contacts: [
    {
      id: "3f485d2a-8f49-4127-a55b-735d3cef1c49",
      title: "linkedin",
      description: "Linkedin",
      url: "https://www.linkedin.com/in/mauricio-hidani/",
      iconSVG: <FaLinkedin className="icon" />,
    },
    {
      id: "2f0dcae9-d10f-45e3-b7d6-82db4e0e7f80",
      title: "gmail",
      description: "Gmail",
      url: "mailto:mauricio.hidani.work@gmail.com",
      iconSVG: <SiGmail className="icon" />,
    },
    {
      id: "25698bc9-89d6-41c3-b5ad-22bdfc737aa3",
      title: "whatsapp",
      description: "Whatsapp",
      url: "https://wa.me/5511987809205",
      iconSVG: <IoLogoWhatsapp className="icon" />,
    },
  ]
};

export default PersonData;
