//Forsøge på at følge video tutorial

//Lagt ind for at få frem billeder (uden held!)
const id = 1550; //OBS hvordan får jeg forskellige billeder?
const uri = `https://kea-alt-del.dk/t7/api/products/${id}`;
const imgURI = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;

fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //Looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //fang template
  const template = document.querySelector("#productTemplate").content;
  //Lav kopi
  const copy = template.cloneNode(true);
  //Ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  //if (product.soldout) {
  //Produktet er udsolgt
  //copy.querySelector("article").classList.add("soldOut");
  //}

  // ChatGPT!! Sæt produkttype, kategori og mærke i det første <p>-tag
  copy.querySelector(
    ".subtle"
  ).textContent = `${product.category}, ${product.articletype}, ${product.brand}`;

  // Sæt prisen i <p class="price">
  copy.querySelector(".price").textContent = `Prev. DKK ${product.price},-`;

  // Hvis produktet er på udsalg, opdaterer vi rabatsektionen
  if (product.discount > 0) {
    copy.querySelector(
      ".discounted p"
    ).textContent = `Now DKK ${product.discountedprice},-`;
    copy.querySelector(
      ".discounted p + p"
    ).textContent = `-${product.discount}%`;
  } else {
    // Hvis der ingen rabat er, kan vi skjule eller fjerne rabatsektionen
    copy.querySelector(".discounted").style.display = "none";
  }

  // Hvis produktet er udsolgt, tilføj soldOut-klassen til artikel
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }

  //Forsøg på at få ind billede (uden held!!!)
  copy.querySelector("img").src = imgURI;
  copy.querySelector("img").alt = `image of ${product.productdisplayname}`;

  copy
    .querySelector(".read-more")
    .setAttribute("href", `product.html?id=${product.id}`);
  //appende
  document.querySelector("main").appendChild(copy);
}

//Hentet fra product opgave
// window.addEventListener("DOMContentLoaded", init);

// const id = 1163;
// const uri = `https://kea-alt-del.dk/t7/api/products/${id}`;
// const imgURI = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;

// function init() {
//   fetch(uri)
//     .then((response) => response.json())
//     .then(handleData);
// }

// function handleData(json) {
//   console.log("json", json);

//   document.querySelector("h3").textContent = json.productdisplayname;
//   document.querySelector("p").textContent = json.brandbio;

//   document.querySelector("img").src = imgURI;
//   document.querySelector("img").alt = `image of ${json.productdisplayname}`;
// }

//CHatGPT hjælp
// window.addEventListener("DOMContentLoaded", init);

// const id = 1550;
// const uri = `https://kea-alt-del.dk/t7/api/products/${id}`;
// const imgURI = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;

// function init() {
//   fetch(uri)
//     .then((response) => response.json())
//     .then(handleData);
// }

// function handleData(json) {
//   console.log("json", json);

//   const template = document.querySelector("#productTemplate").content;
//   const clone = template.cloneNode(true);

//   clone.querySelector("h3").textContent = json.productdisplayname;
//   clone.querySelector(
//     ".subtle"
//   ).textContent = `${json.category}, ${json.subcategory}, ${json.brand}`;
//   clone.querySelector(".price").textContent = `DKK ${json.price},-`;
//   clone.querySelector(
//     ".discounted p"
//   ).textContent = `Now DKK ${json.discountedprice},-`;
//   clone.querySelector(".discounted p + p").textContent = `-${json.discount}%`;
//   clone.querySelector("img").src = imgURI;
//   clone.querySelector("img").alt = `image of ${json.productdisplayname}`;

//   document.querySelector("main").appendChild(clone);
// }
