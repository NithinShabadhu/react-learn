"use strict";

console.log("hello");
var userName = "nithin shabadhu";
var user = {
    name: 'nithin',
    age: 23,
    empid: 2338
};

function getEmpid(empid) {
    if (empid) {
        return React.createElement(
            "p",
            null,
            " empid: ",
            empid,
            " "
        );
    }
}
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        " ",
        user.name ? user.name : "Anonymous",
        " "
    ),
    user.age && user.age > 18 && React.createElement(
        "p",
        null,
        " age: ",
        user.age,
        " "
    ),
    getEmpid(user.empid)
);

var app = document.getElementById("app");

ReactDOM.render(template, app);
