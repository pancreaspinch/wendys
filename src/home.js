//Returns the content of the home page
function createHome(){
    const home = document.createElement('div');
    home.classList.add('home');

    const title = document.createElement('h1');
    title.textContent = "Wendy's";

    const logo = document.createElement('img');
    logo.src =  'https://wendys-firstkitchen.co.jp/headimg/5a40cb4862813-3.png';
    logo.alt = 'images/wendys.png';

    const description = document.createElement('h4');
    description.textContent = 'Sir this is a Wendy\'s'

    home.appendChild(title);
    home.appendChild(logo);
    home.appendChild(description);

    return home;
}

//Adds home to the content
function renderHome() {
    const content = document.getElementById('content');
    //content.textContent = '';
    content.appendChild(createHome());
}

export default renderHome;