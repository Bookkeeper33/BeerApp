"use client";

import { useRouter } from "next/navigation";
import SkeletonCard from "./SkeletonCard";

export default function SurpriseCard() {
    const router = useRouter();
    const handleRandom = () => {
        router.push(`/beer/random`);
    };

    return (
        <SkeletonCard
            key={Math.random() * 100}
            id={0}
            name={"Surprise"}
            btnText={"Surprise me"}
            image={
                "https://cdn.pixabay.com/photo/2016/03/08/07/08/question-1243504_1280.png"
            }
            abv={"**"}
            tagline={"Do you want to try something new?"}
            handler={handleRandom}
        />
    );
}
