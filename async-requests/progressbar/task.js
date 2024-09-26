const form = document.getElementById('form');
const progress = document.getElementById('progress')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload'); 

    const fileInput = document.getElementById('file'); 
    const file = fileInput.files[0];
    const formData = new FormData(); 

    formData.append('file', file); 
    
    xhr.upload.onprogress = function(event) {
        progress.value = event.loaded / event.total;
    }

    xhr.send(formData); 
})