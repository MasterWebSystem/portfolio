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




linkHello.addEventListener('click', () => {
  linkHelloItem.classList.add('active-list-item');
  linkHello.classList.add('active-list-link');
  linkAboutItem.classList.remove('active-list-item');
  linkAbout.classList.remove('active-list-link');
  linkProjectsItem.classList.remove('active-list-item');
  linkProjects.classList.remove('active-list-link');
  mainBlock.style.display = 'flex'
  aboutBlock.style.display = 'none';
  projectsBlock.style.display = 'none';

});

linkAbout.addEventListener('click', () => {
    linkAboutItem.classList.add('active-list-item');
    linkAbout.classList.add('active-list-link');
    linkHelloItem.classList.remove('active-list-item');
    linkHello.classList.remove('active-list-link');
    linkProjectsItem.classList.remove('active-list-item');
    linkProjects.classList.remove('active-list-link');
    aboutBlock.style.display = 'flex';
    mainBlock.style.display = 'none';
    projectsBlock.style.display = 'none';
});

linkProjects.addEventListener('click', () => {
    linkProjectsItem.classList.add('active-list-item');
    linkProjects.classList.add('active-list-link');
    linkHelloItem.classList.remove('active-list-item');
    linkHello.classList.remove('active-list-link');
    linkAboutItem.classList.remove('active-list-item');
    linkAbout.classList.remove('active-list-link');
    aboutBlock.style.display = 'none';
    mainBlock.style.display = 'none';
    projectsBlock.style.display = 'flex';
});

// Переключатель burgerMenu 

var helloBurgerItem = document.getElementById('helloBurgerItem');
var aboutBurgerItem = document.getElementById('aboutBurgerItem');
var projectsBurgerItem = document.getElementById('projectsBurgerItem');

helloBurgerItem.addEventListener('click', () => {
    aboutBlock.setAttribute('style', 'display: none !important')
    mainBlock.setAttribute('style', 'display: flex !important')
    projectsBlock.setAttribute('style', 'display: none !important');

    if (wrapperBurgerMenu.classList.contains('active-wrapper-menu') && burgerMenu.classList.contains('active-menu-burger') && footer.classList.contains('active-footer')) {
        wrapperBurgerMenu.classList.remove('active-wrapper-menu');
        burgerMenu.classList.remove('active-menu-burger');
        footer.classList.remove('active-footer');
    }
});

aboutBurgerItem.addEventListener('click', () => {
    mainBlock.setAttribute('style', 'display: none !important');
    aboutBlock.setAttribute('style', 'display: flex !important');
    projectsBlock.setAttribute('style', 'display: none !important');

    if (wrapperBurgerMenu.classList.contains('active-wrapper-menu') && burgerMenu.classList.contains('active-menu-burger') && footer.classList.contains('active-footer')) {
        wrapperBurgerMenu.classList.remove('active-wrapper-menu');
        burgerMenu.classList.remove('active-menu-burger');
        footer.classList.remove('active-footer');
    }

});

projectsBurgerItem.addEventListener('click', () => {
    mainBlock.setAttribute('style', 'display: none !important');
    aboutBlock.setAttribute('style', 'display: none !important');
    projectsBlock.setAttribute('style', 'display: flex !important');

    if (wrapperBurgerMenu.classList.contains('active-wrapper-menu') && burgerMenu.classList.contains('active-menu-burger') && footer.classList.contains('active-footer')) {
        wrapperBurgerMenu.classList.remove('active-wrapper-menu');
        burgerMenu.classList.remove('active-menu-burger');
        footer.classList.remove('active-footer');
    }

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
















