import React from "react";

export default function ChangingData() {

    debugger;

    var counter = 0;

    setInterval(() => {
      debugger;
      counter = counter + 1;
      console.log(counter);
    }, 1000)

    return(
      <div>
        <h1>The Counter Value is: {counter}</h1>
      </div>
    )
}