// Todo List class to manage an in memory list
// Functions to be supported are:
//  Get list
//  Get a specific list item
//  Add item to the list
//  Mark item as completed

module.exports = class TodoList {
  constructor() {
    this.list = [];
  }

  getList() {
    return this.list;
  }

  addItemToList(item) {
    this.list.push(item)
  }
}