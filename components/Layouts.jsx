import Navbar from "./Navbar";
import Footer from "../components/Footer";

const Layouts = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layouts;
