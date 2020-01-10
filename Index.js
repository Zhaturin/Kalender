var i; // Loopvariable

function init() {
    initUI();
    displayActivity();
}

function displayActivity() { 
    
    let activityH2 = document.getElementById('main-h2');
    activityH2.innerText = 'New activity';

    let formContainer = document.createElement('div');
    formContainer.id = 'form-container';
    document.getElementById('main-container').appendChild(formContainer);

    /*let divText = document.createElement('div');
    divText.className = 'textarea';
    divText.innerText = 'Add a new activity:';
    formContainer.appendChild(divText);*/

    // form
    let activityForm = document.createElement('form');
    formContainer.appendChild(activityForm);

    let labelActivity = document.createElement('label');
    labelActivity.innerText = 'Title:';
    activityForm.appendChild(labelActivity);

    let inputActivity = document.createElement('input');
    inputActivity.placeholder = 'Activity name...';
    inputActivity.type = 'text';
    activityForm.appendChild(inputActivity);

    let labelDate = document.createElement('label');
    labelDate.innerText = 'Date:';
    activityForm.appendChild(labelDate);

    let inputDate = document.createElement('input');
    inputDate.id = 'input-date';
    inputDate.type = 'date';
    activityForm.appendChild(inputDate);

    let labelDescription = document.createElement('label');
    labelDescription.innerText = 'Description:';
    activityForm.appendChild(labelDescription);

    let textDescription = document.createElement('textarea');
    textDescription.rows = 10;
    textDescription.cols = 45;
    textDescription.maxlength = 500;
    activityForm.appendChild(textDescription);
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

    let itemList = ['New activity', 'Calendar'];

    for(i = 0; i < itemList.length; i++) {
        let item = document.createElement('li');
        item.innerText = itemList[i];
        ul.appendChild(item);
    }
    // main
    let main = document.createElement('main');
    main.id = 'main-container';
    divWrapper.appendChild(main);

    let mainh2 = document.createElement('h2');
    mainh2.id = 'main-h2';
    mainh2.innerText = 'Front';
    main.appendChild(mainh2);
}

window.onload = init; // Make sure init is enabled when the page is loaded.