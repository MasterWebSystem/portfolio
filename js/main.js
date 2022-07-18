// Обработчик для burger меню

burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active-menu-burger');
    wrapperBurgerMenu.classList.toggle('active-wrapper-menu');
    footer.classList.toggle('active-footer');
});

