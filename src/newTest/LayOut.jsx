/* eslint-disable no-unused-vars */
import WebPage from "./WebPage";
function LayOut(props) {
  return (
    <div>
      LayOut
      <WebPage nav={nav} />
      {children}
    </div>
  );
}

export default LayOut;
