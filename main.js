var listOfProducts;

var iKundvagn = [];

/** Get products from the json file and store it in a gobal variable */
function loadProducts() {
  fetch("./products.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(products) {
      listOfProducts = products;
      addProductsToWebpage();
    });
}

function initSite() {
  // Skriver ut antalet varor i kundvagn vilket är satt till 0 när sidan laddas

  loadProducts();
  var cart = localStorage.doList
  if(cart) {
    iKundvagn = JSON.parse(cart)
  }
  document.getElementById("itemcounter").innerHTML = iKundvagn.length;
  console.log(iKundvagn);
}

/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
 
  console.log(listOfProducts);
  var main = document.getElementsByTagName("main")[0];

  var container = document.createElement("div");
  container.classList = "container";
  main.appendChild(container);

  //** This loop is supposed to create a div for each product and also fill the div with relevant information */
  for (var i = 0; i < listOfProducts.length; i++) {
    var selectedProduct = listOfProducts[i];

    var productCard = document.createElement("div");
    productCard.classList = "PCdiv";

    var infolist = document.createElement("div");
    infolist.classList = "infodiv";

    var titleListItem = document.createElement("h1");
    var descriptionListItem = document.createElement("p");
    var imageListItem = document.createElement("img");
    imageListItem.setAttribute("src", "/assets/" + selectedProduct.image);
    //Eftersom att bilderna inte ligger i rootmappen görs detta för att filsökvägen ska funka ordentligt
    imageListItem.classList = "productImage";
    var priceListItem = document.createElement("h4");
    var buttonDiv = document.createElement("div");
    buttonDiv.classList = "buttonClass";
    var buttonImg = document.createElement("img");
    buttonImg.setAttribute("src", "/assets/cart_arrow.png");
    buttonImg.classList = "imgClass";
    buttonImg.name = selectedProduct.title;
    buttonImg.onclick = function() {
      addToCart(this.name);
    };
    var buttonListItem = document.createElement("button");
    buttonListItem.classList = "addButton";
    buttonListItem.name = selectedProduct.title;
    buttonListItem.onclick = function() {
      addToCart(this.name);
    };

    titleListItem.innerText = selectedProduct.title;
    descriptionListItem.innerText = selectedProduct.description;
    imageListItem.innerText = selectedProduct.image;
    priceListItem.innerText = selectedProduct.price + " kr";
    buttonListItem.innerHTML = "Lägg till i kundvagn";

    infolist.appendChild(titleListItem);
    infolist.appendChild(descriptionListItem);
    infolist.appendChild(imageListItem);
    infolist.appendChild(priceListItem);
    infolist.appendChild(buttonDiv);
    buttonDiv.appendChild(buttonImg);
    buttonDiv.appendChild(buttonListItem);

    productCard.appendChild(infolist);
    container.appendChild(productCard);
  }
}

function addToCart(title) {
  

  var productToAdd = title;

 
  for (var i = 0; i < listOfProducts.length; i++) {
    if (productToAdd == listOfProducts[i].title) {
      iKundvagn.push(listOfProducts[i]);
      var json_str = JSON.stringify(iKundvagn);
      localStorage.doList = json_str;

      räknare();
    }
  }


}
//Lägger till produkt samt uppdaterar antalet produkter
function räknare() {
 
  document.getElementById("itemcounter").innerHTML = iKundvagn.length;
}
