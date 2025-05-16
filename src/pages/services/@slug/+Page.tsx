import { usePageContext } from 'vike-react/usePageContext';
import { servicesList } from "../servicesList";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap"; 
import "./service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import ReactGA from "react-ga4";
export const prerender = {
  partial: true // Disables pre-rendering for this dynamic route
}
function Page() {
  const { urlPathname, routeParams } = usePageContext();
  const slug = routeParams?.slug;
  const service = slug ? servicesList[slug] : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service]);

  const services = Object.keys(servicesList).map((key) => ({
    route: `/services/${key}`,
    title: servicesList[key].title,
    svg: servicesList[key].svg,
  }));



  if (!service) {
    return <div>Service not found</div>;
  }


  interface Contant {
    question: string;
    answer: string | JSX.Element;
  }

  let contants: Contant[] = [];

  if (service.faqs && Array.isArray(service.faqs)) {
    contants = service.faqs;
  } else {
    contants = [
      {
        question: " ",
        answer: " "
      }
    ];
  }




  return (
    <>
      <div className="service-container">
        <Row>
          <Col lg="2" className="side-nav shadow-lg">
            <Navbar expand="lg" className="flex-column">
              <Container>
                <Navbar.Toggle
                  aria-controls="responsive-navbar-nav"
                  className="custom-toggler"
                >
                  <span className="custom-icon">
                    <FontAwesomeIcon icon={faAnglesDown} />
                  </span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="flex-column">
                    {services.map((item, index) => (
                      <Nav.Link
                        key={index}
                        href={item.route}
                        className={urlPathname === item.route ? "active-nav" : ""}
                      >
                        {item.title}
                      </Nav.Link>
                    ))}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>

          <Col lg="10" className="service-subcontainer">
            <Container>
              <Col className="service-contact-us">
                <h1 className="text-center">{service.title}</h1>
              </Col>

              <Col className="mt-5">
                <Row className="justify-content-center">
                  {service.image && (
                    <Col>
                      <picture>
                        <source srcSet={service.imageC} type="image/webp" />
                        <source srcSet={service.image} />
                        <img
                          className="service-image"
                          src={service.imageC}
                          alt="description"
                        />
                      </picture>
                    </Col>
                  )}

                  <Col className="d-flex flex-col justify-content-center align-items-center">
                    <div className="d-flex flex-col justify-content-center">
                      <a
                        className="btn btn-primary"
                        href="tel:+13139000700"
                        onClick={() => {
                          ReactGA.event({
                            category: "Contact",
                            action: "Phone Click",
                            label: "Phone Number Button",
                          });
                        }}
                      >
                        <h1>
                          <FontAwesomeIcon icon={faPhone} size="1x" /> (313) 900-0700
                        </h1>
                      </a>
                    </div>
                  </Col>
                </Row>

                <Row className="service-content">{service.content}</Row>
              </Col>
            </Container>
          </Col>
        </Row>
      </div>



      <div className="faq-list">
        {contants.map((item, i) => (
          <div key={i} className="faqs-container">
            <Container>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </Container>
          </div>
        ))}
      </div>
    </>
  );
}
export default Page;