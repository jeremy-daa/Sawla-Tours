import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import LogoDark from "../assets/logo_dark.png";
import { useEffect, useState } from "react";
import HeadRoom from "react-headroom";
import { CiMenuFries } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
import { BsFillCaretDownFill } from "react-icons/bs";

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
              <NavLink end to="/ethiopia">
                Ethiopia Tours <BsFillCaretDownFill className="down-icon" />
              </NavLink>
              <ul className="submenu">
                <li>
                  <Link to="/ethiopia/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/ethiopia/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/ethiopia/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/ethiopia/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/ethiopia/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/ethiopia/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/ethiopia/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/ethiopia/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/ethiopia/ethiopia">Ethiopia Tours</Link>
                </li>
              </ul>
            </li>
            <li>
              <NavLink end to="destinations">
                Ethiopia Destinations{" "}
                <BsFillCaretDownFill className="down-icon" />
              </NavLink>
              <ul className="submenu">
                <li>
                  <Link to="/destinations/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/destinations/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/destinations/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/destinations/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/destinations/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/destinations/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/destinations/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/destinations/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/destinations/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/destinations/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/destinations/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/destinations/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/destinations/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/destinations/ethiopia">Ethiopia Tours</Link>
                </li>
              </ul>
            </li>
            <li>
              <NavLink end to="popular">
                Popular Ethiopia Tours{" "}
                <BsFillCaretDownFill className="down-icon" />
              </NavLink>
              <ul className="submenu">
                <li>
                  <Link to="/popular/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/popular/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/popular/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/popular/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/popular/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/popular/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/popular/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/popular/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/popular/ethiopia">Ethiopia Tours</Link>
                </li>
                <li>
                  <Link to="/popular/ethiopia">Ethiopia Tours</Link>
                </li>
              </ul>
            </li>
            <li>
              <NavLink end to="experiences">
                Ethiopia Tours by Experiences
              </NavLink>
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
