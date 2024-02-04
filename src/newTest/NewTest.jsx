/* eslint-disable react/prop-types */
import Last from "./last";
function NewTest(props) {
  return (
    <>
      <div className="c">
        <table>
          {props.heading}:
          <tr>
            <th>{props.tablev.Name}</th>
            <th>{props.tablev.Mobileno}</th>
          </tr>
          <tr>
            <td rowSpan="2">{props.row1.Name}</td>
            <td>{props.row1.Mobile}</td>
          </tr>
          <tr>
            <td>{props.row1.Mobile2}</td>
          </tr>
          <tr>
            <td rowSpan="2">{props.row2.Name}</td>
            <td>{props.row1.Mobile}</td>
          </tr>
          <tr>
            <td>{props.row2.Mobile2}</td>
          </tr>
          <tr>
            <th colSpan="2">{props.total}</th>
          </tr>
        </table>
      </div>
      <Last />
    </>
  );
}

export default NewTest;
