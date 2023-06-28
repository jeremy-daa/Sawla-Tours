import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      404 Page Not Found
      <Link to="/">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
