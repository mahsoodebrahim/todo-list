export default class Project {
  constructor(projectTitle) {
    this.projectTitle = projectTitle;
    this.todoItems = [];
    this.id = Math.floor(Math.random() * 100); // TODO: update to use uuid
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
