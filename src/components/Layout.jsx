/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Nav from "./Nav";
function Layout(props) {
  const { children, setNavig } = props;
  const navobj = {
    Home: "Home",
    Portfolio: "Portfolio",
    Contact: "Contact",
    About: "About",
  };

  return (
    <>
      <Nav navobj={navobj} setNavig={setNavig} />
      <div style={{ marginTop: "75px" }}>
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
