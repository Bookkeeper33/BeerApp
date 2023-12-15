"use client";

import { useEffect, useState } from "react";
import { fetchBeers } from "./lib/api";

import BeerCard from "./components/BeerCard";
import SurpriseCard from "./components/SurpriseCard";

import "./styles/home.css";

export default function Home() {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchBeers();
                const sortedData = data
                    .slice(0, 23)
                    .toSorted((a: any, b: any) => {
                        return a.abv - b.abv;
                    });

                setBeers(sortedData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <main>
                <h1 className="my-3 text-center">Beer Catalog</h1>
                <div className="beer-list">
                    {beers.map((beer: any) => (
                        <BeerCard
                            key={beer.id}
                            id={beer.id}
                            name={beer.name}
                            image={beer.image_url}
                            abv={beer.abv}
                            tagline={beer.tagline}
                        />
                    ))}
                    <SurpriseCard />
                </div>
            </main>
        </>
    );
}
