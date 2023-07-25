interface Props {
  title: string;
  description?: string[];
  itineraries?: {
    title: string;
    description: string[];
    image: string;
  }[];
}
const TrekkingDescription = ({ title, itineraries }: Props) => {
  return (
    <div className="trekking-container">
      <h1>{title}</h1>
      {itineraries?.map((itinerary, index) => (
        <div key={index}>
          {itinerary.title && <h2>{itinerary.title}</h2>}
          {itinerary.description?.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
          <img src={itinerary.image} alt={itinerary.title} />
        </div>
      ))}
    </div>
  );
};

export default TrekkingDescription;
