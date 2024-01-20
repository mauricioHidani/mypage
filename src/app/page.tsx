
import DiscountNavbarFullDark from "@/components/discountNavbarFullDark";
import Presentation from "@/components/presentation";
import Image from "next/image";

import { data as person } from "@/data/personData";

export default function Home() {
    return (
        <main>
            <section>
                <Presentation person={ person } />
                section
            </section>
        </main>
    )
}
