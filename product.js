//const id = 1551;
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

//const query = urlParams.get("id");

fetch(url) //Hvordan ændrer jeg produkt?
  .then((response) => response.json())
  .then((data) => showProduct(data));
//Hvad vi sender

function getProduct() {
  fetch(url)
    .then((response) => response.json())
    .then(showProduct);
}

function showProduct(product) {
  //Hvad vi modtager

  document.querySelector(".product_info .productdisplayname").textContent =
    product.productdisplayname;
  document.querySelector(".product_info .price").textContent = product.price;
  document.querySelector(".product_info .brand").textContent =
    product.brandname;
  document.querySelector(".product_info .category").textContent =
    product.category;
  document.querySelector(".product_info .article_type").textContent =
    product.articletype;
  document.querySelector(".product_info .color").textContent = product.color;
  document.querySelector(".product_info .inventory_number").textContent =
    product.id;
  document.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  //document.querySelector("img").alt = product.productdisplayname;
}

getProduct();
