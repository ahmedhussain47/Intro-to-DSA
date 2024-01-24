//JavaScript  modern syntex

var name11 = "Ahmed";
// const name1 = "Ahmed";
function name(){
    console.log(name11)
    var sdfsdfsdf = "Ahmed";

}

name()
if(true){
    var sdfsdfsdf1 = "Ahmed"; // var chalega even outside of its block

    const sdfsdfsdf2 = "Ahmed"; // const won't work outside of its block

}
console.log(sdfsdfsdf1)


const products = [
    {
      id: 1,
      name: "Product One",
      price: 100,
    },
    {
      id: 2,
      name: "Product Two",
      price: 200,
    },
    {
      id: 3,
      name: "Product Three",
      price: 300,
    },
    {
      id: 4,
      name: "Product Four",
      price: 400,
    },
  ];

//   console.time()
//   products.forEach((singleData)=>{
//     console.log(singleData)
//   })
//   console.timeEnd()

//   console.time()
//   products.map((singleData)=>{
//     console.log(singleData)
//   })
//   console.timeEnd()

//   console.time()
//   products.filter((singleData)=>{
//     console.log(singleData)
//   })
//   console.timeEnd()


// products.map((singleData)=>{
//     console.log(singleData.id)
//   })

// it will filter values and return it in a diffrent Array.

// PROD = products.filter((singleData)=>singleData.id)
// PROD = products.filter((singleData)=>singleData.price > 300)

// console.log(PROD)

productArray = products
  .map((singleData)=>singleData.id)
  .filter((singleData)=>singleData === 1)

console.log(productArray,products)

prodt = products
  .findIndex((singleData)=>singleData.id===1)
console.log(prodt)


prodSome = products.some((singleData)=>singleData.price>300)
console.log(prodt)