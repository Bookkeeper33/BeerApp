"use client";
import Icon from "@mdi/react";
import { mdiChevronRight } from "@mdi/js";
import { useRouter } from "next/navigation";

type Card = {
    id: Number;
    name: String;
    image: String;
    abv: String;
    tagline: String;
};

export default function BeerCard({ id, name, image, abv, tagline }: Card) {
    const router = useRouter();
    const handleReadMore = (id: Number) => {
        router.push(`/beer/${id}`);
    };

    return (
        <div className="beer-container">
            <div className="img-wrapper">
                <img src={image} alt={name} />
            </div>
            <div className="beer-info">
                <div className="beer-title">
                    <h2>{name}</h2>
                </div>
                <div className="beer-description">
                    <p>{tagline}</p>
                </div>
                <div className="beer-volume">
                    <p className="text-bold">ABV {abv}</p>
                </div>
                <button className="btn-read" onClick={() => handleReadMore(id)}>
                    {name === "Surprise" ? "Random beer" : "Read more"}
                    <Icon path={mdiChevronRight} size={1} />
                </button>
            </div>
        </div>
    );
}
