
const loadAllProduct =()=>{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        displayProduct(data)
    });
}

const displayProduct = (products)=>{
    const productContainer = document.getElementById('product-container')

    products.forEach(product => {
        const div=document.createElement('div');
        div.classList.add('card')
        div.innerHTML= `
        <img class="card-img" src="${product.image}"/>
        <h5>${product.title.slice(0,20)}</h5>
        <h4>Price: ${product.price}</h4>
        <p>${product.description}</p>
        <button onclick= "singleProduct('${product.id}')">Details</button>
        <button onclick="handleAddtoCart('${product.title.slice(0,10)}','${product.price}')">Add to Cart</button>
        `;
        productContainer.appendChild(div);
    });
}

const handleAddtoCart = (name,price)=>{
    const cartcount = document.getElementById('count').innerText;
    let convertedCount = parseInt(cartcount);
    convertedCount = convertedCount +1;
    document.getElementById('count').innerText = convertedCount;

    const cartMainContainer = document.getElementById('cart-main-container');

    const div= document.createElement('div');
    div.classList.add('cartsItem')
    div.innerHTML= `
    <p>${name}</p>
    <h3 class="price" >${price}</h3>
    `;
    cartMainContainer.appendChild(div);
    UpdateTotal();
};

const UpdateTotal = ()=>{
    const allprice=document.getElementsByClassName('price');
    let count =0;
    for(const element of allprice){
        count = count + parseFloat(element.innerText);
    }
    document.getElementById('total').innerText = count.toFixed(2);
}

const singleProduct = (id)=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => response.json())
    .then(data => console.log(data));
}

loadAllProduct(); 