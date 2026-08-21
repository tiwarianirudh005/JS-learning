// js is a language that can run on both front end and back end of your application.
/******FRONTEND-JS*******/

function addtodo() {
    alert("todo added")
    // write the code that reads the content of the input box
    // create a new todo on the html dom
    // clear the input box

    const element = document.getElementById("todoInput")
    const todo = element.value;
    console.log(todo);
}