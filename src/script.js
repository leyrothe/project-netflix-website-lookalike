const backToTop = document.getElementById('back-to-top');
const scrollThreshold = 320;

/**
 * When user scrolls down the arrow will show up
 */
window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

/**
 * When user clicks on the arrow icon it will take him back to top
 */
backToTop.addEventListener('click', () => {
    window.scrollTo({top:0});
});
