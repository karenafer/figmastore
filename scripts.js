let products = [];
let total = 0;


function add(product, price){
    console.log(product, price)
    products.push(product);
    total = total + price;
    document.getElementsById("checkout").innerHTML = 'Pagar $$ {total}'
}

function pay(){
    window.alert(products.join(", \n")); 
}