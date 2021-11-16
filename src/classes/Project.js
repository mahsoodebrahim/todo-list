export default class Project {
  constructor(projectTitle) {
    this.projectTitle = projectTitle;
    this.todoItems = [];
  }

  addTodoItem(todoItem) {
    this.todoItems.push(todoItem);
  }

  removeTodoItem(todoItemId) {
    this.todoItems = this.todoItems.filter(
      (todoItem) => todoItem.id !== todoItemId
    );
  }
}
