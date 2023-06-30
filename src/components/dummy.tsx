import Img from "react-optimized-image";
import Header from "./images/header.jpg";

const dummy = () => (
  <div>
    {/* with import statement ..*/}
    <Img src={Header} />

    {/* ..or an inline require */}
    <Img src={require("./images/my-small-image.png")} />
  </div>
);

export default dummy;
