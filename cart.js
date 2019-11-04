//These functions return the data in local storage on demand
function getCart() {
  return JSON.parse(localStorage.getItem("doList"));
}
function getUsers() {
  return JSON.parse(localStorage.getItem("allaAnvändare"));
}
function getCurrentUser() {
  return JSON.parse(localStorage.getItem("Current User"));
}

var emptyCart = [];

function initSite() {
  //loadProducts();
  // This would also be a good place to initialize other parts of the UI

  addProductsToWebpage();
}

function addProductsToWebpage() {
  // Check your console to see that the products are stored in the listOfProducts varible.

  document.getElementById("itemcounter").innerHTML = getCart().length;
  var main = document.getElementsByTagName("main")[0];
  main.innerHTML = "";
  var titleContainer = document.createElement("div");
  var title = document.createElement("h1");
  var imageCartTitle = document.createElement("img");
  main.appendChild(titleContainer);
  titleContainer.appendChild(imageCartTitle);
  titleContainer.appendChild(title);
  titleContainer.classList = "cartContainer";
  imageCartTitle.classList = "cartImg";
  title.classList = "cartTitle";
  imageCartTitle.setAttribute("src", "/assets/cart_img.png");
  title.innerHTML = "Kundvagn";
  var totalPrice = 0;
  var container = document.createElement("div");
  container.classList = "container";
  main.appendChild(container);

  //** This loop is supposed to create a div for each product and also fill the div with relevant information */
  for (var i = 0; i < getCart().length; i++) {
    var selectedProduct = getCart()[i];
    console.log(selectedProduct);
    totalPrice += selectedProduct.price;
    console.log(totalPrice);

    /* var productCard = document.createElement("div");
    productCard.classList = "PCdiv"; */

    var infolist = document.createElement("div");
    infolist.classList = "infodiv";

    var imageListItem = document.createElement("img");

    //Eftersom att bilderna inte ligger i rootmappen görs detta för att filsökvägen ska funka ordentligt
    imageListItem.classList = "productImage";
    var titleListItem = document.createElement("h1");
    var priceListItem = document.createElement("h4");
    var buttonDiv = document.createElement("div");

    imageListItem.setAttribute("src", "/assets/" + selectedProduct.image);
    var buttonImg = document.createElement("img");
    buttonImg.setAttribute("src", "/assets/trash.png");
    var buttonListItem = document.createElement("button");
    buttonImg.classList = "imgL";
    buttonDiv.classList = "bDiv";
    buttonListItem.classList = "addButton";
    buttonListItem.num = i;
    buttonListItem.onclick = function() {
      removeFromCart(this.num);
    };
    buttonImg.onclick = function() {
      removeFromCart(this.num);
    };

    titleListItem.innerText = selectedProduct.title;

    imageListItem.innerText = selectedProduct.image;
    priceListItem.innerText = selectedProduct.price + " kr";
    buttonListItem.innerHTML = "Ta bort";

    infolist.appendChild(imageListItem);
    infolist.appendChild(titleListItem);
    infolist.appendChild(priceListItem);
    infolist.appendChild(buttonDiv);
    buttonDiv.appendChild(buttonImg);
    buttonDiv.appendChild(buttonListItem);

    //productCard.appendChild(infolist);
    container.appendChild(infolist);
  }

  var totalPriceContainer = getPriceElement(totalPrice);
  main.appendChild(totalPriceContainer);

  if (getCart() && getCart().length) {
    var checkOutContainer = document.createElement("div");
    checkOutContainer.classList = "COC";
    main.appendChild(checkOutContainer);
    var checkOutImage = document.createElement("img");
    checkOutImage.classList = "COCIMG";
    checkOutImage.setAttribute("src", "/assets/checkedOK.png");
    checkOutImage.onclick = function() {
      checkOut();
    };
    checkOutContainer.appendChild(checkOutImage);
    var checkOutButton = document.createElement("button");
    checkOutButton.classList = "COCBUTT";
    checkOutButton.onclick = function() {
      checkOut();
    };
    checkOutButton.innerHTML = "Slutför ditt köp";
    checkOutContainer.appendChild(checkOutButton);
  }
}

function removeFromCart(title) {
  var cart = getCart();
  var productName = title;

  // Loop, if sats title == title

  console.log(productName);
  cart.splice(productName, 1);
  var json_str = JSON.stringify(cart);
  localStorage.setItem("doList", json_str);
  //localStorage.doList = json_str;
  //cartCounter();
  console.log(getCart());

  addProductsToWebpage();
}

//Lägger till produkt samt uppdaterar antalet produkter
function getPriceElement(totalPrice) {
  var priceContainer = document.createElement("div");
  var textOutput = document.createElement("p");
  textOutput.classList = "totalPrice";

  if (getCart() && getCart().length) {
    textOutput.innerText = "Totalt pris:" + " " + " " + totalPrice + " " + "kr";
    priceContainer.appendChild(textOutput);
    return priceContainer;
  } else {
    textOutput.innerText = "Din varukorg är tom";
    priceContainer.appendChild(textOutput);
    return priceContainer;
  }
}

function checkOut() {
  if (confirm("Vill du slutföra ditt köp?")) {
    var cart = getCart();
    addToUser(cart);

    cart.splice(0, cart.length);
    var json_str = JSON.stringify(cart);
    localStorage.doList = json_str;
    alert("Köp genomfört!");
    addProductsToWebpage();
  }

  function addToUser(cart) {
    console.log("Hej");
    var modifiedLoggedInUser;
    var users = getUsers();
    users.forEach(user => {
      if (
        user.username == getCurrentUser().username &&
        user.password == getCurrentUser().password
      ) {
        modifiedLoggedInUser = user;
        var order = {
          date: new Date(),
          products: cart
        };
        user.orders.push(order);
        localStorage.setItem("Current User", JSON.stringify(user));
        localStorage.setItem("allaAnvändare", JSON.stringify(users));
      }
    });
  }

  /*  var cart = getCart()
    cart.splice(0, cart.length);
    var	json_str	=	JSON.stringify(cart);	
    localStorage.doList	=	json_str;	
    location.reload();
    testFunction();
 */
}

/* function testFunction(){
   if (confirm){
    var cart = getCart()
    cart.splice(0, cart.length);
    var	json_str	=	JSON.stringify(cart);	
    localStorage.doList	=	json_str;	
    location.reload();
    testFunction();
   }
  
 } */

/* function cartCounter () {
    document.getElementById("itemcounter").innerHTML = getCart().lenght;
  } */

// ISSUE TO FIX:
// div.PriceContainer CANNOT BE child element to main container
// Otherwise the price will be on the side (flex box) and we want it to be at the bottom
