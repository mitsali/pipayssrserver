import { Col} from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row} from "react-bootstrap";
import { Card} from "react-bootstrap";
import "./serviceCards.css"; 
import { servicesList } from "../../pages/services/servicesList";
import { useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ServiceCardsProps {
  displayAll: boolean;
}

const ServiceCards = ({ displayAll }: ServiceCardsProps) => {

  useEffect(() => {
    if(!displayAll){

      gsap.fromTo(
        '.left-cards',
        { x: '-100%', opacity: 0 },
        {
          x: '0%',
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: '.service-card-main',
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
          },
        }
      );
    }

  }, [displayAll]);
  const services = Object.keys(servicesList).map((key) => ({
    route: `/services/${key}`,
    title: servicesList[key].title,
    svg: servicesList[key].svg,
  }));

  const limitedServicesList = displayAll ? services : services.slice(0, 6);

  
  return (
    <div className="service-card-main">
      <Container className="service-card-container">
        <div className="service-card-subcontainer">
          <h1 className="text-center">Our Services</h1>
          <p className="text-center">Explore our various services:</p>
          <Row>
            {limitedServicesList &&
              limitedServicesList.map((item, index) => (
                <Col
                  lg="4"
                  md="12"
                  sm="12"
                  xs="12"
                  key={index}
                  className="shadow-sm left-cards"
                >
                  <a href={item.route}>
                    <Card style={{ height: "200px", margin: "10px" }}>
                      <Card.Body>
                        <Card.Title className="text-center">
                          { typeof item.svg === "string" ?
                            <img src={item.svg} width={70} height={70} alt="Plumbing Icon" className="menu-icon" />
                          :
                            item.svg
                          }
                        </Card.Title>
                        <Card.Subtitle>
                          <h4 className="text-center">{item.title}</h4>
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </a>
                </Col>
              ))}
          </Row>
          <div className="d-flex flex-column">
            {!displayAll && (
              <a className="btn btn-primary" href="/allservices">
                <h4>All Services</h4>
              </a>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceCards;
