import Project from "./classes/Project";
import TodoItem from "./classes/TodoItem";
import { buildProjectContainer } from "./buildPage";

const myFirstProject = new Project("My First Project");
const todoItem1 = new TodoItem(
  "title",
  "description",
  "due date",
  "high priority",
  "notes"
);
const todoItem2 = new TodoItem(
  "title 2",
  "description 2",
  "due date 2",
  "high priority 2",
  "notes 2"
);
myFirstProject.addTodoItem(todoItem1);
myFirstProject.addTodoItem(todoItem2);
console.log(myFirstProject);
const grid = document.querySelector(".grid");
grid.appendChild(buildProjectContainer(myFirstProject));
