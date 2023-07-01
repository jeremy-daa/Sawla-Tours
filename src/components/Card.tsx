import { Link } from "react-router-dom";
import crop from "../functions/cropString";

interface Props {
  className?: string;
  image: string;
  title: string;
  description: string;
  link: string;
  days?: number;
}

const Card = (props: Props) => {
  const cropString = crop;
  return (
    <div className={`card ${props.className}`} data-aos="fade-up">
      <div className="card-img">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{cropString(props.description, 300)}</p>
        <div className="card-bottom">
          {props.days ? (
            <span className="card-days">{props.days} Days</span>
          ) : null}
          <Link className="card-link offset" to={props.link}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
