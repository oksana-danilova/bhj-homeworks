function speed() {
    const el = document.querySelector('.rotator__case_active');
    if (el) {
        return Number(el.getAttribute('data-speed'));
    }
    return Number(1000);
}

function rotator() {
    const rotators = document.querySelectorAll('.rotator__case');

    for (let i = 0; i < rotators.length; i++) {
        const element = rotators[i];
        element.style.color = element.getAttribute('data-color');   
        if (element.classList.contains('rotator__case_active')) {
            element.classList.remove('rotator__case_active');
            if (rotators[i+1]) {
                rotators[i+1].classList.add('rotator__case_active');
            } else {
                rotators[0].classList.add('rotator__case_active');
            }
            
            break;
        }
    }
    setTimeout(rotator, speed());
}

rotator();