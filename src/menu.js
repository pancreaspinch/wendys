//Returns a borgar div
function createBorgar(name, alt, price, img) {
    const borgar = document.createElement('div');
    borgar.classList.add('borgar');

    const borgarImg = document.createElement('img');
    borgarImg.src = img;
    borgarImg.setAttribute('alt', alt);

    const borgarName = document.createElement('h2');
    borgarName.textContent = name;

    const borgarPrice = document.createElement('h4');
    borgarPrice.textContent = price;

    borgar.appendChild(borgarImg);
    borgar.appendChild(borgarName);
    borgar.appendChild(borgarPrice);

    return borgar;
}

//Returns a menu div with borgars
function createMenu() {
    const menu = document.createElement('div');

    const title = document.createElement('h1');
    title.textContent = 'WENDY\'S BURGER';
    menu.classList.add('menu');

    menu.appendChild(title);
    menuBorgars.forEach((borgar) => {
        menu.appendChild(borgar);
    });

    return menu;
}

//Adds menu to content
function renderMenu() {
    const content = document.getElementById('content');
    //content.textContent = '';
    content.appendChild(createMenu());
}

//Menu Items
//Refacor with JSON Later
const menuBorgars = [
    createBorgar(
        'Mushroom Melt Burger',
        'Mushroom Melt Burger',
        '¥540',
        'images/mushroom-melt.png'
    ),
    createBorgar(
        'Bacon Mushroom Melt Burger',
        'Bacon Mushroom Melt Burger',
        '¥690',
        'images/bacon-mushroom.png'       
    ),
    createBorgar(
       'Spicy Chicken Fillet Burger USA',
       'Spicy Chicken Fillet Burger USA',
       '¥490',
       'images/spicy-chicken.png'
    ),
    createBorgar(
        'Chicken Fillet Burger USA',
        'Chicken Fillet Burger USA',
        '¥490',
        'images/chicken-fillet.png'
    ),
    createBorgar(
        'Baconator USA Single',
        'Baconator USA Single',
        '¥570',
        'images/baconator-usa.png'
    ),
    createBorgar(
        'Baconator USA Double',
        'Baconator USA Double',
        '¥850',
        'images/baconator-usa-double.png'
    ),
    createBorgar(
        'Wendy’s Burger USA Single',
        'Wendy’s Burger USA Single',
        '¥550',
        'images/usa-single.png'
    ),
    createBorgar(
        'Wendy’s Burger USA Double',
        'Wendy’s Burger USA Double',
        '¥730',
        'images/usa-double.png'
    ),
    createBorgar(
        'Wendy’s Burger USA Triple',
        'Wendy’s Burger USA Triple',
        '¥960',
        'images/usa-triple.png'
    ),
    createBorgar(
        'WILD☆ROCK',
        'WILD☆ROCK',
        '¥680',
        'images/wild-rock.png'
    ),
];

export default renderMenu;