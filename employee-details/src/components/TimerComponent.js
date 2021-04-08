import React from "react";

export default function TimerComponent() {
    function getTime() {
        return `The Current Time is ${new Date().getHours()}: ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }

    var time = getTime();

    setInterval(() => {
        time = getTime();
        console.log(time);
    }, 1000);

    return <h1>{time}</h1>
}
