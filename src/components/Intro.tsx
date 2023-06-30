interface Props {
  img1: string;
  img2: string;
  title: string;
  description1: string;
  description2: string;
  button: string;
  lr: boolean;
  link: string;
}

const Intro = (props: Props) => {
  return (
    <section id="about" className="home-intro">
      {props.lr ? (
        <div className="intro-container">
          <div className="intro-text">
            <h2 className="intro-heading">{props.title}</h2>
            <p className="intro-description">{props.description1}</p>
            <p className="intro-description">{props.description2}</p>
            <a className="offset" href={props.link}>
              {props.button}
            </a>
          </div>
          <div className="intro-img">
            <img src={props.img1} alt="Intro image" />
            <img src={props.img2} alt="Intro image" />
          </div>
        </div>
      ) : (
        <div className="intro-container">
          <div className="intro-img">
            <img src={props.img1} alt="Intro image" />
            <img src={props.img2} alt="Intro image" />
          </div>
          <div className="intro-text">
            <h2 className="intro-heading">{props.title}</h2>
            <p className="intro-description">{props.description1}</p>
            <p className="intro-description">{props.description2}</p>
            <a className="offset" href={props.link}>
              {props.button}
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Intro;
