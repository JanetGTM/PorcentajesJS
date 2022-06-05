//----------- Calcula el descuento del producto
function calcularPrecioConDescuento(precioOriginal, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento)/100; 
    return precioConDescuento;
}
//---------- Función que calcula la cantidad ahorrada
function calcularAhorro(precioOriginal, descuento){
    const savingCalc = (precioOriginal * descuento)/100;  
    return savingCalc;
}
//--------- Calcula que la cantidad del precio no sea demasiado alta
function topePrecio(){
    const inputPrice = document.querySelector("#inputPrice");
    const inputDiscount = document.querySelector("#inputDiscount");
    const result = document.querySelector("#result");
    const savingResult = document.querySelector("#saving");
    const alert = document.querySelector("#discountAlert");

    if (inputPrice.value > 99999 || inputPrice.value < 1){
        inputPrice.value = 0;
        savingResult.value = 0;
        result.innerText =  "$" + inputPrice.value;
        savingResult.innerText = "$" + savingResult.value;
        alert.style.display = "block";
        alert.innerText = "Introduce una cifra de máximo 5 dígitos";
        return inputPrice;
    }
    else{
        inputPrice.addEventListener("input", PriceDiscount);
        inputDiscount.addEventListener("input", PriceDiscount);
    }
}
//--------- Calcula que el descuento sea >1% y >= < 100%
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
// Función principal. Manda llamar las funciones de descuento y ahorro
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
//------ Campo precio y descuento nos llevan a la función principal
inputDiscount.addEventListener("input", PriceDiscount); 
inputPrice.addEventListener("input", PriceDiscount);
//----------  Calcula que el precio sea menos a cin mil
 inputPrice.addEventListener("input", topePrecio);
//------------ Calcula input descuento <= 100% y > 1% --------------//
inputDiscount.addEventListener("input", topeDescuento);