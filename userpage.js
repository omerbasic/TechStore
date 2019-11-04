function getCurrentUser(){
    return JSON.parse(localStorage.getItem("Current User"));
  }

function initSite(){

    if (getCurrentUser() == null){
        alert("Vänligen logga in först")
        location.replace("login.html")
    }

    else{
       loadUserPage();
    }

}


function loadUserPage(){

}