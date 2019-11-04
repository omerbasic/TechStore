var users = [];
users = JSON.parse(localStorage.getItem("allaAnvändare"));

function check(username, password) {
  var un = username;
  var pw = password;
  var userToLogIn = undefined;

  users.forEach(user => {
    if (un == user.username && pw == user.password) {
      userToLogIn = user;

      loggedIn = true;
      localStorage.setItem("Current User", JSON.stringify(userToLogIn));
      testing(user);
    }
  });

  if (!userToLogIn) {
    alert("Login was unsuccessful, please check your username and password");

    loggedIn = false;
  }
}

function testing(user) {
  if ((loggedIn = true)) {
    console.log(loggedIn);
    console.log("Hej!");
    console.log(user);
    location.replace("userpage.html");
  }
}

function logOut() {
  localStorage.removeItem("Current User");
  location.reload();
}

//För att registrera ny användare
function store(username, password) {
  var existingUsername = false;
  

  users.forEach(user => {
      if(username==user.username){
          existingUsername = true;
      }
});
          if (!existingUsername) {
            var newUser = {
              username: username,
              password: password,
              orders: []
            };
      
            users = users || [];
            users.push(newUser);
            var allUsers = JSON.stringify(users);
            localStorage.allaAnvändare = allUsers;
            users = localStorage.getItem("allaAnvändare");
            location.reload();
          } 
          else{
              alert("Username already exists");
          }
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
