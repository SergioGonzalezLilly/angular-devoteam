const aDatos = []

const visualizar = datos => console.log(datos)

// console.log(aDatos)

// aDatos = [8,7,6,5,4,3,2,1] // daría error

aDatos.push(1,8,7,6,5,3,2)
visualizar(aDatos)

// for (let i = 0; i < aDatos.length; i++) {
//     const item = aDatos[i];
//     visualizar(`El elemento ${i+1} del array vale ${item}`)
// }

aDatos.forEach((item, i) => {
    visualizar(`El elemento ${i+1} del array vale ${item}`)    
});

// const aDatosC = aDatos.map((item) => {
//   return item * item
// })
const aDatosC = aDatos.map(item => item * item)
visualizar(aDatosC)

const aDatosP = aDatos.filter(item => !(item % 2))
visualizar(aDatosP)
