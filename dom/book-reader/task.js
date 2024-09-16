document.addEventListener("DOMContentLoaded", function() {
    const fontSizes = document.querySelectorAll('.font-size');
    const bookContent = document.querySelector('.book__content');
    const bookColor = document.querySelector('.book__control_color').getElementsByTagName('a');
    const book = document.querySelector('.book');
    const bookBackground = document.querySelector('.book__control_background').getElementsByTagName('a');
    
    fontSizes.forEach(function(element, index) {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            for (let i = 0; i < fontSizes.length; i++) {
                const element = fontSizes[i];
                const dataSize = element.getAttribute('data-size');

                if (i !== index) {
                    element.classList.remove('font-size_active');
                    bookContent.classList.remove(`book_fs-${dataSize}`);
                } else {
                    element.classList.add('font-size_active');
                    bookContent.classList.add(`book_fs-${dataSize}`);
                } 
            }
        })
    });

    for (let index = 0; index < bookBackground.length; index++) {
        const element = bookBackground[index];
        element.addEventListener('click', function(event) {
            event.preventDefault();
            for (let i = 0; i < bookBackground.length; i++) {
                const element = bookBackground[i];
                const dataColor = element.getAttribute('data-bg-color');

                if (i !== index) {
                    element.classList.remove('color_active');
                    book.classList.remove(`book_bg-${dataColor}`);
                } else {
                    element.classList.add('color_active');
                    book.classList.add(`book_bg-${dataColor}`);
                }
            }

        })
    }

    for (let index = 0; index < bookColor.length; index++) {
        const element = bookColor[index];
        element.addEventListener('click', function(event) {
            event.preventDefault();
            for (let i = 0; i < bookColor.length; i++) {
                const element = bookColor[i];
                const dataText = element.getAttribute('data-text-color');
                
                if (i !== index) {
                    element.classList.remove('color_active');
                    book.classList.remove(`book_color-${dataText}`);
                } else {
                    element.classList.add('color_active');
                    book.classList.add(`book_color-${dataText}`);
                }
            }

        })
    }
});