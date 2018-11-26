let x = 14
console.log(x)

function algo() {
  let z = 23
  if (true) {
    let z = 65
    console.log('En el bloque, z vale: ', z)
  }
  console.log('En la función, z vale: ', z)
  console.log(x)
}

algo()

// console.log(z)
