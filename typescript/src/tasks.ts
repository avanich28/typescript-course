// Topic: Tasks Project - Setup
// Topic: Tasks Project - Useful Info

// NOTE ! operator (like if)
// const btn = document.querySelector<HTMLButtonElement>(".test-btn")!;
const btn = document.querySelector(".test-btn")! as HTMLButtonElement;

// btn?.addEventListener
// if (btn) {
// }

// btn.disabled = true;

// Topic: Tasks Project - Select Elements
const taskForm = document.querySelector<HTMLFormElement>(".form");
const formInput = document.querySelector<HTMLInputElement>(".form-input");

const taskListElement = document.querySelector<HTMLDataListElement>(".list");

type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = loadTasks();

tasks.forEach(renderTask);

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
}

// Topic: Tasks Project - Event Gotcha
function createTask(event: SubmitEvent) {
  event.preventDefault();

  const taskDescription = formInput?.value;
  if (taskDescription) {
    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    };
    // add task to list
    addTask(task);
    // render tasks
    renderTask(task);
    // update local storage
    updateStorage();

    formInput.value = "";
    return;
  }

  alert("Please enter a task description");
}

// Topic: Tasks Project - Submit Events
taskForm?.addEventListener("submit", createTask);

// Topic: Tasks Project - Add Task
function addTask(task: Task): void {
  tasks.push(task);
  console.log(tasks);
}

// Topic: Tasks Project - Render Task
function renderTask(task: Task): void {
  const taskElement = document.createElement("li");
  taskElement.textContent = task.description;

  // Topic: Tasks Project - Checkbox
  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.checked = task.isCompleted;

  // toggle checkbox
  taskCheckbox.addEventListener("change", () => {
    task.isCompleted = !task.isCompleted;
    updateStorage();
  });

  taskElement.appendChild(taskCheckbox);
  taskListElement?.appendChild(taskElement);
}

// Topic: Tasks Project - Local Storage
function updateStorage(): void {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
