import { BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import Lalibela1 from "../assets/lalibela_1.jpg";

interface Props {
  title: string;
  packages: Package[];
}

interface Package {
  title: string;
  description: string;
  link: string;
  image: string;
}

const PackagesList = (props: Props) => {
  function cropString(input: string, limit: number) {
    if (input.length <= limit) {
      return input;
    } else {
      let cropped = input.substring(0, limit);
      const lastSpaceIndex = cropped.lastIndexOf(" ");
      if (lastSpaceIndex !== -1) {
        cropped = cropped.substring(0, lastSpaceIndex);
      }
      return cropped + "...";
    }
  }
  return (
    <div className="package-list-container">
      <h1 className="title">
        <BsInfoCircle />
        <span>{props.title}</span>
      </h1>
      <div className="packages">
        {/* Map the pacages from props */}
        {props.packages.map((packageItem, index) => {
          return (
            <div className="package" key={index}>
              <h2 className="package-title">{packageItem.title}</h2>
              <div className="package-content">
                <div className="package-img">
                  <img src={packageItem.image} alt="Package" />
                </div>
                <p className="package-description">
                  {cropString(packageItem.description, 200)}
                </p>
                <Link className="package-link offset" to={packageItem.link}>
                  Learn More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PackagesList;
