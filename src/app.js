console.log("hello");
var userName = "nithin shabadhu";
var user = {
    name: 'nithin',
    age: 23,
    empid: 2338
};

function getEmpid(empid) {
    if (empid) {
        return <p> empid: { empid } </p>;
    }


}
var template = (
    <div>
        <h1> { user.name ? user.name : "Anonymous" } </h1>
        {(user.age && user.age > 18) && <p> age: { user.age } </p>}
        { getEmpid(user.empid) } 
    </div>
);

    var app = document.getElementById("app");

    ReactDOM.render(template, app);