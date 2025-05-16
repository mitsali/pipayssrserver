import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.css";
import p1 from "/testimonials/person1.jpg";
import p2 from "/testimonials/person2.jpg";
import p3 from "/testimonials/person3.jpg";
import p4 from "/testimonials/person4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    text: "Mr. Pipey Plumbing provided prompt and efficient service to clear my clogged kitchen sink.",
    author: "Michael Brown",
    image: p2,
  },
  {
    text: "The team expertly resolved a major sewer line issue with their advanced camera inspection and hydrojetting services.",
    author: "Sarah Davis",
    image: p1,
  },
  {
    text: "Highly professional and knowledgeable technicians who offer transparent pricing and quality work.",
    author: "David Lee",
    image: p4,
  },
  {
    text: "Quick, courteous, and thorough – Mr. Pipey Plumbing exceeded my expectations for drain cleaning.",
    author: "Olivia Carter",
    image: p3,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  waitForAnimate: false,
  autoplay: true,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
  ],
};

const App = () => {
  if (typeof window === "undefined") {
    // SSR: don't render slider, render nothing (or fallback if desired)
    return null;
  }
  return (
    <Container className="mt-5 mb-5">
      <h1 className="text-center">Our customer feedback</h1>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className="h-100" key={index}> 
            <div
              className="testimonial-container d-flex flex-column"
              key={index}
            >
              <img
                src={testimonial.image}
                className="avatar align-self-center"
              ></img>

              <div>
                <p className="testimonial-text">
                  {" "}
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    className="m-1"
                  ></FontAwesomeIcon>
                  {testimonial.text}{" "}
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    className="m-1"
                  ></FontAwesomeIcon>
                </p>
              </div>
              <div className="d-flex flex-row justify-content-center">
                <i className="testimonial-author">{testimonial.author}</i>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default App;
