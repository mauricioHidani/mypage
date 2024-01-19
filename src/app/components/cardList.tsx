"use client";

import { Component } from "react";
import CardItem from "./cardItem";

type Props = {};

class CardList extends Component<Props> {
    render() {
        const count = [ 1, 2, 3, 4, 5, 6, 7 ];
        return(
            <div className="px-10 md:px-52 py-3 mx-auto">
                <h1 className="text-3xl uppercase pb-6">Projetos</h1>
                <div className="grid md:grid-cols-3 gap-3">
                    { count.map(num => <CardItem key={ num } number={ num } />) }
                </div>
            </div>
        );
    }
}

export default CardList;
