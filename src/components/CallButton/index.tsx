 
import "./callButton.css";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactGA from "react-ga4";

const CallButton = () => {
  return (
    <div className="call-button">
      <a
        className=" btn btn-primary call-cta"
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
        <FontAwesomeIcon icon={faPhone} size="2x"></FontAwesomeIcon>
      </a>
    </div>
  );
};

export default CallButton;
