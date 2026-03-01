/* const activePage = window.location.pathname;
const navCurrent = document.querySelectorAll(".menu a");
navCurrent.forEach(link => 
    {
        if (link.getAttribute('href') === activePage) 
        {
            link.classList.add('active');
        }
    }
);
 */

document.addEventListener('DOMContentLoaded', () => {
    let activePage = window.location.pathname.split('/').pop();
    let navCurrent = document.querySelectorAll('.menu a');
    navCurrent.forEach(link => 
    {
        let pageLink = link.getAttribute('href');
        if (pageLink === activePage) 
        {
            link.classList.add('active');
        }
    });
});