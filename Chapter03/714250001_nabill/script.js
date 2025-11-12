// --- KODE ASLI ---
const products = {
  aetn: [
    { name: "AETN Hoodie Boxy Miracles White", price: 270000, img: "Aetn1.jpg" },
    { name: "AETN Hoodie White Black Series", price: 209000, img: "aetn2.jpg" },
    { name: "AETN Boxy 62", price: 300000, img: "aetn3.jpg" },
    { name: "AETN Boxy S10 Limited", price: 245000, img: "aetn4.jpg" },
    { name: "AETN Boxy S6 Limited", price: 450000, img: "aetn5.jpg" },
    { name: "AETN Boxy Star's Orbit", price: 200000, img: "aetn6.jpg" },
  ],
  chmb: [
    { name: "CHMB Zipper White", price: 700000, img: "chmb1.jpg" },
    { name: "CHMB Hoodie Black", price: 750000, img: "chmb2.jpg" },
    { name: "CHMB CHMBxPREFACE", price: 1250000, img: "chmb3.jpg" },
    { name: "CHMB Boxy Brown", price: 1350000, img: "chmb4.jpg" },
    { name: "CHMB Black Gray", price: 1480000, img: "chmb5.jpg" },
    { name: "CHMB Boxy Red", price: 1300000, img: "chmb6.jpg" },
  ],
  calle: [
    { name: "CALLE CALLExSNSB", price: 1650000, img: "calle1.jpg" },
    { name: "CALLE Boxy Zip Red", price: 1700000, img: "calle2.jpg" },
    { name: "CALLE Zip Up Black Red", price: 1800000, img: "calle3.jpg" },
    { name: "CALLE Boxy Zip Pink", price: 1750000, img: "calle4.jpg" },
    { name: "CALLE Boxy Zip Black", price: 1900000, img: "calle5.jpg" },
    { name: "CALLE Boxy Zip Yellow", price: 1650000, img: "calle6.jpg" },
  ],
};

function displayProducts(brand, containerId) {
  const container = document.getElementById(containerId);
  products[brand].forEach(item => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="product-info">
        <h3>${item.name}</h3>
        <p class="price">Rp ${item.price.toLocaleString("id-ID")}</p>
        <button class="add-cart">Tambah ke Keranjang</button>
      </div>
    `;
    container.appendChild(card);
  });
}

displayProducts("aetn", "aetn");
displayProducts("chmb", "chmb");
displayProducts("calle", "calle");

// --- TAMBAHAN LOGIKA INTERAKSI ---
let cart = [];

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-cart")) {
    const name = e.target.parentElement.querySelector("h3").textContent;
    const priceText = e.target.parentElement.querySelector(".price").textContent;
    const price = parseInt(priceText.replace(/[^\d]/g, ""));
    cart.push({ name, price });
    alert(`${name} telah ditambahkan ke keranjang!`);
  }
});

// Fungsi checkout
document.body.insertAdjacentHTML("beforeend", `
  <div style="position:fixed;bottom:20px;right:20px;z-index:999;">
    <button id="checkout">Checkout (${cart.length})</button>
  </div>
`);

const checkoutBtn = document.getElementById("checkout");
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Keranjang masih kosong!");
    return;
  }

  let total = cart.reduce((sum, item) => sum + item.price, 0);
  let metode = prompt(`Total belanja Rp ${total.toLocaleString("id-ID")}\n\nPilih metode pembayaran:\n1. Bank Transfer\n2. QRIS\n3. DANA\n4. GoPay\n\nKetik nomor pilihan:`);

  switch (metode) {
    case "1":
      alert("Silakan transfer ke rekening BCA: 123456789 a.n BIELSTORE");
      break;
    case "2":
      alert("QRIS Bielsstore akan segera ditampilkan!");
      break;
    case "3":
      alert("Silakan kirim ke DANA: 082134196609 a.n BIELSTORE");
      break;
    case "4":
      alert("Silakan kirim ke GoPay: 082134196609 a.n BIELSTORE");
      break;
    default:
      alert("Metode tidak valid. Silakan coba lagi.");
      return;
  }

  alert("Pembayaran berhasil! Terima kasih telah berbelanja di Bielsstore 💖");
  cart = [];
  document.getElementById("checkout").textContent = "Checkout (0)";
});
