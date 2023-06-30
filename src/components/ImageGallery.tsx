import { TopEthiopiaTourPackagesArray } from "../Data/PackagesArray";
import crop from "../functions/cropString";
const ImageGallery = () => {
  const cropString = crop;
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Our Top Ethiopia Tour Packages</h2>
      <div className="ctr-accordion">
        {TopEthiopiaTourPackagesArray.map((item, index) => {
          return (
            <div className="tab" key={index}>
              <img src={item.image} />
              <p className="sudo-description">{item.title}</p>
              <p className="description">
                {item.title}
                <br />
                <span>{cropString(item.description, 300)}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
