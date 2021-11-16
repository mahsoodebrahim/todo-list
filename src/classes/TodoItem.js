export default class TodoItem {
  constructor(title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.id = Math.floor(Math.random() * 100);
  }

  //change title
  //change decription method
  //....
}
