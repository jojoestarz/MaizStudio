import './Map-Card.css';

function Card({ img ,description }) {

  return (
    <div className="card" style={{ backgroundImage: `url(${img})` }}>
      <div className="overlay"></div>

      <div className="content"><h2>{description}</h2></div>
      </div>
    
  );
}

export default Card;