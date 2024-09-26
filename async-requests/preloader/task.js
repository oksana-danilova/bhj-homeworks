const xhr = new XMLHttpRequest();
const loader = document.getElementById('loader');
const items = document.getElementById('items');

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const responseData = JSON.parse(xhr.responseText);
        const valuteData = responseData['response']['Valute'];
        
        for (let key in valuteData) {

            const newDiwItem = document.createElement('div');
            newDiwItem.className = 'item'

            const newDiwItemCode = document.createElement('div');
            newDiwItemCode.className = 'item__code'
            newDiwItemCode.textContent = key;

            const newDiwItemValue = document.createElement('div');
            newDiwItemValue.className = 'item__value'
            newDiwItemValue.textContent = valuteData[key]['Value'];

            const newDiwItemCurrency = document.createElement('div');
            newDiwItemCurrency.className = 'item__currency'
            newDiwItemCurrency.textContent = 'руб.';

            newDiwItem.appendChild(newDiwItemCode);
            newDiwItem.appendChild(newDiwItemValue);
            newDiwItem.appendChild(newDiwItemCurrency);

            items.appendChild(newDiwItem);
        }

        loader.classList.remove('loader_active')
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();