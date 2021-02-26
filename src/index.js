import renderHome from './home';
import renderMenu from './menu';
import renderAbout from './about';

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

     const title = document.createElement('img');
     title.src = 'images/wendys.png';

    header.appendChild(title);
    header.appendChild(createNav());

    return header;
}

//Creates the nav bar
function createNav() {
    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('navBtn');
    homeBtn.textContent = 'Home'
    homeBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActive(homeBtn);
        renderHome();
    });

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('navBtn');
    menuBtn.textContent = 'Menu'
    menuBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActive(menuBtn);
        renderMenu();
    });

    const aboutBtn = document.createElement('button');
    aboutBtn.classList.add('navBtn');
    aboutBtn.textContent = 'About'
    aboutBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActive(aboutBtn);
        renderAbout();
    });

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(aboutBtn);

    return nav;
}

//Helper function for nav buttons
//Removes active from button if it does not equal button
function setActive(button) {
    const buttons = document.querySelectorAll('.navBtn');
    buttons.forEach((button => {
        if (button !== this) {
            button.classList.remove('active');
        }
    }));
    button.classList.add('active');
}

//Creates a tab for content
function createTab() {
    const tab = document.createElement('main');
    tab.setAttribute('id', 'tab');
    return tab;
}

//Creates the footer
function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const disclaimer = document.createElement('p');
    disclaimer.textContent = 'This page is for educational purposes only'

    const githubIcon = document.createElement('i');
    githubIcon.classList.add('fab');
    githubIcon.classList.add('fa-github');

    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/pancreaspinch';

    githubLink.appendChild(githubIcon);
    footer.appendChild(disclaimer);
    footer.appendChild(githubLink);

    return footer;
}

//Renders the page
function renderPage() {
    const content = document.getElementById('content');
    const body = document.getElementsByTagName("BODY")[0];

    content.appendChild(createHeader());
    content.appendChild(createTab());
    content.appendChild(createFooter());
    renderHome();


    setActive(document.querySelector('.btn-nav'))
}


renderPage();
