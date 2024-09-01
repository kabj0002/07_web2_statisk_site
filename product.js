//https://kea-alt-del.dk/t7/images/webp/1000/1543.webp

const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));
//Hvad vi sender

//const imgURI = `https://kea-alt-del.dk/t7/images/webp/640/${productid}.webp`;

function showProduct(product) {
  //Hvad vi modtager
  console.log(product);
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
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${productid}.webp`;
}

//id: 1543, gender: "Men", category: "Footwear", subcategory: "Shoes", articletype: "Casual Shoes", basecolour: "Black", season: "Fall", productionyear: 2010, usagetype: "Casual", productdisplayname: "Basket-Biz Sneaker", … }
