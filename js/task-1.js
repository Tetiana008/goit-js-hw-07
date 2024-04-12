const categoriesItems = document.querySelectorAll(".item");
console.log(`Numbers of categories: ${categoriesItems.length}`);

for (let i = 0; i < categoriesItems.length; i++) {
  const itemTitle = categoriesItems[i].querySelector("h2").textContent;
  const categoriesList = categoriesItems[i].querySelectorAll("ul > li");
  console.log(`Category: ${itemTitle}`);
  console.log(`Elements: ${categoriesList.length}`);
}














