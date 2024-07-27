
const createCard = (props) => {
    return (
        <div className="movie">
        <div>
            <p>{props.year}</p>
        </div>
        <div>
            <img
            src={props.imgUrl!=="N/A" ? props.imgUrl : "http://via.placeholder.com/400"}
            alt={props.name}
            />
        </div>
        <div>
            <span>{props.type}</span>
            <h3>{props.name}</h3>
        </div>
    </div>
    );
}

export default createCard;