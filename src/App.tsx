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
import Tours from "./routes/Tours";
import AboutUs from "./routes/AboutUs";
import Testimonials from "./routes/Testimonials";
import ToursLayout from "./layout/ToursLayout";
import EthiopiaTours from "./routes/EthiopiaTours";
import PopularTours from "./routes/PopularTours";
import EthiopiaDestinations from "./routes/EthiopiaDestinations";
import ToursByExperiences from "./routes/ToursByExperiences";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="ethiopia" element={<EthiopiaTours />} />
      <Route path="popular" element={<PopularTours />} />
      <Route path="experiences" element={<ToursByExperiences />} />
      <Route path="destinations" element={<EthiopiaDestinations />} />
      <Route path="about" element={<AboutUs />} />
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
