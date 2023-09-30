document.addEventListener('DOMContentLoaded', function() {
    const collapseRows = document.querySelectorAll('.command-dropdown__wrapper')
    const extraTable = document.querySelectorAll('.data-row')
    
    for (let i = 0; i < collapseRows.length; i++) {
        collapseRows[i].addEventListener('click', () => {
            extraTable[i].classList.toggle('data-row--show')
            collapseRows[i].classList.toggle('command-dropdown__wrapper--open')
        })
    }
 }, false);