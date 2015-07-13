var TodoList = function() {
  this.tasks = [];
};

TodoList.prototype.add = function(description){
  this.tasks.push(new Task(description))

};

var task_id = 1
var Task = function(description){
  this.description = description;
  this.completed = false;
  this.id = task_id
  task_id += 1
};

TodoList.prototype.list = function(){
  for (var i = 0; i < this.tasks.length; i++){
    console.log(this.tasks[i]);
  }
};

Task.prototype.complete = function(){
  this.completed = true;
};

TodoList.prototype.complete_item = function(item_index){
  this.tasks[item_index].complete();
};

TodoList.prototype.remove = function(task_object){
  this.tasks.splice(this.tasks.indexOf(task_object),1)
}

// Driver code
//////////////////////////////////////////////////////////////////////////
// Note we are using a JavaScript constructor now.
var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
groceryList.tasks //-> [Task, Task, Task]

groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}

// getting a task object
var breadTask = groceryList.tasks[0];

breadTask.id //-> 1 (some unique numerical ID)
breadTask.description //-> 'bread'
breadTask.completed //-> false


// This should complete the task
breadTask.complete();

breadTask.completed //-> true

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}

groceryList.complete_item(1)

// This should remove the task from the todo list
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
groceryList.list();
groceryList.remove(breadTask);
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}
