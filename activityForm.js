function switchToActivity() { 
    if (activeScreen == 1) {
        return;                  // Avslutar funktionen efter 1 gång så det inte kommer fler fönster.
    }

    activeScreen = 1;

    document.getElementById('main-container').innerHTML = '';
    
    let activityH2 = document.createElement('h2');
    activityH2.innerText = 'New activity';
    document.getElementById('main-container').appendChild(activityH2);

    let formContainer = document.createElement('div');
    formContainer.id = 'form-container';
    document.getElementById('main-container').appendChild(formContainer);

    // form
    let activityForm = document.createElement('form');
    formContainer.appendChild(activityForm);

    let labelActivity = document.createElement('label');
    labelActivity.innerText = 'Title: *';
    activityForm.appendChild(labelActivity);

    // input TITLE
    let inputActivity = document.createElement('input');
    inputActivity.id = 'input-activity';
    inputActivity.type = 'text';
    inputActivity.value = '';
    //inputActivity.required = 'input-activity';
    labelActivity.appendChild(inputActivity);

    let labelDate = document.createElement('label');
    labelDate.innerText = 'Date: *';
    activityForm.appendChild(labelDate);

    // input DATE
    let inputDate = document.createElement('input');
    inputDate.id = 'input-date';
    inputDate.type = 'date';
    inputDate.value = '';
    //inputDate.required = 'input-date';
    labelDate.appendChild(inputDate);

    let labelStartTime = document.createElement('label');
    labelStartTime.innerText = 'Start time: *';
    labelStartTime.className = 'label-startend';
    activityForm.appendChild(labelStartTime);

    // input START TIME
    let inputStartTime = document.createElement('input');
    inputStartTime.type = 'time';
    //inputStartTime.required = 'time';
    inputStartTime.value = '';
    labelStartTime.appendChild(inputStartTime);

    let labelEndTime = document.createElement('label');
    labelEndTime.innerText = 'End time: *';
    labelEndTime.className = 'label-startend';
    activityForm.appendChild(labelEndTime);

    // input END TIME
    let inputEndTime = document.createElement('input');
    inputEndTime.type = 'time';
    //inputEndTime.required = 'time';
    inputEndTime.value = '';
    labelEndTime.appendChild(inputEndTime);

    let labelDescription = document.createElement('label');
    labelDescription.innerText = 'Description:';
    activityForm.appendChild(labelDescription);

    // textarea (not required)
    let textDescription = document.createElement('textarea');
    textDescription.placeholder = 'Describe your activity...';
    textDescription.rows = 10;
    textDescription.cols = 45;
    textDescription.maxlength = 500;
    textDescription.value = '';
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

    // SUBMIT BUTTON ADDEVENTLISTENER

    /** När man klickar på submit knappen så kommer man till "startsidan. Oklart varför. */
    formSubmitBtn.addEventListener('click', addDisplay);

    //let userInputObj = [];

    function addDisplay() {
        let saveInputs = [];
        let userInput = inputActivity.value + inputDate.value + inputStartTime.value + inputEndTime.value + textDescription.value;
        let divDisplay = document.createElement('div');
        divDisplay.className = 'display-items';
        divDisplay.innerText = userInput;
        saveInputs.push(userInput);
        document.getElementById('form-container').appendChild(divDisplay);
    }
}