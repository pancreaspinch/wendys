//Returs a div with about page
function createAbout(){
    //Containers
    const about = document.createElement('div');
    about.classList.add('about');

    const description = document.createElement('div');
    description.classList.add('description');

    const sources = document.createElement('div');
    sources.classList.add('sources');

    const title = document.createElement('h1');
    title.textContent = 'About Us';

    //Sources
    const sourcesTitle = document.createElement('h2')
    sourcesTitle.textContent = "Sources";

    const wendysLink = document.createElement('a');
    wendysLink.href = 'https://wendys-firstkitchen.co.jp/menu/'

    const fbkLink = document.createElement('a');
    fbkLink.href = 'https://www.youtube.com/watch?v=94iF6RP3cwk&t=0s'

    const wendysImg = document.createElement('img');
    wendysImg.classList.add('sourceImg');
    wendysImg.src = 'images/wendys.png';
    wendysImg.alt = 'Wendy\'s';

    const fbkImg = document.createElement('img');
    fbkImg.classList.add('sourceImg');
    fbkImg.src = 'images/fbk.jpg';
    fbkImg.alt = 'Fubuki';

    wendysLink.appendChild(wendysImg);
    fbkLink.appendChild(fbkImg);
    sources.appendChild(sourcesTitle);
    sources.appendChild(wendysLink);
    sources.appendChild(fbkLink);

    //Description
    description.appendChild(createP('Sir this is a Wendy\'s'));
    description.appendChild(createP('This website is for educational purposes only'));
    description.appendChild(createP('Sources can be found by following links on this page'));

    about.appendChild(title);
    about.appendChild(sources);
    about.appendChild(description);

    return about;
}

//Creates a p tag
function createP(text){
    const p = document.createElement('p');
    p.textContent = text;
    return p;
}

//Adds about to content
function renderAbout(){
    const content = document.getElementById('content');
    //content.textContent = '';
    content.appendChild(createAbout());
}

export default renderAbout;

