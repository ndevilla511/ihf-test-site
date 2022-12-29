import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import PropertySearch from "./pages/PropertySearch";
import Idx from "./pages/Idx";
import FeaturedListings from "./pages/FeaturedListings";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="idx" element={<Idx />} />
          <Route path="property-search" element={<PropertySearch />} />
          <Route path="featured-listings" element={<FeaturedListings />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
