interface Props {
  background: string;
  index: boolean;
  title: string;
  description?: string;
  link?: string;
}

const Hero = ({ background, index, title, description, link }: Props) => {
  const style = {
    background: `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.45)
    ),url("${background}") no-repeat fixed center center / cover`,
  };
  return (
    <div className="hero-wrap" style={style}>
      {index ? (
        <div className="home-hero">
          <h2 className="subheading">Welcome to Sawla Tours</h2>
          <h1 className="heading">Unveiling the Essence of Ethiopia</h1>
          <h3 className="heading-description">
            Creating memories that will last a lifetime
          </h3>
          {link ? (
            <a className="offset" href="#about">
              Explore
            </a>
          ) : null}
        </div>
      ) : (
        <div className="other-hero">
          <h1 className="heading">{title}</h1>
          <h3 className="heading-description">{description}</h3>
          <a className="offset" href={link}>
            Start Planning
          </a>
        </div>
      )}
    </div>
  );
};

export default Hero;
