/* eslint-disable react/prop-types */
function WebPage(props) {
  return (
    <>
      <div className="navbar">
        <div>
          <img src="/chess.jpg" alt="chess" height="60px" width="60px" />
        </div>
        <ul>
          <li>
            <a>{props.nav.Home}</a>
          </li>
          <li>
            <a>{props.nav.News}</a>
          </li>
          <li>
            <a>{props.nav.Contact}</a>
          </li>
          <li>
            <a>{props.nav.About}</a>
          </li>
          <li>
            <input type="text" placeholder="Search.." />
          </li>
        </ul>
        ;
      </div>
    </>
  );
}

export default WebPage;
