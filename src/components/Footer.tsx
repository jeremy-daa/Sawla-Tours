import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsCaretRight,
} from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-column">
        <div className="footer-logo">
          <Link to="/">
            <img src={Logo} alt="SawlaTours Logo" />
          </Link>
        </div>
        <div className="footer-contact">
          <h1 className="contact-us">
            <Link to={"/contact"}>Contact Us</Link>
          </h1>
          <ul>
            <li>
              <Link to="tel:+251911111111">+251 911 111 111</Link>
            </li>
            <li>
              <a href="mailto:sawlayours@gmail.com">Mail Us</a>
            </li>
            <li>
              <a href="https://goo.gl/maps/6Y5Z9Z7Z7Z7Z7Z7Z7">
                Addis Ababa, Ethiopia
              </a>
            </li>
          </ul>

          <h2 className="contact-us">Office Hours</h2>
          <ul>
            <li>
              <a href="/">Monday - Friday</a>
            </li>
            <li>
              <a href="/">8:00 AM - 5:00 PM</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-column">
        <div className="footer-links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <NavLink to="/">
                <BsCaretRight />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/ethiopia">
                <BsCaretRight />
                Ethiopia Tours
              </NavLink>
            </li>
            <li>
              <NavLink to="/destinations">
                <BsCaretRight />
                Ethiopia Destinations
              </NavLink>
            </li>
            <li>
              <NavLink to="/popular">
                <BsCaretRight />
                Popular Ethiopia Tours
              </NavLink>
            </li>
            <li>
              <NavLink to="/experiences">
                <BsCaretRight />
                Ethiopia Tours By Experiences
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us">
                <BsCaretRight />
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <BsCaretRight />
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-column">
        <div className="footer-social">
          <h2>Follow Us</h2>
          <ul>
            <li>
              <a href="https://www.facebook.com/sawlatours">
                <BsFacebook /> <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/sawlatours">
                <BsInstagram /> <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/sawlatours">
                <BsTwitter /> <span>Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/sawlatours">
                <BsYoutube /> <span>YouTube</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
