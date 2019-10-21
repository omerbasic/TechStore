


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
var totalPrice = 0

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
      totalPrice += selectedProduct.price;
      console.log(totalPrice);
  
      var productCard = document.createElement("div");
      productCard.classList = "PCdiv";
  
      var infolist = document.createElement("div");
      infolist.classList = "infodiv";
  
      
      
      var imageListItem = document.createElement("img");
      
      //Eftersom att bilderna inte ligger i rootmappen görs detta för att filsökvägen ska funka ordentligt
      imageListItem.classList = "productImage";
      var titleListItem = document.createElement("h1");
      var priceListItem = document.createElement("h4");
      var buttonDiv = document.createElement("div")
      var imgLink = document.createElement("a")
      imageListItem.setAttribute("src", "/assets/" + selectedProduct.image);
      var buttonImg = document.createElement("img")
      buttonImg.setAttribute("src", "/assets/white_cart.png");
      var buttonListItem = document.createElement("button");

      buttonDiv.classList = "bDiv"
      buttonListItem.classList = "addButton"
      buttonListItem.num = i;
      buttonListItem.onclick = function() {
        removeFromCart(this.num);
      };
      imgLink.onclick = function() {
        removeFromCart(this.num);
      };
  
      titleListItem.innerText = selectedProduct.title;
      
      imageListItem.innerText = selectedProduct.image;
      priceListItem.innerText = selectedProduct.price + " kr";
      buttonListItem.innerHTML = "Ta bort från kundvagn";
  
      
      
      infolist.appendChild(imageListItem);
      infolist.appendChild(titleListItem);
      infolist.appendChild(priceListItem);
      infolist.appendChild(buttonDiv)
      buttonDiv.appendChild(imgLink);
      imgLink.appendChild(buttonImg)
      buttonDiv.appendChild(buttonListItem);
      
  
      //productCard.appendChild(infolist);
      container.appendChild(infolist);
    }
    
    var totalPriceContainer = getPriceElement()
    main.appendChild(totalPriceContainer);
    console.log(totalPriceContainer)

    var checkOutContainer = document.createElement("div");
    checkOutContainer.classList = "COC"
    main.appendChild(checkOutContainer);
    var checkOutImage = document.createElement("img");  
    checkOutImage.classList = "COCIMG"
    checkOutImage.setAttribute("src", "/assets/checked.png");
    checkOutContainer.appendChild(checkOutImage);
    var checkOutButton = document.createElement("button");
    checkOutButton.classList = "COCBUTT"
    checkOutButton.innerHTML = "Slutför ditt köp"
    checkOutContainer.appendChild(checkOutButton);
    
  } 


  function removeFromCart(title) {
   
   var cart = getCart()
   var productName = title;
  
    // Loop, if sats title == title
    
      
        console.log(productName)
        cart.splice(productName, 1);
        var	json_str	=	JSON.stringify(cart);	
        localStorage.doList	=	json_str;	
        //cartCounter();
        console.log(cart)
        location.reload();
        
    }
  
  
  
  //Lägger till produkt samt uppdaterar antalet produkter
  function getPriceElement() {
    
    var priceContainer = document.createElement("div");
    var textOutput = document.createElement("p");
    textOutput.classList = "totalPrice"
    
    if (totalPrice>0){
    textOutput.innerText = "Totalt pris:" + totalPrice + "kr"
    priceContainer.appendChild(textOutput)
    return priceContainer;
  }
  else {
    textOutput.innerText = "Din varukorg är tom"
    priceContainer.appendChild(textOutput)
    return priceContainer;
  }
  }
  
    

 

  /* function cartCounter () {
    document.getElementById("itemcounter").innerHTML = getCart().lenght;
  } */



  // ISSUE TO FIX:
  // div.PriceContainer CANNOT BE child element to main container
  // Otherwise the price will be on the side (flex box) and we want it to be at the bottom