const categoryList = document.querySelector("#categoryList");

const params = new URLSearchParams(window.location.search);
const category = params.get("category");
let url = undefined;

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((categories) => {
    categories.forEach((category) => {
      categoryList.innerHTML += `<li><a href="kategori.html?category=${category.category}">${category.category}</a></li>`;
    });
    //categoryList.innerHTML = `<li>${categories}</li>`;
  });

if (params.has("category")) {
  url = "https://kea-alt-del.dk/t7/api/products?category=" + category;
} else {
  url = "https://kea-alt-del.dk/t7/api/products";
}

//Video tutorial
fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(showCategories);

function showCategories(categories) {
  categories.forEach(showCategory);
}
function showCategory(category) {
  //Fanger vores template
  const template = document.querySelector("template").content;
  //cloner
  const clone = template.cloneNode(true);
  //ændrer indhold
  clone.querySelector("a").textContent = category.category;
  clone.querySelector(
    "a"
  ).href = `produktliste.html?category=${category.category}`;

  //appenderer
  document.querySelector(".section_category ul").appendChild(clone);
}
