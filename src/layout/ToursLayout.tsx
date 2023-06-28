import { Outlet } from "react-router-dom";
const ToursLayout = () => {
  return (
    <div className="tours">
      <Outlet />
    </div>
  );
};

export default ToursLayout;
