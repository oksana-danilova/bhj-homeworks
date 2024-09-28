const editor = document.getElementById('editor');

editor.value = localStorage.getItem('text');

editor.addEventListener('input', function() {
    localStorage.setItem('text', editor.value);
});

const clearButton = document.createElement('button');
clearButton.textContent = 'Очистить содержимое';
document.body.appendChild(clearButton);

clearButton.addEventListener('click', function() {
    editor.value = '';
    localStorage.removeItem('text');
});