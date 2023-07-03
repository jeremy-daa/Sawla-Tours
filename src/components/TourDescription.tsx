interface Props {
  title: string;
  description1: string;
  description2: string;
  image: string;
}

const TourDescription = ({
  title,
  description1,
  description2,
  image,
}: Props) => {
  return (
    <div className="tour-description-wrapper">
      <img src={image} alt={title} className="tour-description-image" />
      <div className="tour-description">
        <h1 className="tour-description-title">{title}</h1>
        <p className="tour-description-text">
          {description1}
          <br />
          <br />
          {description2}
        </p>
      </div>
    </div>
  );
};

export default TourDescription;
