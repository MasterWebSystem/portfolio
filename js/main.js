// Обработчик для burger меню

burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active-menu-burger');
    wrapperBurgerMenu.classList.toggle('active-wrapper-menu');
    footer.classList.toggle('active-footer');
});

// Переключатель меню

var linkHello = document.getElementById('linkHello');
var mainBlock = document.getElementById('mainBlock');

var linkHelloItem = document.getElementById('linkHelloItem');
var linkAboutItem = document.getElementById('linkAboutItem');

var linkAbout = document.getElementById('linkAbout');
var aboutBlock = document.getElementById('aboutBlock');


aboutBlock.style.display = 'none';
mainBlock.style.display = 'flex';

linkHello.addEventListener('click', () => {
  linkHelloItem.classList.add('active-list-item');
  linkHello.classList.add('active-list-link');
  linkAboutItem.classList.remove('active-list-item');
  linkAbout.classList.remove('active-list-link');
  mainBlock.style.display = 'flex'
  aboutBlock.style.display = 'none';

});

linkAbout.addEventListener('click', () => {
    linkAboutItem.classList.add('active-list-item');
    linkAbout.classList.add('active-list-link');
    linkHelloItem.classList.remove('active-list-item');
    linkHello.classList.remove('active-list-link');
    aboutBlock.style.display = 'flex';
    mainBlock.style.display = 'none';
});


// Обработчик для details

var details = document.getElementById('details');
var descCode = document.getElementById('desc');
var closeDesc = document.getElementById('closeID')

closeDesc.addEventListener('click', () => {
    descCode.classList.remove('active-desc__code');
});

details.addEventListener('click', () => {
    descCode.classList.add('active-desc__code');
});
















