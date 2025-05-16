import { useEffect } from "react"; 
import ServiceCards from "../../components/serviceCards";
 
const Page = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
   
      <ServiceCards displayAll={true}></ServiceCards>
    </>
  );
};

export { Page }
