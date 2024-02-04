/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import "./nav.css";
function Nav(props) {
  const { setNavig } = props;
  return (
    <div>
      <div className="navbar">
        <div className="image">
          <img src="/chess.jpg" alt="chess" height="60px" width="60px" />
        </div>
        <ul>
          <li>
            <a
              onClick={() => {
                setNavig("Home");
              }}
            >
              {props.navobj.Home}
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setNavig("Portfolio");
              }}
            >
              {props.navobj.Portfolio}
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setNavig("Contact");
              }}
            >
              {props.navobj.Contact}
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setNavig("About");
              }}
            >
              {props.navobj.About}
            </a>
          </li>
          <li>
            <input type="text" placeholder="Search.." />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
