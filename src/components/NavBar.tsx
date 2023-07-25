import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import LogoDark from "../assets/logo_dark.png";
import { useEffect, useState } from "react";
import HeadRoom from "react-headroom";
import { CiMenuFries } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
import { BsFillCaretDownFill } from "react-icons/bs";
import { RiCompass3Fill } from "react-icons/ri";
import {
  EthiopiaGuideRoutes,
  EthiopiaTourPackagesRoutes,
  TopDestinationsRoutes,
  ToursByExperienceRoutes,
} from "../Data/PackagesArray";

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navChecked, setNavChecked] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const handleNavToggle = () => {
    setNavChecked(!navChecked);
  };
  const toggleNavbar = () => {
    setNavOpen(!navOpen);
  };

  const closeNavbar = () => {
    setNavChecked(true);
    setNavOpen(false);
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
        <div className="logo" data-aos="fade-right">
          {scrollPosition > 150 ? (
            <Link to={"/"} onClick={closeNavbar}>
              <img src={LogoDark} alt="Sawla Tours Logo" />
            </Link>
          ) : (
            <Link to={"/"}>
              <img src={Logo} alt="Sawla Tours Logo" />
            </Link>
          )}
        </div>
        <input
          type="checkbox"
          checked={navOpen}
          onChange={toggleNavbar}
          id="nav_check"
          hidden
        />
        <nav data-aos="fade-left">
          <div className="logo">
            <Link to={"/"}>
              <img src={Logo} alt="SawlaTours Logo" />
            </Link>
          </div>
          <ul>
            <li>
              <NavLink to="/ " onClick={closeNavbar}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="ethiopia-tours" onClick={closeNavbar}>
                Ethiopia Tours <BsFillCaretDownFill className="down-icon" />
              </NavLink>
              <ul className="submenu">
                {EthiopiaTourPackagesRoutes.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <NavLink to="top-destinations" onClick={closeNavbar}>
                Popular Destinations{" "}
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
              <NavLink to="tours-by-experience" onClick={closeNavbar}>
                Tours by Experiences{" "}
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
              <NavLink to="ethiopia-guide" onClick={closeNavbar}>
                Ethiopia Guide
                <BsFillCaretDownFill className="down-icon" />
              </NavLink>
              <ul className="submenu">
                {EthiopiaGuideRoutes.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </li>

            <li>
              <NavLink to="about-us" onClick={closeNavbar}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="contact-us" onClick={closeNavbar}>
                Contact Us
              </NavLink>
            </li>
            <li className="enquire">
              <RiCompass3Fill />
              <NavLink to="enquire" onClick={closeNavbar}>
                Start Planning
              </NavLink>
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
