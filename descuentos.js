function calcularPrecioConDescuento(precioOriginal, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento)/100; 
    return precioConDescuento;
}

function calcularAhorro(precioOriginal, descuento){
    const savingCalc = (precioOriginal * descuento)/100;  
    return savingCalc;
}

function topeDescuento(){
    const inputPrice = document.querySelector("#inputPrice");
    const inputDiscount = document.querySelector("#inputDiscount");
    const result = document.querySelector("#result");
    const savingResult = document.querySelector("#saving");
    const alert = document.querySelector("#discountAlert");

    if (inputDiscount.value > 100 || inputDiscount.value < 1){
        inputDiscount.value = "";
        result.innerText =  "$" + inputPrice.value;
        savingResult.innerText = "$0";
        alert.style.display = "block";
        alert.innerText = "Introduce un porcentaje entre 1% y 100%";
        return inputDiscount;
    }
    else{
        inputDiscount.addEventListener("input", PriceDiscount);
        inputPrice.addEventListener("input", PriceDiscount);
    }
}

function PriceDiscount(){
    const inputPrice = document.querySelector("#inputPrice");
    const priceValue = inputPrice.value; 
    const inputDiscount = document.querySelector("#inputDiscount");
    const discountValue = inputDiscount.value; 
    const result = document.querySelector("#result");
    const savingResult = document.querySelector("#saving");
    const alert = document.querySelector("#discountAlert");
    alert.style.display = "none";
    const total = calcularPrecioConDescuento(priceValue, discountValue);
    const saving = calcularAhorro(priceValue, discountValue)
    result.innerText =  "$" + total;
    savingResult.innerText = "$" + saving;
}

inputDiscount.addEventListener("input", PriceDiscount);
inputPrice.addEventListener("input", PriceDiscount);
//------------ Calcula input descuento < 100% y > 1% --------------//
inputDiscount.addEventListener("input", topeDescuento);