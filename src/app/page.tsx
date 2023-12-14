"use client";

import { useEffect, useState } from "react";
import { fetchBeers } from "./lib/api";
import BeerCard from "./components/BeerCard";
import "./styles/home.css";

export default function Home() {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchBeers();
                const sortedData = data.toSorted((a: any, b: any) => {
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
                    <BeerCard
                        key={Math.random() * 100}
                        id={5}
                        name={"Surprise"}
                        image={
                            "https://cdn.pixabay.com/photo/2016/03/08/07/08/question-1243504_1280.png"
                        }
                        abv={"**"}
                        tagline={"Do you want to try something new?"}
                    />
                </div>
            </main>
        </>
    );
}
