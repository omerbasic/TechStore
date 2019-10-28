var loggedIn = false;
var users = [
    {
        username: "username",
        password: "password",
        orders: [
            {
            date: 2000-05-23,
            products: [
                {
                    
                }
            ]
            }
        ]   
    },
    {
        username: "ensar",
        password: "michelle",
        orders: [
            {
            date: "",
            products: [
                {
                    
                }
            ]
            }
        ]   
    },
    {
        username: "",
        password: ""
    }
]

   




//För att logga in och lagra användre i localstorage
function validateForm(value1, value2) {
    
    console.log(value1, value2)
    var un = value1;
    var pw = value2;
    var userToLogIn = undefined

    users.forEach((user) => {
        if ((un == user.username) && (pw == user.password)) {
            userToLogIn = user
            alert ("success!")
            console.log(userToLogIn)
            loggedIn = true;
            localStorage.setItem('Current User', userToLogIn);
            
            check();
        }
    })

    localStorage.removeItem("loggedInUser")

    if(!userToLogIn) {
        alert ("Login was unsuccessful, please check your username and password");
        loggedIn = false;
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

// WHAT TO DO
// Login funktion + lagra i localstorage
// Registrera användare funktion + pusha in i users array
// Logout funktion + cleara localstorage
// for each loop i cart.js för att först kolla användrare och sedan pusha nuvarande cart in i users.orders.products