import { useState } from "react";

function Dot() {
  const [navig, setNavig] = useState(<Home />);

  function changeContent(contentType) {
    console.log(contentType);
    switch (contentType) {
      case "Home":
        setNavig(<Home />);
        break;
      case "Contact":
        setNavig(<Contact />);
        break;
      case "About":
        setNavig(<About />);
        break;
    }
  }

  return (
    <div className="a  ">
      <ul>
        <li>
          <a
            onClick={() => {
              changeContent("Home");
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              changeContent("Contact");
            }}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              changeContent("About");
            }}
          >
            About
          </a>
        </li>
      </ul>
      {navig}
    </div>
  );
}
function Home() {
  return <>the home page</>;
}
function About() {
  return <>the about page</>;
}
function Contact() {
  return <>the contact page</>;
}

export default Dot;
