//Returns the content of the home page
function createHome(){
    const home = document.createElement('div');
    home.classList.add('home');

    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.src =  'https://wendys-firstkitchen.co.jp/headimg/5a40cb4862813-3.png';
    logo.alt = 'images/wendys.png';

    const description = document.createElement('h1');
    description.textContent = 'Sir this is a Wendy\'s'

    home.appendChild(logo);
    home.appendChild(description);

    return home;
}

//Adds home to tab
function renderHome() {
    const tab = document.getElementById('tab');
    tab.textContent = '';
    tab.appendChild(createHome());
}

export default renderHome;