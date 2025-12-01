/* ============================================================
   CONFIG
============================================================ */
const nomorWA = "6282114527948";

/* ============================================================
   HELPERS
============================================================ */
function formatBerat(gram) {
  if (gram >= 1000) {
    let kg = gram / 1000;
    return (kg % 1 === 0 ? kg : kg.toFixed(2)) + " kg";
  }
  return gram + " gr";
}

/* ============================================================
   DATA PRODUK
============================================================ */
const produkList = [
  {
    nama: "Papir MILD MERAH 1 Bundel Utuh",
    merk: "OJK",
    rasa: "Manis Sedang",
    isi: 2000,
    size: "4x9 cm",
    harga: 21000,
    stok: 1000,
    berat: 200,
    kategori: "PAPIR / KERTAS LINTING",
    gambar: [
      "gambar/PAPIR/MILD_MERAH/IMG-20251122-WA0042.jpg",
      "gambar/PAPIR/MILD_MERAH/MILD_MERAH 1.jpg",
      "gambar/PAPIR/MILD_MERAH/MILD_MERAH 2.jpg"
    ],
    deskripsi: [
      "Nikmati Citarasa Lintingan Sendiri.",
      "Nyalakan Semangat Mu...",
      "Bangkitkan Inspirasi Mu...",
      "Happy Kaum Lintingers..."
    ],
  },
  {
    nama: "Papir MILD Hijau 1 Bundel Utuh",
    merk: "OJK",
    rasa: "Manis Sedang",
    isi: 2000,
    size: "4x9 cm",
    harga: 21000,
    stok: 1000,
    berat: 200,
    kategori: "PAPIR / KERTAS LINTING",
    gambar: [
      "gambar/PAPIR/MILD_HIJAU/MILD_HIJAU-3.jpg",
      "gambar/PAPIR/MILD_HIJAU/MILD_HIJAU-2.jpg",
      "gambar/PAPIR/MILD_HIJAU/MILD_HIJAU-1.jpg"
    ],
    deskripsi: [
      "Nikmati Citarasa Lintingan Sendiri.",
      "Nyalakan Semangat Mu...",
      "Bangkitkan Inspirasi Mu...",
      "Happy Kaum Lintingers..."
    ],
  },
  {
    nama: "DUNMIL Papir 1 Bundel Besar Utuh 2.000 Lembar",
    merk: "OJK",
    rasa: "Manis Sedang",
    isi: 2000,
    size: "4x9 cm",
    harga: 21000,
    stok: 1000,
    berat: 200,
    kategori: "PAPIR / KERTAS LINTING",
    gambar: [
      "gambar/PAPIR/DUNMIL_Papir_1 Bundel_Besar_Utuh_2.000_Lembar/MILD_PINK-2.jpg",
      "gambar/PAPIR/DUNMIL_Papir_1 Bundel_Besar_Utuh_2.000_Lembar/IMG-20251122-WA0028.jpg",
      "gambar/PAPIR/DUNMIL_Papir_1 Bundel_Besar_Utuh_2.000_Lembar/IMG-20251122-WA0041.jpg"
    ],
    deskripsi: [,
      "Nikmati Citarasa Lintingan Sendiri.",
      "Nyalakan Semangat Mu...",
      "Bangkitkan Inspirasi Mu...",
      "Happy Kaum Lintingers..."
    ],
  },
    {
    nama: "LA Papir 1 Bundel Besar Utuh 2.000 lembar",
    merk: "OJK",
    rasa: "Manis Sedang",
    isi: 2000,
    size: "4x9 cm",
    harga: 21000,
    stok: 1000,
    berat: 200,
    kategori: "PAPIR / KERTAS LINTING",
    gambar: [
      "gambar/PAPIR/LA_PPAPIR_1_BANDEL_BESAR_UTUH_2.000_LEMBAR/IMG-20251122-WA0048.jpg",
      "gambar/PAPIR/LA_PPAPIR_1_BANDEL_BESAR_UTUH_2.000_LEMBAR/IMG-20251122-WA0049.jpg",
      "gambar/PAPIR/LA_PPAPIR_1_BANDEL_BESAR_UTUH_2.000_LEMBAR/IMG-20251122-WA0030.jpg"
    ],
    deskripsi: [
      "Nikmati Citarasa Lintingan Sendiri.",
      "Nyalakan Semangat Mu...",
      "Bangkitkan Inspirasi Mu...",
      "Happy Kaum Lintingers..."
    ],
  },
    {
    nama: "CLASS MILD Papir 1 Bundel Besar Utuh 2.000 lembar",
    merk: "OJK",
    rasa: "Manis Sedang",
    isi: 2000,
    size: "4x9 cm",
    harga: 21000,
    stok: 1000,
    berat: 200,
    kategori: "PAPIR / KERTAS LINTING",
    gambar: [
      "gambar/PAPIR/CLASS_MILD_PAPIR_1_BANDEL_BESAR_UTUH_2.000_LEMBAR/IMG-20251122-WA0037.jpg",
      "gambar/PAPIR/CLASS_MILD_PAPIR_1_BANDEL_BESAR_UTUH_2.000_LEMBAR/IMG-20251122-WA0027.jpg",
      "gambar/PAPIR/CLASS_MILD_PAPIR_1_BANDEL_BESAR_UTUH_2.000_LEMBAR/IMG-20251122-WA0041.jpg"
    ],
    deskripsi: [
      "Nikmati Citarasa Lintingan Sendiri.",
      "Nyalakan Semangat Mu...",
      "Bangkitkan Inspirasi Mu...",
      "Happy Kaum Lintingers..."
    ],
  },
    {
    nama: "EXLUSIVE Papir 1 Bundel Besar Utuh 2.000 lembar",
    merk: "OJK",
    rasa: "Manis Sedang",
    isi: 2000,
    size: "4x9 cm",
    harga: 21000,
    stok: 1000,
    berat: 200,
    kategori: "PAPIR / KERTAS LINTING",
    gambar: [
      "gambar/PAPIR/EXLUSIVE-Papir-1-Bundel-Besar-Utuh-2.000-lembar/IMG-20251122-WA0038.jpg",
      "gambar/PAPIR/EXLUSIVE-Papir-1-Bundel-Besar-Utuh-2.000-lembar/IMG-20251122-WA0024.jpg",
      "gambar/PAPIR/EXLUSIVE-Papir-1-Bundel-Besar-Utuh-2.000-lembar/IMG-20251122-WA0025.jpg",
    ],
    deskripsi: [
      "Nikmati Citarasa Lintingan Sendiri.",
      "Nyalakan Semangat Mu...",
      "Bangkitkan Inspirasi Mu...",
      "Happy Kaum Lintingers..."
    ],
  },
    {
    nama: "SURYA Papir 1 Bundel Besar Utuh 2.000 lembarr",
    merk: "OJK",
    rasa: "Manis Sedang",
    isi: 2000,
    size: "4x9 cm",
    harga: 21000,
    stok: 1000,
    berat: 200,
    kategori: "PAPIR / KERTAS LINTING",
    gambar: [
      "gambar/PAPIR/SURYA_PAPIR_1_BUNDEL_BESAR_UTUH_2.000_LEMBAR/MILD_ORANGE-2.jpg",
      "gambar/PAPIR/SURYA_PAPIR_1_BUNDEL_BESAR_UTUH_2.000_LEMBAR/IMG-20251122-WA0057.jpg",
      "gambar/PAPIR/SURYA_PAPIR_1_BUNDEL_BESAR_UTUH_2.000_LEMBAR/IMG-20251122-WA0056.jpg",
    ],
    deskripsi: [
      "Nikmati Citarasa Lintingan Sendiri.",
      "Nyalakan Semangat Mu...",
      "Bangkitkan Inspirasi Mu...",
      "Happy Kaum Lintingers..."
    ],
  },
      {
    nama: "SURYA Papir 1 Bundel Besar Utuh 2.000 lembarr",
    merk: "OJK",
    rasa: "Manis Sedang",
    isi: 2000,
    size: "4x9 cm",
    harga: 21000,
    stok: 1000,
    berat: 200,
    kategori: "PAPIR / KERTAS LINTING",
    gambar: [
      "gambar/PAPIR/MILD_JINGGA/IMG-20251122-WA0039.jpg",
      "gambar/PAPIR/MILD_JINGGA/WhatsApp Image 2025-11-29 at 21.11.38.jpeg",
      "gambar/PAPIR/MILD_JINGGA/WhatsApp Image 2025-11-29 at 21.11.41.jpeg",
    ],
    deskripsi: [
      "Nikmati Citarasa Lintingan Sendiri.",
      "Nyalakan Semangat Mu...",
      "Bangkitkan Inspirasi Mu...",
      "Happy Kaum Lintingers..."
    ],
  },
    {
    nama: "SAMSU KUNING Papir 1 Bundel Besar Utuh 2.000 lembar",
    merk: "OJK",
    rasa: "Manis Sedang",
    isi: 2000,
    size: "4,3x8 cm",
    harga: 21000,
    stok: 1000,
    berat: 200,
    kategori: "PAPIR / KERTAS LINTING",
    gambar: [
      "gambar/PAPIR/SAMSU_KUNING_Papir_1_Bundel_Besar_Utuh_2.000_lembar/IMG-20251122-WA0059.jpg",
      "gambar/PAPIR/SAMSU_KUNING_Papir_1_Bundel_Besar_Utuh_2.000_lembar/IMG-20251122-WA0060.jpg",
      "gambar/PAPIR/SAMSU_KUNING_Papir_1_Bundel_Besar_Utuh_2.000_lembar/IMG-20251122-WA0041.jpg",
    ],
    deskripsi: [
      "Nikmati Citarasa Lintingan Sendiri.",
      "Nyalakan Semangat Mu...",
      "Bangkitkan Inspirasi Mu...",
      "Happy Kaum Lintingers..."
    ],
  },
    {
    nama: "SUPER 1 Bundel Utuh 2.000 lembar",
    merk: "OJK",
    rasa: "Manis Sedang",
    isi: 2000,
    size: "4x9 cm",
    harga: 21000,
    stok: 1000,
    berat: 200,
    kategori: "PAPIR / KERTAS LINTING",
    gambar: [
      "gambar/PAPIR/Papir-SUPER-1-Bundel-Utuh-2.000-lembar/SUPER-2.jpeg",
      "gambar/PAPIR/Papir-SUPER-1-Bundel-Utuh-2.000-lembar/SUPER-1.jpeg",
    ],
    deskripsi: [
      "Nikmati Citarasa Lintingan Sendiri.",
      "Nyalakan Semangat Mu...",
      "Bangkitkan Inspirasi Mu...",
      "Happy Kaum Lintingers..."
    ],
  },
];

/* ============================================================
   STATE
============================================================ */
let cart = [];
let currentProduct = null;
let slideIndex = 0;
let autoSlide;

/* DOM */
const grid = document.getElementById("productGrid");

/* ============================================================
   KATEGORI
============================================================ */
function openKategori(kat) {
  document.getElementById("judulKategori").textContent = kat;
  document.getElementById("judulKategori").style.display = "block";

  renderProdukKategori(kat);

  document.getElementById("detail-box").classList.add("hidden");
  grid.style.display = "grid";
}

/* ============================================================
   RENDER GRID PRODUK
============================================================ */
function renderProdukKategori(kat) {
  grid.innerHTML = "";

  const filtered = produkList.filter(p => p.kategori === kat);

  if (filtered.length === 0) {
    grid.innerHTML = "<p>Tidak ada produk.</p>";
    return;
  }

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "produk-card";

    card.innerHTML = `
      <img src="${p.gambar[0]}" onclick="showDetail('${p.nama}')">

      <div class="product-info">
        <h3 class="product-name">${p.nama}</h3>

        <p class="product-stock">Berat: <b>${formatBerat(p.berat)}</b></p>
        <p class="product-price">Rp${p.harga.toLocaleString()}</p>
        <p class="product-stock">Stok: <b>${p.stok}</b></p>

        ${
          p.stok > 0
            ? `<button class="add-cart-btn" onclick="addToCart('${p.nama}',${p.harga},${p.berat})">+ Keranjang</button>`
            : `<button class="add-cart-btn" disabled style="background:#999">Stok Habis</button>`
        }
      </div>
    `;

    grid.appendChild(card);
  });
}

/* ============================================================
   DETAIL PRODUK + SLIDER
============================================================ */
function showDetail(nama) {
  const p = produkList.find(x => x.nama === nama);
  currentProduct = p;

  slideIndex = 0;
  clearInterval(autoSlide);

  /* Gambar utama */
  document.getElementById("detailImg").src = p.gambar[0];

  /* Thumbnail */
  const thumb = document.getElementById("thumbContainer");
  thumb.innerHTML = "";

  p.gambar.forEach((g, i) => {
    const t = document.createElement("img");
    t.src = g;
    t.className = i === 0 ? "active" : "";
    t.onclick = () => {
      slideIndex = i;
      updateSlide();
    };
    thumb.appendChild(t);
  });

  /* ============= FIX DESKRIPSI — AUTO 4 BARIS ============= */

  let leadText = "";
  let fullDesc = "";

if (Array.isArray(p.deskripsi)) {
  leadText = p.deskripsi[0];
  fullDesc = p.deskripsi
    .slice(1)
    .map(d => `<p>${d}</p>`)
    .join("");
} else {
  leadText = p.deskripsi;
  fullDesc = `<p>${p.deskripsi}</p>`;
}


  document.getElementById("detailLead").textContent = leadText;
  document.getElementById("detailDesk").innerHTML = fullDesc;

  /* DETAIL LAIN */
  document.getElementById("detailNama").textContent = p.nama;
  document.getElementById("detailPrice").textContent = "Rp " + p.harga.toLocaleString();
  document.getElementById("detailMerk").textContent = p.merk;
  document.getElementById("detailRasa").textContent = p.rasa;
  document.getElementById("detailIsi").textContent = p.isi + " lembar";
  document.getElementById("detailSize").textContent = p.size;
  document.getElementById("detailBerat").textContent = formatBerat(p.berat);
  document.getElementById("detailStock").textContent = p.stok;

  document.getElementById("detailQty").value = 1;

  /* Add to cart detail */
  document.getElementById("detailAddCart").onclick = () => {
    let qty = parseInt(document.getElementById("detailQty").value) || 1;
    for (let i = 0; i < qty; i++) addToCart(p.nama, p.harga, p.berat);
    alert(`${qty} x ${p.nama} ditambahkan ke keranjang`);
  };

  /* Show panel */
  document.getElementById("detail-box").classList.remove("hidden");
  grid.style.display = "none";

  window.scrollTo({ top: 0, behavior: "smooth" });

  autoSlide = setInterval(() => nextSlide(), 3500);
}

/* SLIDER */
function updateSlide() {
  if (!currentProduct) return;

  document.getElementById("detailImg").src = currentProduct.gambar[slideIndex];

  document.querySelectorAll("#thumbContainer img").forEach((el, i) =>
    el.classList.toggle("active", i === slideIndex)
  );
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % currentProduct.gambar.length;
  updateSlide();
}
function prevSlide() {
  slideIndex = (slideIndex - 1 + currentProduct.gambar.length) % currentProduct.gambar.length;
  updateSlide();
}

/* Back */
function backToProduk() {
  document.getElementById("detail-box").classList.add("hidden");
  grid.style.display = "grid";
}

/* ============================================================
   CART
============================================================ */
function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

function addToCart(nama, harga, berat) {
  const produk = produkList.find(p => p.nama === nama);
  if (!produk || produk.stok <= 0) return alert("Stok habis!");

  produk.stok--;

  const exist = cart.find(c => c.nama === nama);
  exist ? exist.qty++ : cart.push({ nama, harga, berat, qty: 1 });

  updateCartCount();
  renderCart();

  const currentKat = document.getElementById("judulKategori").textContent;
  if (currentKat) renderProdukKategori(currentKat);
}

/* Floating cart */
document.getElementById("cart-float").onclick = () => {
  document.getElementById("cart-panel").style.display = "flex";
  renderCart();
};
document.getElementById("close-cart").onclick = () =>
  (document.getElementById("cart-panel").style.display = "none");

/* ============================================================
   RENDER CART
============================================================ */
function renderCart() {
  const panel = document.getElementById("cart-items");
  panel.innerHTML = "";

  let total = 0;

  cart.forEach((item, i) => {
    const subtotal = item.harga * item.qty;
    total += subtotal;

    panel.innerHTML += `
      <div class="cart-item">
        <div class="info">
          <b>${item.nama}</b><br>
          Berat total: ${formatBerat(item.berat * item.qty)}<br>
          Rp${item.harga.toLocaleString()}
        </div>

        <div class="qty-box">
          <span class="qty-btn" onclick="changeQty(${i},-1)">−</span>
          <span class="qty-value">${item.qty}</span>
          <span class="qty-btn" onclick="changeQty(${i},1)">+</span>
        </div>

        <span class="delete-btn" onclick="removeItem(${i})">✖</span>
      </div>
    `;
  });

  document.getElementById("cart-total").textContent = total.toLocaleString();
}

/* ============================================================
   QTY CART
============================================================ */
function changeQty(i, val) {
  const item = cart[i];
  const produk = produkList.find(p => p.nama === item.nama);

  if (val === 1) {
    if (produk.stok <= 0) return alert("Stok tidak cukup!");
    produk.stok--;
    item.qty++;
  } else if (val === -1) {
    produk.stok++;
    item.qty--;
    if (item.qty <= 0) cart.splice(i, 1);
  }

  updateCartCount();
  renderCart();

  const currentKat = document.getElementById("judulKategori").textContent;
  if (currentKat) renderProdukKategori(currentKat);
}

function removeItem(i) {
  const item = cart[i];
  const produk = produkList.find(p => p.nama === item.nama);

  produk.stok += item.qty;
  cart.splice(i, 1);

  updateCartCount();
  renderCart();

  const kat = document.getElementById("judulKategori").textContent;
  if (kat) renderProdukKategori(kat);
}

/* ============================================================
   CHECKOUT
============================================================ */
document.getElementById("checkout").onclick = () => {
  if (cart.length === 0) return alert("Keranjang masih kosong!");
  document.getElementById("cart-panel").style.display = "none";
  document.getElementById("alamat-panel").style.display = "flex";
};

document.getElementById("close-alamat").onclick = () =>
  (document.getElementById("alamat-panel").style.display = "none");

document.getElementById("confirm-alamat").onclick = () => {
  const alamat = document.getElementById("alamat-input").value.trim();
  const jenisOngkir = document.getElementById("jenis-ongkir").value.trim();
  const kurir = document.getElementById("kurir").value;
  const payment = document.getElementById("payment").value;

  if (!alamat) return alert("Alamat wajib diisi!");
  if (!jenisOngkir) return alert("Jenis ongkir wajib diisi!");

  let text = "*🛒 PESANAN BARU*%0A%0A*Daftar Produk:*%0A";

  let totalBarang = 0;
  let totalBerat = 0;

  cart.forEach((item, i) => {
    const subtotal = item.harga * item.qty;
    const b = item.berat * item.qty;

    totalBarang += subtotal;
    totalBerat += b;

    text += `${i + 1}. ${item.nama} — ${item.qty}x%0A` +
            `   Berat: ${formatBerat(b)}%0A` +
            `   Rp${subtotal.toLocaleString()}%0A`;
  });

  text += `%0A*Total Berat:* ${formatBerat(totalBerat)}`;
  text += `%0A*Total Barang:* Rp${totalBarang.toLocaleString()}`;
  text += `%0A*Ongkir:* ${kurir} (${jenisOngkir})%0A(Admin akan memberitahu total ongkirnya)`;
  text += `%0A*Alamat:* ${alamat}`;
  text += `%0A*Pembayaran:* ${payment}`;
  text += `%0A%0AMohon diproses 😊`;

  window.open(`https://wa.me/${nomorWA}?text=${encodeURIComponent(text)}`, "_blank");

  document.getElementById("alamat-panel").style.display = "none";
};

/* ============================================================
   DETAIL QTY BUTTON
============================================================ */
function changeDetailQty(delta) {
  const el = document.getElementById("detailQty");
  let v = parseInt(el.value) || 1;
  el.value = Math.max(1, v + delta);
}
