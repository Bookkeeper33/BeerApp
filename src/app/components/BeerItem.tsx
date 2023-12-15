export default function BeerItem({
    name,
    image_url,
    description,
    first_brewed,
    food_pairing,
    brewers_tips,
}: Beer) {
    return (
        <div className="beer-item">
            <div className="wrapper">
                <img src={image_url} alt={name} />
            </div>
            <div className="info">
                <div className="title">
                    <h2>{name}</h2>
                </div>
                <div className="description">
                    <p>{description}</p>
                </div>
                <div className="brewed">
                    <span>First Brewed: </span>
                    <p>{first_brewed}</p>
                </div>
                <div className="pairing">
                    <span>Food Pairing: </span>
                    <p>{food_pairing.join(",")}</p>
                </div>
                <div className="tips">
                    <span>Brewer&apos;s Tips:</span>
                    <p>{brewers_tips}</p>
                </div>
            </div>
        </div>
    );
}
