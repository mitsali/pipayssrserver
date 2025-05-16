import "./contact.css"; 
import ContactForm from "../../components/contactForm";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
 
function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
      <div className="contact"> 
      <Container className="contact-container">
      <ContactForm/>
   
      </Container>
    </div>
  );
}

export { Page }
