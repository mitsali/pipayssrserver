import { usePageContext } from "vike-react/usePageContext";
import Footer from "../../components/footer";
import CallButton from "../../components/CallButton";
import Loader from "../../components/Loader";
import { useEffect, useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [loading, setLoading] = useState(true);
  const { urlPathname } = usePageContext(); // Get current path

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [urlPathname]); // Trigger on route change

  return (
    <>
      {loading && <Loader />}
      {children} {/* Replaced Outlet with children */}
      <CallButton />
      <Footer />
    </>
  );
};

export default Layout;