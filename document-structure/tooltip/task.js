const hasTooltip = document.querySelectorAll('.has-tooltip');

Array.from(hasTooltip).forEach(function(el) {
    const divElement = document.createElement('div');

    divElement.classList.add('tooltip');
    el.insertAdjacentElement("afterEnd", divElement);
})

const tooltips = document.querySelectorAll('.tooltip');

hasTooltip.forEach(element => {
    element.addEventListener('click', function(event) {

        event.preventDefault();
        
        const child = element.nextElementSibling;
        function checkAndRemove() {
            for (let index = 0; index < tooltips.length; index++) {
                const tooltip = tooltips[index];
                if (tooltip.classList.contains('tooltip_active')) {
                    tooltip.classList.remove('tooltip_active');
                }  
            }
        }
        
        if (element.title) {
            child.textContent = element.title;
        }

        if (child.classList.contains('tooltip_active')) {
            checkAndRemove()
             
        } else {
            checkAndRemove()
            child.classList.add('tooltip_active');
            child.style = `left: ${element.offsetLeft}px;`
            element.title = child.textContent; 
        }
    })
});