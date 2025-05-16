// src/index/+Page.tsx

import "./home.css";

import {
  faPhone,
  faMapMarkerAlt,
  faCalendarAlt,
  faHandHoldingHand,
  faHandHoldingUsd,
} from "@fortawesome/free-solid-svg-icons";

import WhyUs from "../../components/whyus/index";
import ServiceCards from "../../components/serviceCards/index";
import Testimonials from "../../components/testimonials/index";
import HowWeWork from "../../components/howWeWork/index";
import ContactModal from "../../components/contactModal/index";
import { useEffect, useState } from "react"; 

function Page() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  const whyUsSteps = [
    {
      image: "/plumber.jpg",
      title: "Serving All Metro Detroit",
      subtitle: "Contact Us",
      text: "Reach out to us for all your plumbing needs in Metro Detroit. Our team is ready to assist you with any plumbing issues you may encounter.",
      icon: faPhone,
    },
    {
      image: "/plumber.jpg",
      title: "Family-Owned and Operated",
      subtitle: "Send Us Your Location and Pictures",
      text: "As a family-owned business, we take pride in our work and treat our customers like family. Provide us with your location and pictures of the issue, and we'll get to work.",
      icon: faMapMarkerAlt,
    },
    {
      image: "/plumber.jpg",
      title: "100% Customer Satisfaction Guarantee",
      subtitle: "Schedule an Appointment",
      text: "We guarantee your satisfaction with our services. Schedule an appointment at your convenience, and our skilled plumbers will be there to help.",
      icon: faCalendarAlt,
    },
    {
      image: "/plumber.jpg",
      title: "Cost-Effective Solutions",
      subtitle: "Contact Us",
      text: "We offer affordable and effective plumbing solutions. Contact us today to discuss how we can resolve your plumbing problems without breaking the bank.",
      icon: faHandHoldingUsd,
    },
    {
      image: "/cards/image.png",
      title: "Reliable, Long-Lasting Workmanship",
      subtitle: "Get In Touch",
      text: "We are committed to delivering reliable and long-lasting plumbing solutions. Get in touch with us to learn how we can provide you with the best service.",
      icon: faHandHoldingHand,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <div className="home">
        <div className="hero">
          <div className="container hero-container">
            <div className="hero-subcontainer row">
              <div className="hero-content col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="hero-subcontent">
                  <h1>
                    Mr. Pipey: Your Trusted Partner for Comprehensive Plumbing Solutions
                  </h1>
                  <h6>
                    At Mr. Pipey, we offer a full range of expert plumbing <a href="/allServices">services</a> designed to meet all your needs. Our commitment to
                    quality craftsmanship and exceptional service ensures that
                    you receive the best solutions for your home or business.
                  </h6>
                </div>
                <button className="btn btn-primary" onClick={handleOpen}>
                  <h4>Contact Us</h4>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal show={show} handleClose={handleClose}>
        Contact Us
      </ContactModal>

      <section className="main-content">
        <ServiceCards displayAll={false} />
        <WhyUs whyUsSteps={whyUsSteps} />
        <Testimonials />
        <HowWeWork />
      </section>
    </>
  );
}

 
export { Page }

 
