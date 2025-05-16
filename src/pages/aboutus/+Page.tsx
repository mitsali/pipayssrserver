import "./about.css"; 
import { Container } from "react-bootstrap";
import { useEffect } from "react";

function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about">
       
      <div className="about-container">
        <Container>
          <div className="about-subcontainer">
            <div className="about-wrapper">
              <h1 className="text-center">Get to know us better</h1>
              <p>
                Welcome to Mr. Pipey Plumbing, your trusted partner for all
                plumbing needs in Michigan. At Mr. Pipey, we specialize in a
                wide range of plumbing services to ensure your home or business
                operates smoothly and efficiently.
              </p>
              <h3>Our Story</h3>
              <p>
                Founded on the principles of quality service and customer
                satisfaction, Mr. Pipey Plumbing has become a leading name in
                the plumbing industry. With years of experience and a dedicated
                team of professionals, we have built a reputation for
                reliability, expertise, and exceptional service.
              </p>
              <h3>Our Mission</h3>
              <p>
                Our mission is simple: to provide top-notch plumbing solutions
                with a focus on customer satisfaction and long-term reliability.
                We understand the importance of a functional plumbing system,
                and we are committed to delivering services that exceed our
                clients' expectations.
              </p>
              <h3>What We Do</h3>
              <ul>
                <li>
                  <strong>Drain Snaking:</strong> We use advanced snaking
                  techniques to clear blockages and ensure your drains flow
                  smoothly.
                </li>
                <li>
                  <strong>Hydrojetting:</strong> Our hydrojetting services
                  effectively remove stubborn clogs and buildup, restoring your
                  pipes to optimal condition.
                </li>
                <li>
                  <strong>Camera Inspections:</strong> Using state-of-the-art
                  camera technology, we diagnose plumbing issues with precision,
                  allowing for targeted and efficient repairs.
                </li>
                <li>
                  <strong>General Plumbing Repairs: </strong> From leaky faucets
                  to broken pipes, our team handles all types of plumbing
                  repairs to keep your system in top shape.
                </li>
                <li>
                  <strong>Emergency Plumbing Services: </strong>We offer 24/7
                  emergency services to address urgent plumbing issues promptly
                  and effectively.
                </li>
                <li>
                  <strong>Water Heater Installation and Repair: </strong>Whether
                  you need a new water heater installed or an existing one
                  repaired, we provide reliable and efficient solutions.
                </li>
                <li>
                  <strong>Fixture Installation: </strong>We install all types of
                  plumbing fixtures, including sinks, toilets, faucets, and
                  more, ensuring proper functionality and aesthetic appeal.
                </li>
                <li>
                  <strong>Sewer Line Services: </strong>Our comprehensive sewer
                  line services include inspection, repair, and replacement to
                  maintain a healthy and efficient plumbing system.
                </li>
              </ul>
              <h3>Why Choose Us</h3>
              <ul>
                <li>
                  <strong>Experienced Professionals: </strong>Our team comprises
                  highly skilled and certified plumbers with extensive
                  experience in the field.
                </li>
                <li>
                  <strong>Customer-Centric Approach: </strong>We prioritize our
                  customers' needs and ensure a hassle-free and satisfactory
                  experience.
                </li>
                <li>
                  <strong>Quality and Reliability: </strong>We use the best
                  tools and techniques to deliver durable and reliable plumbing
                  solutions.
                </li>
              </ul>
              <h3>Get in Touch</h3>
              <p>
                Whether you're dealing with a minor drain issue or a major
                plumbing emergency, Mr. Pipey Plumbing is here to help. Contact
                us today to schedule a service or to learn more about how we can
                assist you with all your plumbing needs.
              </p>
              {/* <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/mrpipey/ahmad.jpg" />
            <Card.Body>
              <Card.Title>Ahmad Shoukair</Card.Title>
              <Card.Text>
                Entrepreneur and Lebanese-American anthropist, determine at
                buying the 500 fotrtune companies.
              </Card.Text>
            </Card.Body>
          </Card> */}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export { Page }
