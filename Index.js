var i; // Loopvariable

function init() {
    initUI();
    weekArr();
    createButton();
    createModal();
    createLogin();
    divideHours();
}

function createLogin(){
  var logintest = document.createElement("input");

  logintest.type = "button";
  logintest.value = 'Login';
  logintest.addEventListener("click", displayblock);

  document.getElementById('sidebar').appendChild(logintest);

  function displayblock() {
    document.getElementById("myModal").style.display = "block";
  }
}

function createModal(){
    var modal = document.createElement('div');
    modal.id = 'myModal';
    modal.classList.add("modal");
    document.body.appendChild(modal);

    var modalcontent = document.createElement('div');
    modalcontent.classList.add("modal-content");
    modal.appendChild(modalcontent);

    var modalcontainer = document.createElement('div');
    modalcontainer.classList.add('container');
    modalcontent.appendChild(modalcontainer);

    var inputem = document.createElement('Label');
    inputem.setAttribute('for', "email");
    inputem.innerHTML = 'Email: \n';
    modalcontainer.appendChild(inputem);

    var em = document.createElement("INPUT");
    em.setAttribute("type", "text");
    modalcontainer.appendChild(em);

    var br = document.createElement('br');
    modalcontainer.appendChild(br);
    var br = document.createElement('br');
    modalcontainer.appendChild(br);

    var inputpsw = document.createElement('Label');
    inputpsw.setAttribute('for', "Password");
    inputpsw.innerHTML = 'Password:';
    modalcontainer.appendChild(inputpsw);

    var psw = document.createElement("INPUT");
    psw.setAttribute("type", "text");
    modalcontainer.appendChild(psw);

    var br = document.createElement('br');
    modalcontainer.appendChild(br);
    var br = document.createElement('br');
    modalcontainer.appendChild(br);

    var submitbtn = document.createElement("BUTTON");
    submitbtn.type = 'submit';
    submitbtn.innerHTML = 'Confirm';
    submitbtn.classList.add("signupbtn");
    submitbtn.addEventListener("click", displaynone);
    modalcontainer.appendChild(submitbtn);

    function displaynone(){
        document.getElementById("myModal").style.display = "none";
    }
}


function createButton() {
    var button = document.createElement("input");

    button.type = "button";
    button.value = 'Delete';
    button.addEventListener("click", removeActivity);

    document.getElementById('main-container').appendChild(button);
}

function removeActivity() {
  console.log ("Deleted Activity Successfully!");
  //alert ("Deleted Activity Successfully!");
  var removethis = document.getElementById("main-container"); // <--write activity object name here
  removethis.remove();
}


function weekArr() {
  var titles = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  for (var i = 0; i < titles.length; i++) {
    let day = document.createElement('div');
  //  console.log(day);
    day.id = 'days';
  //  day.innerHTML = titles[i];
    document.getElementById('main-container').appendChild(day);
  }
}

function divideHours(){
  var hours = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"]
    for (var i = 0; i < hours.length; i++) {
      let hour = document.createElement('div');
  //  hour.id = 'hour';
      hour.innerHTML = hours[i];
      console.log(hour);
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
    mainh2.innerText = 'Calendar';
    main.appendChild(mainh2);
}

window.onload = init; // Make sure init is enabled when the page is loaded.
