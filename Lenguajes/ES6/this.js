const o = {
    name: 'Pepe',
    mostrar: function () {
        console.log(this)
    },
    mostrarA: () => console.log(this)
}

// ejecución tipo método
o.mostrar()

const otroMostrar = o.mostrar
const otroMostrarA = o.mostrarA
// ejecución tipo función
otroMostrar()

// ejecución tipo constructor
new mostrar()

// ejecución tipo apply
Object.apply()
Object.call()

o.mostrarA()
otroMostrarA()