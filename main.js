//Bienvenidos a LiezenSHOES!
alert('Bienvenido a LiezenShoes!!')
const carrito = []

const mostrarProductos = () =>{
    const listaProductos = productos.map(producto => {
        return '- '+producto.nombre+' $'+producto.precio
    })

    alert('Lista de productos:'+'\n\n'+listaProductos.join('\n'))
    comprarProducto()
}

const comprarProducto = () => {
    let productoNombre = ''
    let productoCantidad = 0
    let seguirComprando =  false

    do {
    productoNombre = prompt('¿Querés comprar praga, napoles o londres?')
    productoCantidad = parseInt(prompt('¿Cuantos queres comprar?'))

    const producto = productos.find(producto => producto.nombre.toLowerCase() === productoNombre.toLowerCase())

    if (producto){
        agregarAlCarrito(producto, producto.id, productoCantidad, producto.precio)
    }else{
        alert('El producto no se encuentra en stock!')
    }
    seguirComprando = confirm('¿Desea agregar otro producto?')
    } while (seguirComprando);
    calcularSubtotal()
}

const agregarAlCarrito = (producto,productoId, productoCantidad, precio) => {
    let subtotal = 0
    const productoRepetido = carrito.find(producto => producto.id == productoId)
    if (productoRepetido) {
        productoRepetido.cantidad += productoCantidad
        subtotal += precio * productoCantidad
    } else {
        producto.cantidad += productoCantidad
        carrito.push(producto)
    }
    console.log(carrito)

};

const calcularSubtotal = () => {
    let subtotal = 0
    carrito.forEach(producto => {
        subtotal += producto.cantidad  * producto.precio
    })


    alert("Subtotal: " + subtotal)
    calcularEnvio(subtotal)
}

//Envios
const calcularEnvio = (subtotal) => {
    const quiereEnvio = confirm('¿Querés envío a domicilio?')

    if (quiereEnvio && subtotal >= 20000) {
        alert('Tenés envio gratis. El total de la compra es: $'+subtotal)
    } else {
        subtotal += 1000
        alert('El envío cuesta $1000. El total mas envío es: $'+subtotal)
    }

    alert('El total a pagar es de  $'+subtotal+'. Gracias por su compra! LiezenShoes')
};

mostrarProductos()
