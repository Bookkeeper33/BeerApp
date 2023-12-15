"use client";

import { useEffect, useState } from "react";
import { fetchRandomBeer } from "../../lib/api";
import BeerItem from "@/app/components/BeerItem";
import Loading from "@/app/loading";

export default function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState<Beer | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchRandomBeer();
                const beer = data[0];

                setRandomBeer(beer);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    if (!randomBeer) {
        return <Loading />;
    }

    return (
        <main>
            <BeerItem {...randomBeer} />
        </main>
    );
}
