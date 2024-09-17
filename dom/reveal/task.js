window.addEventListener('scroll', function() {
    const revealBlocks = document.querySelectorAll('.reveal');

    revealBlocks.forEach(function(el) {
        el.classList.remove('reveal_active');

        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('reveal_active')
        }
    })
})