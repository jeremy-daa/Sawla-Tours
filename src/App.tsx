import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./styles/style.css";
import "./styles/responsive.css";
import "aos/dist/aos.css";
import Home from "./routes/Home";
import Faq from "./routes/Faq";
import RootLayout from "./layout/RootLayout";
import NotFound from "./routes/NotFound";
import AboutUs from "./routes/AboutUs";
import Testimonials from "./routes/Testimonials";
import EthiopiaTours from "./routes/EthiopiaTours";
import EthiopiaDestinations from "./routes/EthiopiaDestinations";
import ToursByExperiences from "./routes/ToursByExperiences";
import EthiopiaGuide from "./routes/EthiopiaGuide";
import useAOS from "./functions/useAOS";
import ContactUS from "./routes/ContactUs";

// Ethiopia Tours Routes
import HistoricTour from "./routes/EthiopiaTours/HistoricTour";
import TribalTour from "./routes/EthiopiaTours/TribalTour";
import FestivalTour from "./routes/EthiopiaTours/FestivalTour";
import AdventureTour from "./routes/EthiopiaTours/AdventureTour";
import PhotographyTour from "./routes/EthiopiaTours/PhotographyTour";
import WildlifeTour from "./routes/EthiopiaTours/WildlifeTour";
import BirdingTour from "./routes/EthiopiaTours/BirdingTour";
import SpecialInterestTour from "./routes/EthiopiaTours/SpecialInterestTour";
import ShortTermTour from "./routes/EthiopiaTours/ShortTermTour";
import FilmingTour from "./routes/EthiopiaTours/FilmingTour";
import EthiopiaToursLayout from "./layout/EthiopiaToursLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="ethiopia-tours" element={<EthiopiaToursLayout />}>
        <Route index element={<EthiopiaTours />} />
        <Route path="historic" element={<HistoricTour />} />
        <Route path="tribal" element={<TribalTour />} />
        <Route path="festivals" element={<FestivalTour />} />
        <Route path="adventure" element={<AdventureTour />} />
        <Route path="photography" element={<PhotographyTour />} />
        <Route path="wildlife" element={<WildlifeTour />} />
        <Route path="bird-watching" element={<BirdingTour />} />
        <Route path="special-interest" element={<SpecialInterestTour />} />
        <Route path="business-trips" element={<ShortTermTour />} />
        <Route path="filming" element={<FilmingTour />} />
      </Route>
      <Route
        path="ethiopia-tours/special-interest"
        element={<SpecialInterestTour />}
      />
      <Route path="ethiopia-tours/short-term" element={<ShortTermTour />} />
      <Route path="ethiopia-tours/filming" element={<FilmingTour />} />
      <Route path="top-destinations" element={<EthiopiaDestinations />} />
      <Route path="tours-by-experience" element={<ToursByExperiences />} />
      <Route path="ethiopia-guide" element={<EthiopiaGuide />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="testimonials" element={<Testimonials />} />
      <Route path="contact-us" element={<ContactUS />} />
      <Route path="faq" element={<Faq />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  useAOS();
  return <RouterProvider router={router} />;
}

export default App;
