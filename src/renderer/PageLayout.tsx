// src/renderer/PageLayout.tsx
import 'react-bootstrap'
import 'react-transition-group' 
import { useEffect, useState } from 'react';
import 'primereact/resources/primereact.min.css';
import type { ReactNode } from 'react';
// import { Outlet } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import 'react-bootstrap';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/colors.css"; 
import "../styles/typescale.css";
import "../styles/globalStyle.css";
import Navigator from "../components/navbar/index";
import Footer from "../components/footer/index";
import 'primereact/resources/primereact.css';
import "primereact/resources/themes/lara-light-blue/theme.css"; 
import "../styles/typescale.css"; 
 

 
export default function PageLayout({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  
   useEffect(() => {
    setIsHydrated(true);
   }, []);
  
  
  return (
    <PrimeReactProvider>
      
    <Navigator />
      <main>
        {children}
        <ToastContainer position="bottom-center" autoClose={5000} />
      </main>
      <Footer />
    </PrimeReactProvider>
  );
}
