import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import LogoDark from "../assets/logo_dark.png";
import { useEffect, useState } from "react";
import HeadRoom from "react-headroom";
import { CiMenuFries } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
import { BsFillCaretDownFill } from "react-icons/bs";
import {
  EthiopiaTourPackagesArray,
  TopDestinationsRoutes,
  ToursByExperienceRoutes,
} from "../Data/PackagesArray";

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navChecked, setNavChecked] = useState(true);

  const handleNavToggle = () => {
    setNavChecked(!navChecked);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeadRoom>
      <header className={scrollPosition > 150 ? "scrolled" : "original"}>
        <div className="logo">
          {scrollPosition > 150 ? (
            <Link to={"/"}>
              <img src={LogoDark} alt="Sawla Tours Logo" />
            </Link>
          ) : (
            <Link to={"/"}>
              <img src={Logo} alt="Sawla Tours Logo" />
            </Link>
          )}
        </div>
        <input type="checkbox" id="nav_check" hidden />
        <nav>
          <div className="logo">
            <Link to={"/"}>
              <img src={Logo} alt="SawlaTours Logo" />
            </Link>
          </div>
          <ul>
            <li>
              <NavLink to="/ ">Home</NavLink>
            </li>
            <li>
              <NavLink to="ethiopia-tours">
                Ethiopia Tours <BsFillCaretDownFill className="down-icon" />
              </NavLink>
              <ul className="submenu">
                {EthiopiaTourPackagesArray.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <NavLink to="top-destinations">
                Ethiopia Top Destinations{" "}
                <BsFillCaretDownFill className="down-icon" />
              </NavLink>
              <ul className="submenu">
                {TopDestinationsRoutes.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <NavLink to="tours-by-experience">
                Ethiopia Tours by Experiences{" "}
                <BsFillCaretDownFill className="down-icon" />
              </NavLink>
              <ul className="submenu">
                {ToursByExperienceRoutes.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <NavLink to="ethiopia-guide">
                Ethiopia Guide
                <BsFillCaretDownFill className="down-icon" />
              </NavLink>
              <ul className="submenu">
                {ToursByExperienceRoutes.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </li>

            <li>
              <NavLink to="about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="testimonials">Testimonials</NavLink>
            </li>
            <li>
              <NavLink to="faq">FAQ</NavLink>
            </li>
          </ul>
        </nav>
        <label
          htmlFor="nav_check"
          className="hamburger"
          onClick={handleNavToggle}
        >
          {navChecked ? <CiMenuFries /> : <CiCircleRemove className="close" />}
        </label>
      </header>
    </HeadRoom>
  );
};

export default NavBar;
