/**
 * პირობა იხილეთ HTML ფაილში
 */
const products = [
  {
    id: 1,
    name: "LG OLED TV",
    description: "65-inch OLED 4K Smart TV",
    image: "https://fakeimg.pl/150x150",
  },
  {
    id: 2,
    name: "Sonos Arc",
    description: "Premium Smart Soundbar",
    image: "https://fakeimg.pl/150x150",
  },
  {
    id: 3,
    name: "Dyson V15 Detect",
    description: "Cordless Vacuum Cleaner",
    image: "https://fakeimg.pl/150x150",
  },
  {
    id: 4,
    name: "Instant Pot Duo",
    description: "7-in-1 Electric Pressure Cooker",
    image: "https://fakeimg.pl/150x150",
  },
];

const toggleButton = document.getElementById("toggleButton");
const productList = document.getElementById("productList");

function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "card";

  const cardHeader = document.createElement("div");
  cardHeader.className = "card-header";

  const productInfo = document.createElement("div");
  productInfo.className = "product-info";

  const avatar = document.createElement("div");
  avatar.className = "avatar";

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;

  avatar.appendChild(img);

  const productName = document.createElement("div");
  productName.className = "product-name";

  const nameHeading = document.createElement("h3");
  nameHeading.textContent = product.name;

  const productDescription = document.createElement("p");
  productDescription.className = "product-info";
  productDescription.textContent = product.description;

  productName.appendChild(nameHeading);
  productName.appendChild(productDescription);

  productInfo.appendChild(avatar);
  productInfo.appendChild(productName);

  cardHeader.appendChild(productInfo);

  const cardContent = document.createElement("div");
  cardContent.className = "card-content";

  const productId = document.createElement("p");
  productId.className = "product-id";
  productId.textContent = `Product ID: ${product.id}`;

  cardContent.appendChild(productId);

  card.appendChild(cardHeader);
  card.appendChild(cardContent);

  return card;
}

function renderProducts() {
  productList.innerHTML = "";
  products.forEach((product) => {
    const card = createProductCard(product);
    productList.appendChild(card);
  });
}

toggleButton.addEventListener("click", () => {
  if (productList.style.display === "none" || productList.style.display === "") {
    renderProducts();
    productList.style.display = "block";
    toggleButton.textContent = "Hide Products";
  } else {
    productList.style.display = "none";
    toggleButton.textContent = "Show Products";
  }
});