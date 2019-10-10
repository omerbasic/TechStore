


/** Get products from the json file and store it in a gobal variable */
/* function loadProducts() {
    fetch("./products.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        loopArray = products;
        addProductsToWebpage();
    });
} */

function getCart(){
    return JSON.parse(localStorage.doList);
}
var cart = getCart();

function initSite() {
    //loadProducts();
    // This would also be a good place to initialize other parts of the UI
    
    document.getElementById("itemcounter").innerHTML = getCart().length;
    addProductsToWebpage();  
    
}


function addProductsToWebpage() {
    // Check your console to see that the products are stored in the listOfProducts varible.
    
    var main = document.getElementsByTagName("main")[0];
  
    var container = document.createElement("div");
    container.classList = "container";
    main.appendChild(container);
  
    //** This loop is supposed to create a div for each product and also fill the div with relevant information */
    for (var i = 0; i < cart.length; i++) {
      var selectedProduct = cart[i];
  
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
      var buttonListItem = document.createElement("button");
      buttonListItem.classList = "addButton"
      buttonListItem.num = i;
      buttonListItem.onclick = function() {
        removeFromCart(this.num);
      };
  
      titleListItem.innerText = selectedProduct.title;
      descriptionListItem.innerText = selectedProduct.description;
      imageListItem.innerText = selectedProduct.image;
      priceListItem.innerText = selectedProduct.price + " kr";
      buttonListItem.innerHTML = "Ta bort från kundvagn";
  
      infolist.appendChild(titleListItem);
      infolist.appendChild(descriptionListItem);
      infolist.appendChild(imageListItem);
      infolist.appendChild(priceListItem);
      infolist.appendChild(buttonListItem);
  
      productCard.appendChild(infolist);
      container.appendChild(productCard);
    }
  }

  function removeFromCart(title) {
   
   var cart = getCart()
   var productName = title;
  
    // Loop, if sats title == title
    
      
        console.log(productName)
        cart.splice(productName, 1);
        var	json_str	=	JSON.stringify(cart);	
        localStorage.doList	=	json_str;	
        räknare();
        console.log(cart)
        location.reload();
        
    }
  
  
  
  //Lägger till produkt samt uppdaterar antalet produkter
  function räknare() {
    
    document.getElementById("itemcounter").innerHTML = getCart().length;
    
  }
