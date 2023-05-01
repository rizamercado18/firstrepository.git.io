function increment(){
    value = document.getElementById("prdcts").value;
    value++;
    document.getElementById("prdcts").value = value;
    document.getElementById("itemsnum").textContent = value;
    updatecost()
}

function decrement(){
    value = document.getElementById("prdcts").value;
    value--;
    document.getElementById("prdcts").value = value;
    document.getElementById("itemsnum").textContent = value;
    updatecost()
}

function updatecost(){

    price = 15.97;
    prdcts = parseFloat(document.getElementById("prdcts").value);
    itemCost = prdcts * price;
    document.getElementById("itemcost").innerHTML = "$" + itemCost.toFixed(2);

   
    ship = parseFloat(document.getElementById("ship").value);
    beforeTax = itemCost + ship;
    document.getElementById("tbT1").innerHTML = "$" + beforeTax.toFixed(2);

    
    etax = Math.round(parseFloat(beforeTax)*10)/100;
    document.getElementById("etax").innerHTML = "$" + etax.toFixed(2);

    
    ordertotal = beforeTax + etax;
    document.getElementById("ordertotal").innerHTML = "$" + ordertotal.toFixed(2);

    
    shipping = parseFloat(document.getElementById("ship").value);
    document.getElementById("shiphand").innerHTML = "$" + shipping.toFixed(2);
}