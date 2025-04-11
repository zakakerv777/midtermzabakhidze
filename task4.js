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
    {
      id: 5,
      name: "Bose Noise Cancelling Headphones 700",
      description: "Over-ear wireless headphones",
      image: "https://fakeimg.pl/150x150",
    },
    {
      id: 6,
      name: "Samsung Smart Refrigerator",
      description: "Family Hub Refrigerator with touchscreen display",
      image: "https://fakeimg.pl/150x150",
    },
    {
      id: 7,
      name: "Roomba i7+",
      description: "Robot Vacuum with Automatic Dirt Disposal",
      image: "https://fakeimg.pl/150x150",
    },
    {
      id: 8,
      name: "Ninja Foodi Grill",
      description: "Indoor Grill and Air Fryer",
      image: "https://fakeimg.pl/150x150",
    },
    {
      id: 9,
      name: "Apple HomePod",
      description: "Smart speaker with Siri",
      image: "https://fakeimg.pl/150x150",
    },
    {
      id: 10,
      name: "Breville Barista Express",
      description: "Espresso Machine",
      image: "https://fakeimg.pl/150x150",
    },
  ];

  const searchInput = document.getElementById("search");
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
function renderProducts(filteredProducts) {
  productList.innerHTML = "";
  filteredProducts.forEach((product) => {
    const card = createProductCard(product);
    productList.appendChild(card);
  });
}
searchInput.addEventListener("input", (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );
  renderProducts(filteredProducts);
});

renderProducts(products);