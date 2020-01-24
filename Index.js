var i; // Loopvariable

function init() {
    initUI();
    addActivity();
}

function addActivity() { 
    
    let activityH2 = document.getElementById('main-h2');
    activityH2.innerText = 'New activity';

    let formContainer = document.createElement('div');
    formContainer.id = 'form-container';
    document.getElementById('main-container').appendChild(formContainer);

    // form
    let activityForm = document.createElement('form');
    formContainer.appendChild(activityForm);

    let labelActivity = document.createElement('label');
    labelActivity.innerText = 'Title: *';
    activityForm.appendChild(labelActivity);

    let inputActivity = document.createElement('input');
    inputActivity.id = 'input-activity';
    inputActivity.type = 'text';
    labelActivity.appendChild(inputActivity);

    let labelDate = document.createElement('label');
    labelDate.innerText = 'Date: *';
    activityForm.appendChild(labelDate);

    let inputDate = document.createElement('input');
    inputDate.id = 'input-date';
    inputDate.type = 'date';
    labelDate.appendChild(inputDate);

    let labelStartTime = document.createElement('label');
    labelStartTime.innerText = 'Start time:';
    labelStartTime.className = 'label-startend';
    activityForm.appendChild(labelStartTime);

    let inputStartTime = document.createElement('input');
    inputStartTime.type = 'time';
    labelStartTime.appendChild(inputStartTime);

    let labelEndTime = document.createElement('label');
    labelEndTime.innerText = 'End time:';
    labelEndTime.className = 'label-startend';
    activityForm.appendChild(labelEndTime);

    let inputEndTime = document.createElement('input');
    inputEndTime.type = 'time';
    labelEndTime.appendChild(inputEndTime);

    let labelDescription = document.createElement('label');
    labelDescription.innerText = 'Description:';
    activityForm.appendChild(labelDescription);

    let textDescription = document.createElement('textarea');
    textDescription.placeholder = 'Describe your activity...';
    textDescription.rows = 10;
    textDescription.cols = 45;
    textDescription.maxlength = 500;
    labelDescription.appendChild(textDescription);

    let mybr = document.createElement('br');
    activityForm.appendChild(mybr);

    let reqFields = document.createElement('label');
    reqFields.innerText = '*  Required fields';
    activityForm.appendChild(reqFields);

    // form submit button
    let formSubmitBtn = document.createElement('input');
    formSubmitBtn.id = 'form-btn';
    formSubmitBtn.value = 'Submit';
    formSubmitBtn.type = 'submit';
    activityForm.appendChild(formSubmitBtn);
    formSubmitBtn.addEventListener('click', addDisplay);

    // NOT DONE YET !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    function addDisplay(e) {
        var display = document.createElement('div');
        display.className = 'display-items';
    }
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