import { Link } from "react-router-dom";

interface Props {
  className?: string;
  image: string;
  title: string;
  description: string;
  link: string;
  days?: number;
}

const Card = (props: Props) => {
  return (
    <div className={`card ${props.className}`}>
      <div className="card-img">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.description}</p>
        <div className="card-bottom">
          <span className="card-days">{props.days} Days</span>
          <Link className="card-link offset" to={props.link}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
