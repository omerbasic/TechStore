var users = [];
users = JSON.parse(localStorage.getItem("allaAnvändare"));
console.log(users)



function check(username, password) {
    
    var un = username;
    var pw = password;
    var userToLogIn = undefined

    users.forEach((user) => {
        if ((un == user.username) && (pw == user.password)) {
            userToLogIn = user
            alert ("success!")
            console.log(user)
            loggedIn = true;
            localStorage.setItem('Current User', JSON.stringify(userToLogIn));;
            testing();
        }
    })

    if(!userToLogIn) {
        alert ("Login was unsuccessful, please check your username and password");
        
        loggedIn = false;
    }
}



function testing(){
if (loggedIn = true){
console.log(loggedIn)
console.log("Hej!")



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
        orders: [
            
        ]   
    }

    users = users|| [];
    users.push(newUser)
    var allUsers = JSON.stringify(users);
    localStorage.allaAnvändare = allUsers;
    console.log(JSON.parse(localStorage.getItem("allaAnvändare")));
    users = localStorage.getItem("allaAnvändare");
    location.reload()
   
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
