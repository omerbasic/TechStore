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

   





function validateForm(value1, value2) {
    
    console.log(value1, value2)
    var un = value1;
    var pw = value2;
    var userToLogIn = undefined

    users.forEach((user) => {
        if ((un == user.username) && (pw == user.password)) {
            userToLogIn = user
            alert ("success!")
            console.log(user.orders.date)
            loggedIn = true;
            localStorage.setItem('name', name.value);
            localStorage.setItem('pw', pw.value);
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

function store(username, password){

    var newUser =  {
        username: username,
        password: password,
        orders: []   
    }

    users.push(newUser)
}

addOrder()
  
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