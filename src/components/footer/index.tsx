import { Col} from "react-bootstrap";
import { Container } from "react-bootstrap";
import { NavDropdown} from "react-bootstrap";
import {Row } from "react-bootstrap";
import "./footer.css"; // Import your CSS file for styling if needed
import MrPipeyIcon from "/MrPipey.svg"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div className="pre-footer">
        <Container className="pre-sub-footer">
          <Row className="pre-subsub-footer align-items-center h-100">
            <Col>
              <Row>
                <Col lg="3" md="3" sm="12" xs="12">
                    <img
                      src={MrPipeyIcon}
                      alt="Mr Pipey Logo"
                      width="100px"
                      className="d-inline-block align-top"
                    />

                  <div>12660 Burt Rd STE 300</div>
                  <div>Detroit, MI, 48223</div>
                  <div>Headquarter</div>
                </Col>

                <Col lg="3" md="3" sm="12" xs="12">
                <Row>
                  <Col>
                    <h4>Quick Links</h4>
                    <div>
                    <a href="/">Home</a>
                    </div>
                    <div><a href="/aboutus">About Us</a></div>
                    
                    <div><a href="/contact">Contact</a></div>
                  </Col>
                </Row>
              
                </Col>
                <Col lg="3" md="3" sm="12" xs="12">
                  <h4>Services</h4>
                  <Row>
                    <Col>
                      <NavDropdown title="Plumbing" id="basic-nav-dropdown">
                        <NavDropdown.Item
                          
                          href="/services/frozen-pipes"
                        >
                          Frozen Pipes
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          
                          href="/services/toilet-repair"
                        >
                          Toilet Repair & Replacement
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          
                          href="/services/sump-pump"
                        >
                          Sump Pump Services
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          
                          href="/services/emergency-plumbing"
                        >
                          Emergency Plumbing
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          
                          href="/services/backflow-preventers"
                        >
                          Backflow Preventers
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          
                          href="/services/pipe-insulation"
                        >
                          Pipe Insulation
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          
                          href="/services/water-valves"
                        >
                          Water Valves
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          
                          href="/services/sewer-repair"
                        >
                          Sewer Repair
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          
                          href="/services/leaking-pipes"
                        >
                          Leaking Pipes
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          
                          href="/services/water-shut-off"
                        >
                          Water Shut Off
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          
                          href="/services/drain-repair"
                        >
                          Drain Repair
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          
                          href="/services/faucet-repair"
                        >
                          Faucet Repair
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          
                          href="/services/basement-drains"
                        >
                          Basement Drains
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          
                          href="/services/sink-repair"
                        >
                          Sink Repair
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          
                          href="/services/plumbing-leaks"
                        >
                          Plumbing Leaks
                        </NavDropdown.Item>

                        <NavDropdown.Item
                          
                          href="/services/garbage-disposals"
                        >
                          Garbage Disposals
                        </NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown
                        title="Water Heaters"
                        id="basic-nav-dropdown"
                      >
                        <NavDropdown.Item
                          
                          href="/services/tankless-water-heaters"
                        >
                          Tankless Water Heaters
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          
                          href="/services/water-heaters"
                        >
                          Water Heaters
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          
                          href="/services/hot-water-dispensers"
                        >
                          Hot Water Dispensers
                        </NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown
                        title="Sewer and Drain Cleaning"
                        id="basic-nav-dropdown"
                      >
                        <NavDropdown.Item
                          
                          href="/services/drain-cleaning"
                        >
                          Drain Cleaning
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          
                          href="/services/clogged-drains"
                        >
                          Clogged Drains
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          
                          href="/services/sewer-drains"
                        >
                          Sewer Drains
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          
                          href="/services/sewer-camera-inspection"
                        >
                          Sewer Camera Inspection
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          
                          href="/services/hydroscrub-drain-jetting"
                        >
                          HydroScrub Drain Jetting
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          
                          href="/services/trenchless-sewer-line-repair"
                        >
                          Trenchless Sewer Line Repair
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <a href="https://www.facebook.com">
                    <FontAwesomeIcon className="fa-2x" icon={faFacebook} />
                  </a>
                  <a href="https://www.instagram.com" className="mx-2">
                    <FontAwesomeIcon className="fa-2x" icon={faInstagram} />
                  </a>
                  <a href="https://www.linkedin.com">
                    <FontAwesomeIcon className="fa-2x" icon={faLinkedin} />
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="text-center text-white">
                &copy; {new Date().getFullYear()} Mr Pipey. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
