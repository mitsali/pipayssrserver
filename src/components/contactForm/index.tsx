import { useForm } from "@formspree/react";
import { ChangeEvent, useState } from "react";
import { Button } from "react-bootstrap";
import { Form} from "react-bootstrap";
import ReactGA from 'react-ga4';

const ContactForm = ({ children = "Please fill the form" }) => {
  const [submitState, handleSubmit] = useForm("xqazprro");
  const [contactInput, setContactInput] = useState({});
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactInput({
      ...contactInput,
      [name]: value,
    });

  };
  
  function trackConversion() {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-16685248435/YUgcCPWMzs4ZELPfkpQ-' // Your conversion ID and label
      });
    }
  }

  if (submitState.succeeded && submitState.result?.kind === "success") {
      
    ReactGA.event({
      category: 'Contact',
      action: 'Submit',
      label: 'Contact Us Form'
    });
    trackConversion();
    return (
      <h1 className="bottom-center">Thank you! We will be in contact very shortly.</h1>
    )
  }
  return (
    <>
      <h1 className="text-center">{children}</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            name="name"
            onChange={handleInputChange}
            placeholder="John Doe"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={handleInputChange}
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="tel"
            name="telephone"
            onChange={handleInputChange}
            placeholder="123-456-7890"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            minLength={5}
            name="message"
            rows={4}
            placeholder="Please enter your message"
            onChange={handleInputChange}
          />
        </Form.Group>
        {/* @ts-ignore */}
        <Button type="submit" className="btn btn-primary">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;
