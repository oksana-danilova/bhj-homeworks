window.addEventListener('scroll', function() {
    const revealBlocks = document.querySelectorAll('.reveal');

    revealBlocks.forEach(function(el) {
        const {top, bottom} = el.getBoundingClientRect();

        if (bottom < 0 || top > window.innerHeight) {
            el.classList.add('reveal_active')
        }
    })
})