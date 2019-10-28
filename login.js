


   





function validateForm() {
    var un = document.loginform.usr.value;
    var pw = document.loginform.pword.value;

    var users = [
        {
        username = "username",
        password = "password",
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
        username = "ensar",
        password = "michelle"
    }
]
    
   
    if ((un == users.username) && (pw == users.password)) {
        alert ("success!")
    }
    else {
        alert ("Login was unsuccessful, please check your username and password");
        
    }
}