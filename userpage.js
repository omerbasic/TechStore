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

function loadUserPage() {
    var main = document.getElementById("main");
    var welcomeTitle = document.createElement("h1");
    var orderContainer = document.createElement("div");

    main.appendChild(welcomeTitle);
    main.appendChild(orderContainer);


    welcomeTitle.classList = "welcomeTitle";
    orderContainer.classList = "orderContainer";

    welcomeTitle.innerText = "Welcome to your cart" + " " + getCurrentUser().username;

    var ordersToPrint = getCurrentUser().orders
    console.log(ordersToPrint)

   

    for (var i = 0; i < ordersToPrint.length; i++) {
        console.log(i);
        console.log(ordersToPrint);
        var selectedOrder = ordersToPrint[i];
        var orderDate = document.createElement("p");
        orderDate.classList = "dateContainer";
        var orderBox = document.createElement("div");
        orderBox.classList = "ordersBox";
        orderDate.innerText = selectedOrder.date;

        


        for (var j = 0; j < selectedOrder.products.length; j++) {
            var selectedOrderProduct = selectedOrder.products[j];
            var testParagraf = document.createElement("p");
            testParagraf.innerText = selectedOrderProduct.title
            orderBox.appendChild(testParagraf);

            var productCard = document.createElement("div");
            productCard.classList = "PCdiv";

           var infolist = document.createElement("div");
           infolist.classList = "infodiv";

          

        } 

        orderContainer.appendChild(orderDate)
        orderContainer.appendChild(orderBox)
    }
    
} 