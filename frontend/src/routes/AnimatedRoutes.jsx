import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import LandingPage from "../Pages/LandingPage";
import Contact from "../Pages/ContactUs";
import Blogs from "../Pages/Blogs";
import BlogsUI from "../components/BlogsUi";

import PageWrapper from "../components/PageWrapper";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        
        <Route
          path="/"
          element={
            <PageWrapper>
              <LandingPage />
            </PageWrapper>
          }
        />

        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />

        <Route
          path="/blogContent"
          element={
            <PageWrapper>
              <Blogs />
            </PageWrapper>
          }
        />

        <Route
          path="/blog/:id"
          element={
            <PageWrapper>
              <BlogsUI />
            </PageWrapper>
          }
        />

      </Routes>
    </AnimatePresence>
  );
}