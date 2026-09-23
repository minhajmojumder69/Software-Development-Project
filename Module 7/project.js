const allProduct = () => {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then((res) => res.json())
    .then((data) => displayProducts(data.drinks));
};

// const buttonsClick = document.getElementsByClassName("item-btn");
// for (const button of buttonsClick) {
//   button.addEventListener("click", function (event) {
//     event.preventDefault();
//     button.setAttribute("disabled", true);
//   });
// }

const displayProducts = (products) => {
  const productcontainer = document.getElementById("product-container");

  products.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("items-card");
    div.innerHTML = `
        <img class="card-img" src="${product.strDrinkThumb}"/>
        <h3>Name: ${product.strDrink}</h3>
        <h4>Category: ${product.strCategory}</h4>
        <h5>Instructions: ${product.strInstructions.slice(0, 100)}</h5>
        <button onclick="handletocart(this,'${product.strDrinkThumb}','${product.strDrink}')" class= "item-btn">Add to cart</button>
        <button onclick= "singleProduct('${product.idDrink}')" class= "item-btn" data-bs-toggle="modal" data-bs-target="#drinkModal">Details</button>
        
        `;

    productcontainer.appendChild(div);
    console.log(product);
  });
};

let count = 0;
const handletocart = (buttonElement,img, name) => {
  const cartconteiner = document.getElementById("cart-conteiner");
  if (count > 6) {
    alert("Can't select more then 7 items");
    return;
  }

  buttonElement.setAttribute("disabled", true);

  const div = document.createElement("div");
  div.classList.add("carts-card");
  div.innerHTML = `
        <img class="cart-img" src="${img}"/>
        <h3 class="name" >${name.slice(0, 10)}</h3>
        `;
  cartconteiner.appendChild(div);
  count = count + 1;
  document.getElementById("total").innerText = count;
};

const singleProduct = (id)=>{
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => response.json())
    .then((data) => {
      const drink = data.drinks[0];

      document.getElementById("modal-img").src = drink.strDrinkThumb;
      document.getElementById("modal-category").innerText = drink.strCategory;
      document.getElementById("modal-alcoholic").innerText = drink.strAlcoholic;
      document.getElementById("modal-instructions").innerText = drink.strInstructions;
    })
  }


allProduct();
