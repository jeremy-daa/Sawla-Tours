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
import RootLayout from "./layout/RootLayout";
import NotFound from "./routes/NotFound";
import AboutUs from "./routes/AboutUs";
import Testimonials from "./routes/Testimonials";
import EthiopiaTours from "./routes/EthiopiaTours";
import PopularDestinations from "./routes/PopularDestinations";
import ToursByExperiences from "./routes/ToursByExperiences";
import EthiopiaGuide from "./routes/EthiopiaGuide";
import useAOS from "./functions/useAOS";
import ContactUS from "./routes/ContactUs";
import EmptyLayout from "./layout/EmptyLayout";
import Enquire from "./routes/Enquire";
import EthiopiaGuideDetails from "./routes/EthiopiaGuideDetails";
import EthiopiaToursPackages from "./routes/EthiopiaToursPackages";
import PopularDestinationsPackages from "./routes/PopularDestinationsPackages";
import ToursByExperiencesPackages from "./routes/ToursByExperiencesPackages";
import ToursByExperiencesPackagesItinerary from "./routes/ToursByExperiencesPackagesItinerary";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="ethiopia-tours" element={<EmptyLayout />}>
        <Route index element={<EthiopiaTours />} />
        <Route path=":id" element={<EthiopiaToursPackages />} />
      </Route>
      <Route path="top-destinations" element={<EmptyLayout />}>
        <Route index element={<PopularDestinations />} />
        <Route path=":id" element={<PopularDestinationsPackages />} />
      </Route>
      <Route path="ethiopia-guide" element={<EmptyLayout />}>
        <Route index element={<EthiopiaGuide />} />
        <Route path=":id" element={<EthiopiaGuideDetails />} />
      </Route>
      <Route path="tours-by-experience" element={<EmptyLayout />}>
        <Route index element={<ToursByExperiences />} />
        <Route path=":id" element={<EmptyLayout />}>
          <Route index element={<ToursByExperiencesPackages />} />
          <Route path=":id" element={<ToursByExperiencesPackagesItinerary />} />
        </Route>
      </Route>

      <Route path="about-us" element={<AboutUs />} />
      <Route path="testimonials" element={<Testimonials />} />
      <Route path="contact-us" element={<ContactUS />} />
      <Route path="enquire" element={<Enquire />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  useAOS();
  return <RouterProvider router={router} />;
}

export default App;
