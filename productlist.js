//OBS BRUGER IKKE!!
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //Looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  //fang template
  const template = document.querySelector("#productTemplate").content;
  //Lav kopi
  const copy = template.cloneNode(true);
  const imgURI = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

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

  //Forsøger at lægge til udregning af discount! FAILED!
  //if (product.discount){
  //copy.querySelector("article").classList.add("onSale");
  //copy.querySelector(".discounted p span") = Math.round(product.price -(product.price * product.discount) / 100);
  //copy.querySelector(".discounted p+p span").textContent = product.discount;
  //}
  // Hvis produktet er på udsalg, opdaterer vi rabatsektionen
  if (product.discount >= 1) {
    copy.querySelector(
      ".discounted p + p"
    ).textContent = `-${product.discount}%`;
    copy.querySelector(".discounted .on_sale").classList.add("onSale");
    copy.querySelector(".onSale").style.display = "block";
  }
  //Set på video tutorial
  // if (product.discount > 0) {
  //   copy.querySelector(
  //     ".discounted .on_sale"
  //   ).textContent = `Now DKK ${product.discountedprice},-`; //OBS hvordan finde discounted price?
  //   copy.querySelector(
  //     ".discounted p + p"
  //   ).textContent = `-${product.discount}%`;
  else {
    // Hvis der ingen rabat er, kan vi skjule eller fjerne rabatsektionen
    copy.querySelector(".discounted .on_sale").style.display = "none";
  }
  // Hvis produktet er udsolgt, tilføj soldOut-klassen til artikel
  if (product.soldout > 0) {
    copy.querySelector(".discounted .sold_out").classList.add("soldOut");
    copy.querySelector(".soldOut").style.display = "block";
  } else {
    copy.querySelector(".discounted .sold_out").style.display = "none";
  }
  //Forsøg på at få ind billede
  copy.querySelector("img").src = imgURI;
  copy.querySelector("img").alt = `image of ${product.productdisplayname}`;

  //Vist på video tutorial
  copy
    .querySelector(".read-more")
    .setAttribute("href", `produkt.html?id=${product.id}`);

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
