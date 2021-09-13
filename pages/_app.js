import "../styles/globals.css";
import NavBar from "./../components/NavBar/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
