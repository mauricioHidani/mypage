import Image from "next/image";
import ContentGrid3 from "./contentGrid3";
import CircularLink from "./circularLink";
import SmallItemByRight from "./smallItemByRight";

import { CgDetailsMore } from "react-icons/cg";

export default function ProjectList(
    {
        items
    }:
    {
        items: Array<{
            id: string,
            title: string,
            snapshotContent: string,
            imageUrl: string,
            path: string
        }>
    }
) {
    return(
        <ContentGrid3>
            { items.map(
                item => 
                    <div
                        key={ item.id }
                        className="
                            p-5
                            text-color-2th
                            bg-color-1th
                        "
                    >
                        <h1
                            className="
                                text-lg
                                text-bold
                                uppercase
                                py-2
                            "
                        >
                            <span>{ item.title }</span>
                        </h1>
                        <Image 
                            alt="Imagem do projeto"
                            width={ 256 }
                            height={64}
                            style={{ width: '100%', height: 'auto' }}
                            src={ item.imageUrl } 
                        />
                        <p
                            className="
                                text-justify
                            "
                        >
                            { item.snapshotContent }
                        </p>
                        <SmallItemByRight
                            mobMarginX="4"
                            dekMarginX="4"
                            yMargin="3"
                        >
                            <CircularLink
                                path={ item.path }
                                title="Mais sobre o projeto"
                                target="_blank"
                                size="12"
                            >
                                <span><CgDetailsMore size={24} /></span>
                            </CircularLink>
                        </SmallItemByRight>
                    </div>
                ) 
            }
        </ContentGrid3>
    );
}
