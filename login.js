/* ------------- OSCARS DEL ------------- */

function createLogin(){
    var logintest = document.createElement("input");
  
    logintest.type = "button";
    logintest.value = 'Log in';
    logintest.id = 'login-btn';
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
    inputem.className = 'login-labels';
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
    inputpsw.className = 'login-labels';
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