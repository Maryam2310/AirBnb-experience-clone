
export default function Card(props) {
    let badgeText

    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.card.location === "Online") {
        badgeText = "ONLINE"
    }


    return (

        <div className="card">

            {badgeText && <div className="badge">{badgeText} </div>}
            <img src={`./images/${props.card.coverImg}`} alt="katie-zeferas" className="card-image" />

            <div className="card-stats">
                <img src={`./images/star.png`} alt="star" className="star-image" />

                <span>{props.card.stats.rating}</span>
                <span className="gray">({props.card.stats.reviewCount}) .</span>
                <span className="gray">{props.card.location}</span>
            </div>
            <p className="title">{props.card.title}</p>
            <p className="price"><span className="bold">From ${props.card.price}</span> / person</p>
        </div>
    )
}