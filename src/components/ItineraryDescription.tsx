import { BsInfoCircle } from "react-icons/bs";

interface Props {
  title: string;
  description?: string[];
  itineraries?: {
    title: string;
    description: string[];
    image: string;
  }[];
}

const ItineraryDescription = ({ title, description, itineraries }: Props) => {
  return (
    <div className="itinerary-wrapper">
      <h1 className="itinerary-heading">
        <BsInfoCircle />
        {title}
      </h1>
      {description && (
        <div className="itinerary-description">
          {description &&
            description.map((item, key) => <p key={key}>{item}</p>)}
        </div>
      )}
      {itineraries && (
        <div className="itinerary-list">
          {itineraries.map((item) => {
            return (
              <div className="itinerary-item">
                <div className="itinerary-image-container">
                  <img src={item.image} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <ul>
                    {item.description.map((item) => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ItineraryDescription;
