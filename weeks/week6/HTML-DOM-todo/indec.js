// js is a language that can run on both front end and back end of your application.
/******FRONTEND-JS*******/

let todoIndex = 1;

function addtodo() {
    // alert("todo added")
    // write the code that reads the content of the input box
    // create a new todo on the html dom
    // clear the input box

    const element = document.getElementById("todoInput")  //reading
    const todo = element.value;
    
    const todoDiv = document.createElement("div");
    todoDiv.setAttribute("id", "todo" + todoIndex);

    const todoSpan = document.createElement("span")
    todoSpan.innerHTML = todo;

    todoDiv.appendChild(todoSpan);

    const todoButton = document.createElement("button");
    todoButton.innerHTML = "delete todo";
    todoButton.setAttribute("onclick", "deleteTodo(" + todoIndex + ")");

    todoDiv.appendChild(todoButton);  //adding

    document.getElementById("todos").appendChild(todoDiv)
    todoIndex = todoIndex + 1;

    // before 2013 this method was used
}

function deleteTodo(index) {
    // alert("delete todo called with " + index);
    const divElement = document.getElementById("todo" + index);
    document.getElementById("todos").removeChild(divElement);
}