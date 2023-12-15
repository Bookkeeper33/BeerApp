import Icon from "@mdi/react";
import { mdiChevronRight } from "@mdi/js";
import { Card } from "../card.type";

export default function SkeletonCard({
    id,
    name,
    image,
    abv,
    tagline,
    btnText,
    handler,
}: Card) {
    return (
        <div className="beer-container" id={`${id}`}>
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
                <button className="btn-read" onClick={handler}>
                    {btnText}
                    <Icon path={mdiChevronRight} size={1} />
                </button>
            </div>
        </div>
    );
}
