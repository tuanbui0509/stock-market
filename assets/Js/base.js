showMenuLanguage = () => {
    console.log('haha')
    let menuLanguages = document.querySelector('.header__right-language-list');
    console.log(menuLanguages.style.display)
    if (menuLanguages.style.display === 'none') {
        menuLanguages.style.display = 'block';
    }
    else{
        menuLanguages.style.display = 'none';
    }
}