"use client";

import { useEffect, useState } from "react";
import { fetchBeers } from "../../lib/api";
import BeerItem from "@/app/components/BeerItem";
import Loading from "@/app/loading";

export default function Beer({ params }: { params: { beerId: string } }) {
    const [beer, setBeer] = useState<Beer | null>(null);
    const id = params.beerId;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchBeers();
                const selectedBeer = data.find(
                    (beer: { id: number }) => beer.id === Number(id)
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
        return <Loading />;
    }

    return (
        <main>
            <BeerItem {...beer} />
        </main>
    );
}
