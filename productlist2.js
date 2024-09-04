//Hentet på chatgpt

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  // Looper og kalder showProduct for hvert produkt
  products.forEach(showProduct);
}

function showProduct(product) {
  // Fang template
  const template = document.querySelector("#productTemplate").content;

  // Lav kopi af template
  const copy = template.cloneNode(true);
  const imgURI = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  // Ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;

  // Sæt produkttype, kategori og mærke i det første <p>-tag
  copy.querySelector(
    ".subtle"
  ).textContent = `${product.category} |  ${product.articletype} |  ${product.brandname}`;

  // Sæt prisen i <p class="price">
  copy.querySelector(".price").textContent = `DKK ${product.price},-`;

  // Hvis produktet er på udsalg, opdaterer vi rabatsektionen
  if (product.discount > 0) {
    const discountedPrice = Math.round(
      product.price - (product.price * product.discount) / 100
    );
    copy.querySelector(
      ".discounted p"
    ).textContent = `Now DKK ${discountedPrice},-`;
    copy.querySelector(
      ".discounted p + p"
    ).textContent = `-${product.discount}%`;
    copy.querySelector(".on_sale").style.display = "inline-block";
  } else {
    // Hvis der ingen rabat er, kan vi skjule rabatsektionen
    copy.querySelector(".discounted").style.display = "none";
  }

  // Hvis produktet er udsolgt, tilføj soldOut-klassen til artikel
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
    copy.querySelector(".sold_out").style.display = "inline-block";
  } else {
    copy.querySelector(".sold_out").style.display = "none";
  }

  // Sæt billede og alt-tekst
  copy.querySelector("img").src = imgURI;
  copy.querySelector("img").alt = `Image of ${product.productdisplayname}`;

  // Sæt linket til produktdetaljesiden
  copy
    .querySelector(".read-more")
    .setAttribute("href", `produkt.html?id=${product.id}`);

  // Append produktet til main-sektionen
  document.querySelector("main").appendChild(copy);
}
