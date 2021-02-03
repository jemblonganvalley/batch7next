import "../styles/globals.css";
import Layouts from "../components/Layouts";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = () => {
  return {
    data: "fadliselaz",
  };
};
