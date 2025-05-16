import { Col} from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row} from "react-bootstrap";
import "./whyUs.css";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface WhyUsStep {
  image: string;
  title: string;
  subtitle: string;
  text: string;
  icon: IconDefinition;
}

interface WhyUsProps {
  whyUsSteps: WhyUsStep[];
}

const WhyUs = ({whyUsSteps }: WhyUsProps) => {

  useEffect(() => {
    gsap.fromTo(
      '.other-cards',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.request-container',
          start: 'top 80%',
          end: 'top 10%',
          scrub: true,

        },
      }
    );
  }, []);


  return (
    <div className="request-main">
      <Container className="request-container">
        <div className="request-subcontainer">
          <Row className="justify-content-between">

            <Col
              lg="3"
              md="12"
              sm="12"
              xs="11"
              className="other-cards shadow-lg"
            >
              <h1> Why choose us?</h1>
              <h6>
                At Mr. Pipey, customers come first, and we are dedicated to
                serving them with exceptional plumbing services.
              </h6>
            </Col>
            {whyUsSteps &&
              whyUsSteps.map((item, index) => (
                <Col
                  lg="3"
                  md="12"
                  sm="12"
                  xs="11"
                  key={index}
                  className="other-cards shadow-lg"
                >
                  <div className="icon-wrapper">
                    <FontAwesomeIcon
                      icon={item.icon}
                      size="2x"
                      className="m-1 why-icon"
                      fill="white"
                    />
                  </div>

                  <h3> {item.title}</h3>
                  <p> {item.text}</p>
                </Col>
              ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default WhyUs;
