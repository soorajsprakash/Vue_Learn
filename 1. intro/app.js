
const button = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('ul');

function addGoal() {
    const goal = input.value;
    const listItem = document.createElement('li');
    listItem.textContent = goal;
    list.appendChild(listItem);
    input.value = '';
}

button.addEventListener('click', addGoal);
