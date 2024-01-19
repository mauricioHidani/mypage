import Image from 'next/image';

import Presentation from '@/app/components/presentation';
import CardPresentation from './components/cardPresentation';
import CardList from './components/cardList';

export default function Home() {
    return (
        <main>
            <section>
                <Presentation />
                <CardPresentation 
                    title="Projeto Principal" 
                    content="Lorem ipsum, dolor sit amet consectetur 
                            adipisicing elit. Incidunt, culpa eum maiores 
                            quisquam ab ipsa eos reprehenderit! Illum, ea 
                            sit adipisci animi delectus, inventore fugit 
                            reprehenderit itaque, quisquam fuga beatae." 
                    path="https://github.com" 
                    imageUrl="/landspace.jpg" 
                    stacks={[
                        {
                            id: "32414f60-0e06-44af-a919-9245c116323f",
                            title: "java",
                            path: "https://java.com", 
                            icon: (<></>)
                        }
                    ]}
                />
                <CardList />
            </section>
        </main>
    )
}
