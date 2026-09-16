const products = [
    {id: 1,name:'Iphone',des:"this is a Iphone",price:1200,color:'Gray'},
    {id: 2,name:'Oppo',des:"this is a Oppo",price:200,color: 'SKyBlue'},
    {id: 3,name:'Vivo',des:"this is a Vivo",price:500,color: 'Red'},
    {id: 4,name:'Lexus',des:"this is a Lexus",price:800,color: 'Silver'},
    {id: 5,name:'Iphone',des:"this is a Iphone",price:1200,color:'Gray'},
    {id: 6,name:'Vivo',des:"this is a Vivo",price:500,color: 'Red'},
]

// Map
// const sum = products.map(products => products.id*2);
// console.log(sum);

// For Each
products.forEach(products =>{
    console.log(products.id)
});
