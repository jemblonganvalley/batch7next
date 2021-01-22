import Navbar from "./Navbar";

const Layouts = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layouts;
