const tasksAdd = document.querySelector('.tasks__add');
const form = document.querySelector('form');
const tasksList = document.querySelector('#tasks__list');
const newDiw = document.createElement('div');
const input = form.querySelector('#task__input');


form.addEventListener('submit', function(event) {
    event.preventDefault();
})

tasksAdd.onclick = () => {
    const newDiw = document.createElement('div');
    
    if (input.value.trim()) {
        newDiw.innerHTML = `<div class="task"><div class="task__title">${input.value.trim()}</div><a href="#" class="task__remove">&times;</a></div>`;
        tasksList.appendChild(newDiw);
        input.value = '';

        const taskRemove = newDiw.querySelector('.task__remove');
        taskRemove.onclick = () => {
            newDiw.remove();
        }
    }
}