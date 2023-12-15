"use client";

import { useRouter } from "next/navigation";
import SkeletonCard from "./SkeletonCard";

export default function BeerCard({
    id,
    name,
    image,
    abv,
    tagline,
}: {
    id: number;
    name: string;
    image: string;
    abv: string;
    tagline: string;
}) {
    const router = useRouter();

    const handleReadMore = (id: Number) => {
        router.push(`/beer/${id}`);
    };

    return (
        <SkeletonCard
            id={id}
            name={name}
            image={image}
            abv={abv}
            tagline={tagline}
            btnText={"Read more"}
            handler={() => handleReadMore(id)}
        />
    );
}
