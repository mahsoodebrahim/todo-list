// function buildInitalPage() {}

function buildProjectContainer(project) {
  const projectContainer = document.createElement("div");
  projectContainer.appendChild(buildProjectTodoList(project));
  return projectContainer;
}

function buildProjectTodoList(project) {
  const projectTodoList = document.createElement("ul");

  project.todoItems.forEach((todoItem) => {
    const projectTodoListItem = document.createElement("li");
    projectTodoListItem.appendChild(buildTodoItem(todoItem));
    projectTodoList.appendChild(projectTodoListItem);
  });

  return projectTodoList;
}

function buildTodoItem(todoItem) {
  const todoItem_ul = document.createElement("ul");

  for (const attribute in todoItem) {
    if (attribute === "id") {
      continue;
    }

    const attribute_li = document.createElement("li");
    attribute_li.append(todoItem[attribute]);
    todoItem_ul.appendChild(attribute_li);
  }

  return todoItem_ul;
}

export { buildProjectContainer };
