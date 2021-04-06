import React from "react";
import "../css/headerIndex.css";

export default function HeaderComponent(props) {
  debugger;

  function getData() {
    return 20;
  } 

  var styleObject = {
    color: "green",
    padding: "20px"
  }

  return (
    <div class="header">
      <h1 style={styleObject}>This is Header {props.userName}</h1>
      <h2>This is Other Class</h2>
      <div>
        <p style={{color: "pink", border: "1px solid red", padding: "10px"}}>Hello All....</p>
      </div>
    </div>
  )
}

// return React.createElement("div", null, [
//     React.createElement("h1", {id: "header_component"}, "This is Application Header"),
//     React.createElement("h2", null, "This is Application Other Header"),
//     React.createElement("div", null,
//       React.createElement("p", null, "Hello All....")
//     )
//   ]
// )

{/* <div>
  <h1>This is The Header</h1>
  <h2>This is Otyhet Hader</h2>
  <div>
    <p>Hello All</p>
  </div>
</div> */}