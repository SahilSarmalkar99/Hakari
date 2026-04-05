import React, { useEffect, useRef } from 'react'
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import AboutUs from '../components/AboutUs'
import WhoAreWe from '../components/WhoAreWe'
import Benefits from '../components/Benefits'
import Campaigns from '../components/Campaigns'
import Price from '../components/Price'
import Service from '../components/Service'
import Blog from '../components/Blog'
import Testimonial from '../components/Testimonial'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'


const LandingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hasScrolled = useRef(false);

  useEffect(() => {
    if (location.state?.scrollTo && !hasScrolled.current) {
      hasScrolled.current = true;

      const id = location.state.scrollTo;

      const scrollToElement = () => {
        const el = document.getElementById(id);

        if (el) {
          el.scrollIntoView({ behavior: "smooth" });

          // ✅ CLEAR STATE AFTER USE
          navigate(location.pathname, { replace: true, state: {} });

        } else {
          requestAnimationFrame(scrollToElement);
        }
      };

      scrollToElement();
    }
  }, [location, navigate]);


  return (
    <div>

      <Hero />

      <div id="about">
        <AboutUs />
      </div>

      <WhoAreWe />

      <div id="benefits">
        <Benefits />
      </div>

      <div id="campaigns">
        <Campaigns />
      </div>

      <div id="pricing">
        <Price />
      </div>

      <div id="services">
        <Service />
      </div>

      <Blog />

      <Testimonial />

      <div id="faq">
        <FAQ />
      </div>

      <Footer />
    </div>
  )
}

export default LandingPage