// const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precioOriginal, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });


