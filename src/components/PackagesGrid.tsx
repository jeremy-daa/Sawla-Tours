import { useState } from "react";
import { DestinationPackagesNameArray } from "../Data/PackagesArray";
import { BsSearch } from "react-icons/bs";
import NoPackages from "./NoPackages";
const PackagesGrid = () => {
  const [packages, setPackages] = useState(DestinationPackagesNameArray);
  const [search, setSearch] = useState("");
  const [textBoxFocus, setTextBoxFocus] = useState(false);
  const handleTextBoxFocus = () => {
    setTextBoxFocus(true);
  };
  const handleTextBoxBlur = () => {
    setTextBoxFocus(false);
  };
  const filterDestinations = (search: string) => {
    const filteredDestinations = DestinationPackagesNameArray.filter((item) =>
      item.title.toLowerCase().includes(search)
    );
    setPackages(filteredDestinations);
  };
  return (
    <div className="grid-packages-container">
      <h1 className="grid-packages-title">Our Top Destinations</h1>
      <div className={`${textBoxFocus ? "focus" : ""} search-container`}>
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          placeholder="Where would you like to go?"
          className="search-box"
          onFocus={handleTextBoxFocus}
          onBlur={handleTextBoxBlur}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              filterDestinations(search.toLowerCase());
            }
          }}
        />
        <BsSearch
          className="search-icon"
          onClick={() => {
            filterDestinations(search.toLowerCase());
          }}
        />
      </div>

      {packages.length !== 0 ? (
        <div className="grid-packages">
          {packages.map((item, index) => {
            return (
              <div className="grid-package" key={index}>
                <div className="grid-image-container">
                  <img
                    src={item.image}
                    alt="package"
                    className="grid-package-img"
                  />
                </div>
                <div className="grid-package-description">
                  <h1 className="grid-package-title">{item.title}</h1>
                  <a href={item.link} className="offset grid-package-button">
                    Discover More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <NoPackages />
      )}
    </div>
  );
};

export default PackagesGrid;
