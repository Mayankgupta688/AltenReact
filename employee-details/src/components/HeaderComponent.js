import React from "react";

export default function HeaderComponent(props) {
  
  function getData() {
    return 20;
  } 

  return (
    <div>
      <h1>This is Header</h1>
      <h2>This is Other Class</h2>
      <div>
        <p>Hello All....</p>
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