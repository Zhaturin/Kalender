var i; // Loopvariable
var activeScreen = 0; //

function init() {
    initUI();       // Grafiska element
    createLogin();  // Kallar login.js
    createModal();  // Kallar login.js
}

function initUI() {
    // header
    let header = document.createElement('header');
    header.id = 'header';
    document.body.appendChild(header);

    let headerH1 = document.createElement('h1');
    headerH1.innerText = 'Calendar application 2000';
    header.appendChild(headerH1);

    // wrapper
    let divWrapper = document.createElement('div');
    divWrapper.id = 'wrapper';
    document.body.appendChild(divWrapper);

    // sidebar
    let divSidebar = document.createElement('div');
    divSidebar.id = 'sidebar';
    divWrapper.appendChild(divSidebar);

    let nav = document.createElement('nav');
    divSidebar.appendChild(nav);

    let ul = document.createElement('ul');
    nav.appendChild(ul);

    // Can't add an eventlistener in the for loop. 
    //Provat flera gånger. T.ex itemList[0] = addeventlistener btn1 eller adderat en till forloop men går ej.

    /*let itemList = ['New activity', 'Calendar'];

    for(i = 0; i < itemList.length; i++) {
        let item = document.createElement('li');
        item.innerText = itemList[i];
        ul.appendChild(item);
    }*/

    // list --- addEventListeners!
    let liActivitity = document.createElement('li');
    liActivitity.innerText = 'New activity';
    ul.appendChild(liActivitity);
    liActivitity.addEventListener('click', switchToActivity);

    let liCalendar = document.createElement('li');
    liCalendar.innerText = 'Calendar';
    ul.appendChild(liCalendar);
    liCalendar.addEventListener('click', switchToCalendar);

    // main
    let main = document.createElement('main');
    main.id = 'main-container';
    divWrapper.appendChild(main);

    let mainh2 = document.createElement('h2');
    mainh2.id = 'main-h2';
    mainh2.innerText = 'Welcome to Calendar';
    main.appendChild(mainh2);
}

window.onload = init; // Make sure init is enabled when the page is loaded.
