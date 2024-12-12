const input = document.querySelector('.input-box');
const addBtn = document.querySelector('.btn');
const todolist = document.querySelector('.todo-list');

addBtn.addEventListener('click', () => {
    const task = input.value.trim();
    if(task) {
        addTask(task);
        input.value = '';
    }
});

function addTask (task) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `
        <span>${task}</span>
        <button onclick="MarkasDone(this)">Mark as done</button>
    `
    todolist.appendChild(li);
}

function MarkasDone (button) {
    const li = button.parenElement;
    li.classList.toggle('Done');
    button.textContent = li.classList.contains('Done') ? 'Done' : 'Mark as done';
}

input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        addBtn.click();
    }
});