
import DiscountNavbarFullDark from "@/components/discountNavbarFullDark";
import Presentation from "@/components/presentation";
import ContentFull from "@/components/projectFull";
import Image from "next/image";

import { data as person } from "@/data/personData";

export default function Home() {
    return (
        <main>
            <section>
                <Presentation person={ person } />
                <ContentFull 
                    title="Projeto Principal"
                    path="/project"
                    target="_blank"
                    stacks={person.stacks}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae totam praesentium cum, non unde illo ea enim numquam laborum et necessitatibus. Magnam minus placeat maiores, non dolorem cumque commodi impedit!
                </ContentFull>
                section
            </section>
        </main>
    )
}
