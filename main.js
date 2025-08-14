const products = [
  { name: "りんご", genre: "くだもの", price: 100 },
  { name: "みかん", genre: "くだもの", price: 80 },
  { name: "ぎゅうにゅう", genre: "のみもの", price: 150 },
  { name: "パン", genre: "たべもの", price: 200 },
];

const productList = document.getElementById("product-list");
const selectedList = document.getElementById("selected-list");
const totalEl = document.getElementById("total");
const searchInput = document.getElementById("search");

let total = 0;

function showProducts(filter = "") {
  productList.innerHTML = "";
  products
    .filter(p => p.name.includes(filter))
    .forEach(product => {
      const li = document.createElement("li");
      li.textContent = `${product.name}（¥${product.price}）`;
      li.onclick = () => {
  const item = document.createElement("li");

  // 商品名の表示
  const nameText = document.createElement("span");
  nameText.textContent = `${product.name} - ¥${product.price}`;

  // ❌ ボタンの作成
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.onclick = () => {
    selectedList.removeChild(item);
    total -= product.price;
    totalEl.textContent = `¥${total}`;
  };

  item.appendChild(nameText);
  item.appendChild(deleteBtn);
  selectedList.appendChild(item);

  total += product.price;
  totalEl.textContent = `¥${total}`;
};

      productList.appendChild(li);
    });
}

searchInput.addEventListener("input", () => {
  showProducts(searchInput.value);
});

showProducts();