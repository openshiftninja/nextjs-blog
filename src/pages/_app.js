import "../styles/global.css";
import React from "react";

// provides a default wrapper around every page component
// global styles can only be imported here
const App = ({ Component, pageProps }) => <Component {...pageProps} />;

export default App;
