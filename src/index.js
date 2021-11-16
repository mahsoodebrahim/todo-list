import Project from "./classes/Project";
import TodoItem from "./classes/TodoItem";

const myFirstProject = new Project("My First Project");
const test = new TodoItem(
  "title",
  "description",
  "due date",
  "high priority",
  "notes"
);
myFirstProject.addTodoItem(test);

// create the project ul
const projectDiv = document.createElement("div");
const projectUl = document.createElement("ul");
// add the id to uniquely identify this ul proejct
projectDiv.appendChild(projectUl);
projectUl.setAttribute("id", myFirstProject.id);
const projectUlLi = document.createElement("li");
projectUl.appendChild(projectUlLi);

// append ToDo items stored within project to ul
myFirstProject.todoItems.forEach((todoItem) => {
  const ul = document.createElement("ul");

  const title = document.createElement("li");
  title.append(todoItem.title);
  ul.appendChild(title);

  const description = document.createElement("li");
  description.append(todoItem.description);
  ul.appendChild(description);
  // ul.appendChild(document.createElement("li").append(todoItem.dueDate));
  // ul.appendChild(document.createElement("li").append(todoItem.priority));
  // ul.appendChild(document.createElement("li").append(todoItem.notes));

  projectUlLi.appendChild(ul);
});

const grid = document.querySelector(".grid");
grid.appendChild(projectDiv);
