import Container from "react-bootstrap/Container";
import "./navbar.css";
import MrPipeyIcon from "/MrPipey.svg";
import MrPipeyTitle from "/MrPipeyTitle.svg";

import { MegaMenu } from "primereact/megamenu";
import { MenuItem } from "primereact/menuitem";
 
import { Nav, Navbar } from "react-bootstrap";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactGA from 'react-ga4';

function Navigator() {

  const items: MenuItem[] = [
    { label: "Explore", url: "/allservices" },
    {
      label: "Residential",
      items: [
        [
          {
            label: "Plumbing",
            items: [
              {
                label: "Frozen Pipes",
                url: "/services/frozen-pipes",
              },
              {
                label: "Toilet Repair & Replacement",
                url :"/services/toilet-repair",
              },
              {
                label: "Sump Pump Services",
                url :"/services/sump-pump",
              },
              {
                label: "Backflow Preventers",
                url :"/services/backflow-preventers",
              },
              {
                label: "Pipe Insulation",
                url :"/services/pipe-insulation",
              },
              {
                label: "Water Valves",
                url :"/services/water-valves",
              },
              {
                label: "Sewer Repair",
                url :"/services/sewer-repair",
              },
              {
                label: "Leaking Pipes",
                url :"/services/leaking-pipes",
              },
              {
                label: "Water Shut Off",
                url :"/services/water-shut-off",
              },
              {
                label: "Drain Repair",
                url :"/services/drain-repair",
              },
              {
                label: "Faucet Repair",
                url :"/services/faucet-repair",
              },
              {
                label: "Basement Drains",
                url :"/services/basement-drains",
              },
              {
                label: "Sink Repair",
                url :"/services/sink-repair",
              },
              {
                label: "Plumbing Leaks",
                url :"/services/plumbing-leaks",
              },
              {
                label: "Garbage Disposals",
                url :"/services/garbage-disposals",
              },
            ],
          },
        ],
        [
          {
            label: "Sewer and Drain Cleaning",
            items: [
              {
                label: "Drain Cleaning",
                url :"/services/drain-cleaning",
              },
              {
                label: "Clogged Drains",
                url :"/services/clogged-drains",
              },
              {
                label: "Sewer Drains",
                url :"/services/sewer-drains",
              },
              {
                label: "Sewer Camera Inspection",
                url :"/services/sewer-camera-inspection",
              },
              {
                label: "HydroScrub Drain Jetting",
                url :"/services/hydroscrub-drain-jetting",
              },
              {
                label: "Trenchless Sewer Line Repair",
                url :"/services/trenchless-sewer-line-repair",
              },
            ],
          },
        ],
        [
          {
            label: "Water Heaters",
            items: [
              {
                label: "Tankless Water Heaters",
                url :"/services/tankless-water-heaters",
              },
              {
                label: "Water Heaters",
                url :"/services/water-heaters",
              },
              {
                label: "Hot Water Dispensers",
                url :"/services/hot-water-dispensers",
              },
            ],
          },
        ],
      ],
    },
    {
      label: "Commercial",
      items: [
        [
          {
            label: "Plumbing",
            items: [
              {
                label: "Frozen Pipes",
                url :"/services/frozen-pipes",
              },
              {
                label: "Toilet Repair & Replacement",
                url :"/services/toilet-repair",
              },
              {
                label: "Sump Pump Services",
                url :"/services/sump-pump",
              },

              {
                label: "Backflow Preventers",
                url :"/services/backflow-preventers",
              },
              {
                label: "Pipe Insulation",
                url :"/services/pipe-insulation",
              },
              {
                label: "Water Valves",
                url :"/services/water-valves",
              },
              {
                label: "Sewer Repair",
                url :"/services/sewer-repair",
              },
              {
                label: "Leaking Pipes",
                url :"/services/leaking-pipes",
              },
              {
                label: "Water Shut Off",
                url :"/services/water-shut-off",
              },
              {
                label: "Drain Repair",
                url :"/services/drain-repair",
              },
              {
                label: "Faucet Repair",
                url :"/services/faucet-repair",
              },
              {
                label: "Basement Drains",
                url :"/services/basement-drains",
              },
              {
                label: "Sink Repair",
                url :"/services/sink-repair",
              },
              {
                label: "Plumbing Leaks",
                url :"/services/plumbing-leaks",
              },
              {
                label: "Garbage Disposals",
                url :"/services/garbage-disposals",
              },
            ],
          },
        ],
        [
          {
            label: "Sewer and Drain Cleaning",
            items: [
              {
                label: "Drain Cleaning",
                url :"/services/drain-cleaning",
              },
              {
                label: "Clogged Drains",
                url :"/services/clogged-drains",
              },
              {
                label: "Sewer Drains",
                url :"/services/sewer-drains",
              },
              {
                label: "Sewer Camera Inspection",
                url :"/services/sewer-camera-inspection",
              },
              {
                label: "HydroScrub Drain Jetting",
                url :"/services/hydroscrub-drain-jetting",
              },
              {
                label: "Trenchless Sewer Line Repair",
                url :"/services/trenchless-sewer-line-repair",
              },
            ],
          },
        ],
        [
          {
            label: "Water Heaters",
            items: [
              {
                label: "Tankless Water Heaters",
                url :"/services/tankless-water-heaters",
              },
              {
                label: "Water Heaters",
                url :"/services/water-heaters",
              },
              {
                label: "Hot Water Dispensers",
                url :"/services/hot-water-dispensers",
              },
            ],
          },
        ],
      ],
    },
    {
      label: "Emergency Plumbing",
      url :"/services/emergency-plumbing",
    },
    { label: "About Us", url :"/aboutus" },
    { label: "Contact Us", url :"/contact" },
  ];
  const start = (
    <>
      <a href="/">
        <img
          src={MrPipeyIcon}
          alt="Mr Pipey Logo"
          width="100px"
          className="d-inline-block align-top"
        />
      </a>
      <a href="/">
        <img
          src={MrPipeyTitle}
          alt="Mr Pipey title"
          width="100px"
          className="d-inline-block"
        />
      </a>
    </>
  );

  return (
    <Navbar className="main-navbar" expand="lg" data-bs-theme="dark">
      <Container>
        <Navbar.Brand className="d-flex flex-row align-items-center">
          {start}
        </Navbar.Brand>
        <div className="d-flex flex-row justify-content-between w-100">
          <MegaMenu
            breakpoint="1400px"
            model={items}
            orientation="horizontal"
          />
          <Nav>
            <Nav.Link
              className="btn btn-primary nav-phone"
              href="tel:+13139000700"
              onClick={() => {
                // Track Google Analytics event
                ReactGA.event({
                  category: "Contact",
                  action: "Phone Click",
                  label: "Phone Number Button",
                });

                // Track Google Ads conversion
                // if (window.gtag) {
                //   window.gtag("event", "conversion", {
                //     send_to: "AW-16685248435/YUgcCPWMzs4ZELPfkpQ-", // Your conversion ID and label
                //   });
                // }
              }}
            >
              <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              <span>(313) 900-0700</span>
            </Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navigator;
