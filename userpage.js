function getCurrentUser() {
  return JSON.parse(localStorage.getItem("Current User"));
}
function getCart() {
    return JSON.parse(localStorage.getItem("doList")) || [];
  }

function initSite() {
  document.getElementById("itemcounter").innerHTML = getCart().length;
  if (getCurrentUser() == null) {
    alert("Vänligen logga in först");
    location.replace("login.html");
  } else {
    loadUserPage();
  }
}

function loadUserPage() {
  var main = document.getElementById("main");
  var welcomeTitle = document.createElement("h1");
  var orderContainer = document.createElement("div");

  main.appendChild(welcomeTitle);
  main.appendChild(orderContainer);

  welcomeTitle.classList = "welcomeTitle";
  orderContainer.classList = "orderContainer";

  welcomeTitle.innerText =
    "Welcome to your cart" + " " + getCurrentUser().username;

  var ordersToPrint = getCurrentUser().orders;

  for (var i = 0; i < ordersToPrint.length; i++) {
    var selectedOrder = ordersToPrint[i];
    var orderDate = document.createElement("p");
    orderDate.classList = "dateContainer";
    var orderBox = document.createElement("div");
    orderBox.classList = "ordersBox";
    orderDate.innerText = selectedOrder.date;

    for (var j = 0; j < selectedOrder.products.length; j++) {
      var selectedOrderProduct = selectedOrder.products[j];
      var testParagraf = document.createElement("p");
      testParagraf.innerText = selectedOrderProduct.title;
      orderBox.appendChild(testParagraf);

      var productCard = document.createElement("div");
      productCard.classList = "PCdiv";

      var infolist = document.createElement("div");
      infolist.classList = "infodiv";
    }

    orderContainer.appendChild(orderDate);
    orderContainer.appendChild(orderBox);
  }

  var butLogOut = document.createElement("button");
  main.appendChild(butLogOut);
  butLogOut.classList = "logoutButton";
  butLogOut.onclick = function() {
    localStorage.removeItem("Current User");
    window.location = "./login.html";
  };
  butLogOut.innerHTML = "Log Out";
}

/* function checkOut() {
  if (confirm("Vill du slutföra ditt köp?")) {
    var cart = getCart();
    addToUser(cart);

    cart.splice(0, cart.length);
    var json_str = JSON.stringify(cart);
    localStorage.doList = json_str;
    alert("Köp genomfört!");
    addProductsToWebpage(); */
