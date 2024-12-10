// script.js
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
  
    let tasks = [];
  
    // Function to render the tasks
    function renderTasks() {
      taskList.innerHTML = ""; // Clear current tasks
      tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = task.completed ? "completed" : "";
  
        li.innerHTML = `
          <span>${task.text}</span>
          <button class="delete-btn" data-index="${index}">Delete</button>
        `;
  
        // Toggle task completion
        li.addEventListener("click", (e) => {
          if (e.target.tagName !== "BUTTON") {
            tasks[index].completed = !tasks[index].completed;
            renderTasks();
          }
        });
  
        // Delete task
        li.querySelector(".delete-btn").addEventListener("click", (e) => {
          e.stopPropagation();
          tasks.splice(index, 1);
          renderTasks();
        });
  
        taskList.appendChild(li);
      });
    }
  
    // Add a new task
    addTaskBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText) {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = "";
        renderTasks();
      }
    });
  
    // Allow pressing "Enter" to add a task
    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addTaskBtn.click();
      }
    });
  });
  