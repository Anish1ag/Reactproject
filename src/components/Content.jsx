/* eslint-disable react/prop-types */
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";

function Content({ contentType }) {
  if (contentType === "Home") return <Home />;
  else if (contentType === "About") return <About />;
  else if (contentType === "Contact") return <Contact />;
  else if (contentType === "Portfolio") return <Portfolio />;
  else null;
}

export default Content;
