document.addEventListener('DOMContentLoaded', function() {
    
    const MODIFICATOR = '--show';

    const MORE_INFO_CLS = 'more-info-button';
    const MORE_INFO_DROPDOWN_CLS = 'summary'

    const MORE_ROW_CLS = 'command-dropdown__wrapper';
    const MORE_ROW_DROPDOWN_CLS = 'data-row';

    function createDropdown(initiatorCls, dropdownCls, lisnener = 'click') {
        const initiatorList = document.querySelectorAll(`.${initiatorCls}`)
        const dropdownList = document.querySelectorAll(`.${dropdownCls}`)
        for (let i = 0; i < initiatorList.length; i++) {
            initiatorList[i].addEventListener(lisnener, () => {
                initiatorList[i].classList.toggle(`${initiatorCls}${MODIFICATOR}`)
                dropdownList[i].classList.toggle(`${dropdownCls}${MODIFICATOR}`)
            })
        }
    }
    createDropdown(MORE_INFO_CLS, MORE_INFO_DROPDOWN_CLS)
    createDropdown(MORE_ROW_CLS, MORE_ROW_DROPDOWN_CLS)
 }, false);