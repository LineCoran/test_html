(function() {
    const moreBtnList = document.querySelectorAll('.more-info-button')
    const extraContentList = document.querySelectorAll('.summary')

    for (let i = 0; i < moreBtnList.length; i++) {
        moreBtnList[i].addEventListener('click', () => {
            extraContentList[i].classList.toggle('summary-show')
            moreBtnList[i].classList.toggle('more-info-button__image--show')

        })
    }
})()