import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.scss";

// Globalize CSS
export default function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
