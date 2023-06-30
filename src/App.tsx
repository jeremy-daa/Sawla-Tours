import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./styles/style.css";
import "./styles/responsive.css";
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
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="ethiopia-tours" element={<EthiopiaTours />} />
      <Route path="top-destinations" element={<EthiopiaDestinations />} />
      <Route path="tours-by-experience" element={<ToursByExperiences />} />
      <Route path="ethiopia-guide" element={<EthiopiaGuide />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="testimonials" element={<Testimonials />} />
      <Route path="faq" element={<Faq />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
