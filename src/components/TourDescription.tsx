import { BsInfoCircle } from "react-icons/bs";

interface Props {
  title?: string;
  description: string[];
  image: string;
}

const TourDescription = ({ title, description, image }: Props) => {
  return (
    <div className="tour-description-wrapper">
      <img src={image} alt={title} className="tour-description-image" />
      <div className="tour-description">
        <h1 className="tour-description-title">
          <BsInfoCircle /> {title}
        </h1>
        <p className="tour-description-text">
          {description.map((paragraph, index) => (
            <span key={index}>
              {paragraph}
              <br />
              <br />
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default TourDescription;
