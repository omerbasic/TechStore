// Name and Password from the register-form
var name = document.getElementById('name');
var pw = document.getElementById('pw');

// storing input from register-form
function store() {
    localStorage.setItem('name', name.value);
    localStorage.setItem('pw', pw.value);
   
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
    if(userName.value == storedName && userPw.value == storedPw) {
        alert('You are logged in.');
        console.log(name, pw);
    }else {
        alert('Username or password are incorrect');
        console.log(name, pw);
    }
}

function check(){
if (loggedIn = true){
console.log(loggedIn)


}
}

function logOut(){

    location.reload();
}

//För att registrera ny användare
function store(username, password){

    var newUser =  {
        username: username,
        password: password,
        orders: []   
    }

    users.push(newUser)
}

//addOrder()
  
/*   users[0].push({
    name: regName,
    age: regPw
  });
}

users[0]['orders'].push({
    date: Date
})
users[0]['orders']['products'].push({
    cart
}) */
