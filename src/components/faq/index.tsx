import { Accordion} from "react-bootstrap";
import './faq.css';
interface FaqItem {
    question: string;
    answer: string | JSX.Element;
  }
  
  interface FaqAccordionProps {
    faqs?: FaqItem[];
  }

const Faq = ({ faqs }: FaqAccordionProps) =>{
    return (
        <>
        <h1 className="text-center">FAQs</h1>
        <Accordion defaultActiveKey="0">
        {faqs && faqs.map((faq, index) => (
          <Accordion.Item eventKey={index.toString()} key={index} className="mt-1">
            <Accordion.Header><h4>{faq.question}</h4></Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      </>
    )
}

export default Faq;