
//Bienvenidos a LiezenSHOES!
alert('Bienvenido a LiezenShoes!!!!!!!')

const comprarProducto = () => {
    let producto = ''
    let cantidad = 0
    let precio = 0
    let subtotal = 0
    let seguirComprando = false

    do {
        producto = prompt('¿Querés comprar praga, napoles o Ambos?')
        cantidad = parseInt(prompt('¿Cuántos queres comprar?'))

        let cantidadValidada = validarCantidad(cantidad)

        switch (producto) {
            case 'praga':
                precio = 3000
                break
            case 'napoles':
                precio = 3600
                break
            case 'ambos':
                precio = 6600
                break
            default:
                alert('Alguno de los datos ingresados no es correcto!')
                precio = 0
                cantidadValidada = 0
                break
        }

        subtotal += precio * cantidadValidada

        seguirComprando = confirm('¿Desea seguir comprando?')
    } while (seguirComprando)

    return subtotal
}


//Validad cantidad
const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad === 0) {
        alert('Debe de agregar una cantidad válida!')
        cantidad = parseInt(prompt('¿Cuántos queres comprar?'))
    }

    return cantidad
};


//Descuentos
const aplicarDescuento = (subtotal) => {
    const descuento = 0.80

    if (subtotal >= 20000) {
        return subtotal * descuento
    } else {
        return subtotal
    }
};

//Envios
const calcularEnvio = (subtotal) => {
    const quiereEnvio = confirm('¿Querés envío a domicilio?')

    if (quiereEnvio && subtotal >= 20000) {
        alert('Tenés envio gratis. El total de la compra es: $'+subtotal)
    } else if (quiereEnvio && subtotal < 4000) {
        subtotal += 1000
        alert('El envío cuesta $1000. El total mas envío es: $'+subtotal)
    } else {
        alert('El total de tu compra es: $'+subtotal)
    }

    return subtotal
};

const mostrarDetalleDeCompra = (precioFinal) => {
    alert('El total a pagar es de  $'+precioFinal+'. Gracias por su compra! LiezenShoes')
};

const subtotal = comprarProducto()

const subtotalConDescuento = aplicarDescuento(subtotal)

const precioFinal = calcularEnvio(subtotalConDescuento)

mostrarDetalleDeCompra(precioFinal)