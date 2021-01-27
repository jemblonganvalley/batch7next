import Footer from "../Footer";
import NavbarAdmin from "./NavbarAdmin";
import SideMenu from "./SideMenu";

const LayoutAdmin = ({ children }) => {
  return (
    <main
      style={{
        width: "100vw",
        height: "auto",
        display: "flex",
      }}
    >
      <SideMenu />
      <div
        style={{
          width: "auto",
          height: "100vh",
        }}
      >
        {children}
      </div>
      {/* <Footer /> */}
    </main>
  );
};

export default LayoutAdmin;
