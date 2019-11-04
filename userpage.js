function getCurrentUser() {
    return JSON.parse(localStorage.getItem("Current User"));
}

function initSite() {

    if (getCurrentUser() == null) {
        alert("Vänligen logga in först")
        location.replace("login.html")
    }

    else {
        loadUserPage();
    }

}
 // TO DO!!!!!!!!
 /* JUST THE FIRST ORDER APPEAR ON USERPAGE - > WE WANT TO SEE ALL PREVIOUS ORDERS */

function loadUserPage() {
    var main = document.getElementById("main");
    var welcomeTitle = document.createElement("h1");
    var orderContainer = document.createElement("div");

    main.appendChild(welcomeTitle);
    main.appendChild(orderContainer);


    welcomeTitle.classList = "welcomeTitle";
    orderContainer.classList = "orderContainer";

    welcomeTitle.innerText = "Welcome to your cart";

    var ordersToPrint = getCurrentUser().orders
    console.log(ordersToPrint)

    for (var i = 0; i < ordersToPrint.length; i++) {
        var selectedOrder = ordersToPrint[i];

       

       

        var orderDate = document.createElement("p");

        var orderBox = document.createElement("div");
        orderDate.innerText = selectedOrder.date;


        orderContainer.appendChild(orderDate)
        orderContainer.appendChild(orderBox)


        for (var i = 0; i < selectedOrder.products.length; i++) {
            var selectedOrderProduct = selectedOrder.products[i];


            var productCard = document.createElement("div");
            productCard.classList = "PCdiv";

            var infolist = document.createElement("div");
            infolist.classList = "infodiv";

            var imageListItem = document.createElement("img");

            //Eftersom att bilderna inte ligger i rootmappen görs detta för att filsökvägen ska funka ordentligt
            imageListItem.classList = "productImage";
            var titleListItem = document.createElement("h1");
            var priceListItem = document.createElement("h4");
            var buttonDiv = document.createElement("div");

            imageListItem.setAttribute("src", "/assets/" + selectedOrderProduct.image);
            var buttonImg = document.createElement("img");
            buttonImg.setAttribute("src", "/assets/trash.png");
            var buttonListItem = document.createElement("button");
            buttonImg.classList = "imgL";
            buttonDiv.classList = "bDiv";
            buttonListItem.classList = "addButton";
            buttonListItem.num = i;
            buttonListItem.onclick = function () {
                removeFromCart(this.num);
            };
            buttonImg.onclick = function () {
                removeFromCart(this.num);
            };

            titleListItem.innerText = selectedOrderProduct.title;

            imageListItem.innerText = selectedOrderProduct.image;
            priceListItem.innerText = selectedOrderProduct.price + " kr";
            buttonListItem.innerHTML = "Ta bort";

            infolist.appendChild(imageListItem);
            infolist.appendChild(titleListItem);
            infolist.appendChild(priceListItem);
            infolist.appendChild(buttonDiv);
            buttonDiv.appendChild(buttonImg);
            buttonDiv.appendChild(buttonListItem);

            //productCard.appendChild(infolist);
            orderBox.appendChild(infolist);

        }


    }
    







} 