"use client";

import { useEffect, useState } from "react";
import { fetchBeers } from "../../lib/api";
import style from "./page.module.css";

type Beer = {
    name: string;
    image_url: string;
    description: string;
    first_brewed: string;
    food_pairing: Array<String>;
    brewers_tips: string;
};

export default function BeerItem({ params }: { params: { beerId: string } }) {
    const [beer, setBeer] = useState<Beer | null>(null);
    const id = params.beerId;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchBeers();
                const selectedBeer = data.find(
                    (beer: any) => beer.id === Number(id)
                );
                setBeer(selectedBeer);
            } catch (error) {
                console.error(error);
            }
        };

        if (id) {
            fetchData();
        }
    }, [id]);

    if (!beer) {
        return <main>Loading...</main>;
    }

    return (
        <main>
            <div className={style["beer-item"]}>
                <div className={style["img-wrapper"]}>
                    <img src={beer.image_url} alt={beer.name} />
                </div>
                <div className={style.info}>
                    <div className={style.title}>
                        <h2>{beer.name}</h2>
                    </div>
                    <div className={style.description}>
                        <p>{beer.description}</p>
                    </div>
                    <div className={style.brewed}>
                        <span>First Brewed: </span>
                        <p>{beer.first_brewed}</p>
                    </div>
                    <div className={style.pairing}>
                        <span>Food Pairing: </span>
                        <p>{beer.food_pairing.join(",")}</p>
                    </div>
                    <div className={style.tips}>
                        <span>Brewer&apos;s Tips:</span>
                        <p>{beer.brewers_tips}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
