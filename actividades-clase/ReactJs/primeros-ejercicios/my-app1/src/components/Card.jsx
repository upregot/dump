function Card(props) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.sub}</h6>
                <p className="card-text">{props.texto}</p>
            </div>
        </div>
    );
}

export default Card;