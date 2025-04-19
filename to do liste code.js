function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
  
    if (taskText === '') return;
  
    const li = document.createElement('li');
    li.innerHTML = `
      <span onclick="toggleDone(this)">${taskText}</span>
      <button onclick="removeTask(this)">Supprimer</button>
    `;
    document.getElementById('task-list').appendChild(li);
    taskInput.value = '';
  }
  
  function toggleDone(span) {
    span.parentElement.classList.toggle('done');
  }
  
  function removeTask(button) {
    const li = button.parentElement;
    li.remove();
  }
  