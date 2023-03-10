const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.task-list');
const completedTaskList = document.querySelector('.completed-task-list');

let tasks = [];

form.addEventListener('submit', addTask);

function addTask(e) {
  e.preventDefault();

  const task = taskInput.value.trim();

  if (task === '') {
    alert('Please add a task');
    return;
  }

  const taskObject = {
    id: Date.now(),
    task: task,
    completed: false
  };

  tasks.push(taskObject);
  renderTasks();
  form.reset();
}

function renderTasks() {
  taskList.innerHTML = '';
  completedTaskList.innerHTML = '';

  tasks.forEach(task => {
    const taskItem = document.createElement('li');
    taskItem.setAttribute('data-id', task.id);
    taskItem.textContent = task.task;

    const taskButton = document.createElement('button');
    taskButton.textContent = 'Complete';
    taskButton.addEventListener('click', completeTask);

    taskItem.appendChild(taskButton);

    if (task.completed && !taskItem.classList.contains('completed')) {
      taskItem.classList.add('completed');
      completedTaskList.appendChild(taskItem);
    } else if (!task.completed) {
      taskList.appendChild(taskItem);
    }
  });
}

function completeTask(e) {
  const taskItem = e.target.parentElement;
  const taskId = parseInt(taskItem.getAttribute('data-id'));

  tasks.forEach(task => {
    if (task.id === taskId) {
      task.completed = true;
    }
  });

  renderTasks();
}