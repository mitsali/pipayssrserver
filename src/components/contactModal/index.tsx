import { Modal} from "react-bootstrap";
import {Button } from "react-bootstrap";
import {Form } from "react-bootstrap";
import { ChangeEvent, ReactNode, useEffect, useState, FormEvent } from "react";
import { useForm } from "@formspree/react";
import { toast } from "react-toastify";
import ReactGA from 'react-ga4';

interface ContactInputType {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

interface ContactModalProps {
  children: ReactNode;
  show: boolean;
  handleClose: () => void;
}

function ContactModal({
  children,
  show,
  handleClose,
}: ContactModalProps) {
  const [submitState, handleSubmit] = useForm("xqazprro");
  const [contactInput, setContactInput] = useState<ContactInputType>({});

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactInput({
      ...contactInput,
      [name]: value,
    });
  };

  const handleFormClose = () => {
    handleClose();
    setContactInput({}); // Reset form fields when modal is closed
  };

  useEffect(() => {

    function trackConversion() {
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-16685248435/YUgcCPWMzs4ZELPfkpQ-' // Your conversion ID and label
        });
      }
    }

    if (submitState.succeeded && submitState.result?.kind === "success") {
      toast.success("Form submitted successfully! We will be in touch shortly.");
      handleFormClose();
      
      ReactGA.event({
        category: 'Contact',
        action: 'Submit',
        label: 'Contact Us Form'
      });

      trackConversion();
    }
  }, [submitState.succeeded]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit({
      email: contactInput.email || "",
      name: contactInput.name || "",
      phone: contactInput.phone || "",
      message: contactInput.message || "",
    });
  };

  return (
    <Modal show={show} onHide={handleClose} style={{ zIndex: 100000 }}>
      <Modal.Header closeButton>
        <Modal.Title>{children}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="John Doe"
              value={contactInput.name || ""}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="name@example.com"
              value={contactInput.email || ""}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              name="phone"
              type="tel"
              placeholder="123-456-7890"
              value={contactInput.phone || ""}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              name="message"
              as="textarea"
              minLength={5}
              rows={4}
              placeholder="Please enter your message"
              value={contactInput.message || ""}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Modal.Footer>
            <Button type="submit" className="btn btn-primary">Submit</Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ContactModal;
