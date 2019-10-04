var listOfProducts;

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
    loadProducts();
    // This would also be a good place to initialize other parts of the UI
 
   
   
}


/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
    // Check your console to see that the products are stored in the listOfProducts varible.
    console.log(listOfProducts);
    var main = document.getElementsByTagName("main")[0]
    
    var container = document.createElement("div")
    container.classList = "container"




    main.appendChild(container)
    //** This loop is supposed to create a div for each product and also fill the div with relevant information */
    for (var i = 0; i < listOfProducts.length; i++){
        var selectedProduct = listOfProducts[i]

        var productCard = document.createElement("div")
        productCard.classList = "PCdiv"

        
            var infolist = document.createElement("div")
            infolist.classList ="infodiv"

            var titleListItem = document.createElement("h1")
            var descriptionListItem = document.createElement("p")
            var imageListItem = document.createElement("img")
            imageListItem.setAttribute('src',  '/assets/' + selectedProduct.image);
            var priceListItem = document.createElement("h4")

        titleListItem.innerText = selectedProduct.title
        descriptionListItem.innerText = selectedProduct.description
        imageListItem.innerText = selectedProduct.image
        priceListItem.innerText = selectedProduct.price

        
        
        infolist.appendChild(titleListItem)
        infolist.appendChild(descriptionListItem)
        infolist.appendChild(imageListItem)
        infolist.appendChild(priceListItem)

        productCard.appendChild(infolist)
        container.appendChild(productCard)

        

        
        

    }

    // Add your code here, remember to brake your code in to smaller function blocks
    // to reduce complexity and increase readability. Each function should have
    // an explainetory comment like the one for this function, see row 22.
    
    // TODO: Remove the console.log and these comments when you've read them.
}