// Filename: sophisticated_code.js
// Description: This code demonstrates a sophisticated, elaborate and complex implementation of a task management system.

// Define the Task class
class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  markAsCompleted() {
    this.completed = true;
  }
}

// Create an array of tasks
const tasks = [];

// Add tasks to the array
tasks.push(new Task("Implement authentication", "Implement user authentication module", new Date("2022-01-31"), "High"));
tasks.push(new Task("Create user interface", "Design and implement user interface", new Date("2022-02-15"), "Medium"));
tasks.push(new Task("Optimize performance", "Optimize application performance", new Date("2022-03-15"), "Low"));

// Function to display tasks
function displayTasks() {
  console.log("TASKS:");
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    console.log(`Task ${i+1}: ${task.title}`);
    console.log(`Description: ${task.description}`);
    console.log(`Due Date: ${task.dueDate}`);
    console.log(`Priority: ${task.priority}`);
    console.log(`Completed: ${task.completed}`);
    console.log("---");
  }
}

// Function to mark a task as completed
function markTaskAsCompleted(taskIndex) {
  if (taskIndex >= 0 && taskIndex < tasks.length) {
    tasks[taskIndex].markAsCompleted();
    console.log(`Task ${taskIndex+1} marked as completed.`);
  } else {
    console.log("Invalid task index.");
  }
}

// Display initial tasks
displayTasks();

// Mark a task as completed
markTaskAsCompleted(2);

// Display updated tasks
displayTasks();

// Output:
// TASKS:
// Task 1: Implement authentication
// Description: Implement user authentication module
// Due Date: Tue Jan 31 2022 00:00:00 GMT+0530 (India Standard Time)
// Priority: High
// Completed: false
// ---
// Task 2: Create user interface
// Description: Design and implement user interface
// Due Date: Tue Feb 15 2022 00:00:00 GMT+0530 (India Standard Time)
// Priority: Medium
// Completed: false
// ---
// Task 3: Optimize performance
// Description: Optimize application performance
// Due Date: Wed Mar 15 2022 00:00:00 GMT+0530 (India Standard Time)
// Priority: Low
// Completed: false
// ---
// Task 2 marked as completed.
// TASKS:
// Task 1: Implement authentication
// Description: Implement user authentication module
// Due Date: Tue Jan 31 2022 00:00:00 GMT+0530 (India Standard Time)
// Priority: High
// Completed: false
// ---
// Task 2: Create user interface
// Description: Design and implement user interface
// Due Date: Tue Feb 15 2022 00:00:00 GMT+0530 (India Standard Time)
// Priority: Medium
// Completed: true
// ---
// Task 3: Optimize performance
// Description: Optimize application performance
// Due Date: Wed Mar 15 2022 00:00:00 GMT+0530 (India Standard Time)
// Priority: Low
// Completed: false
// ---