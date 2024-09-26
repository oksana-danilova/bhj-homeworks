const xhr = new XMLHttpRequest();
const pollTitle = document.getElementById('poll__title')
const pollAnswers = document.getElementById('poll__answers')

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const responseData = JSON.parse(xhr.responseText);
        const title = responseData['data']['title'];
        const answers = responseData['data']['answers'];
        
        
        pollTitle.textContent = title;

        for (let index = 0; index < answers.length; index++) {
            const element = answers[index];

            const button = document.createElement('button');
            button.className = 'poll__answer'
            button.textContent = element;
            button.addEventListener('click', () => {
                alert('«Спасибо, ваш голос засчитан!»');
            })
            pollAnswers.appendChild(button);
        }
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();