function Card({ titulo, sub, texto }) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{sub}</h6>
                <p className="card-text">{texto}</p>
            </div>
        </div>
    );
}

export default Card;