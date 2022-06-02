
function calcularPrecioConDescuento(precioOriginal, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento)/100; 

    return precioConDescuento;
}

function calcularAhorro(precioOriginal, descuento){
    const savingCalc = (precioOriginal * descuento)/100;  

    return savingCalc;
}

function PriceDiscount(){
    const inputPrice = document.querySelector("#inputPrice");
    const priceValue = inputPrice.value; 
    const inputDiscount = document.querySelector("#inputDiscount");
    const discountValue = inputDiscount.value; 
    const result = document.querySelector("#result");
    const savingResult = document.querySelector("#saving");
    const total = calcularPrecioConDescuento(priceValue, discountValue);
    const saving = calcularAhorro(priceValue, discountValue)
    result.innerText =  "$" + total;
    savingResult.innerText = "$" + saving;
}

const inputDiscount = document.querySelector("#inputDiscount");
inputDiscount.addEventListener("input", PriceDiscount);
const inputPrice = document.querySelector("#inputPrice");
inputPrice.addEventListener("input", PriceDiscount);