import Navbar from "./Navbar";
import Footer from "../components/Footer";

const Layouts = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};

export default Layouts;
