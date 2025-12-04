(async function () {
  const grid = document.getElementById("productGrid");
  const search = document.querySelector(".search");

  const modal = document.getElementById("modal");
  const modalOverlay = document.getElementById("modalOverlay");

  const modalImg = document.getElementById("modalImg");
  const modalName = document.getElementById("modalName");
  const modalPrice = document.getElementById("modalPrice");
  const modalDesc = document.getElementById("modalDesc");
  const closeBtn = document.getElementById("closeBtn");

  let products = [];

  // Load products.json
  try {
    const res = await fetch("assets/products.json");
    products = await res.json();
  } catch (e) {
    grid.innerHTML =
      "<p style='color:red'>Failed to load products.json — check path.</p>";
    console.error(e);
    return;
  }

  // Render product cards
  function render(list) {
    grid.innerHTML = "";
    list.forEach((p) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.setAttribute("data-cy", "product-card");

      const img = document.createElement("img");
      img.src = p.image;
      img.alt = p.name;

      const h3 = document.createElement("h3");
      h3.textContent = p.name;

      const price = document.createElement("p");
      price.textContent = "₹" + p.price;

      card.appendChild(img);
      card.appendChild(h3);
      card.appendChild(price);

      card.addEventListener("click", () => openModal(p));

      grid.appendChild(card);
    });
  }

  // Open modal
  function openModal(p) {
    modal.classList.remove("hidden");
    modalImg.src = p.image;
    modalName.textContent = p.name;
    modalPrice.textContent = "₹" + p.price;
    modalDesc.textContent = p.description;
  }

  // Close modal
  function closeModal() {
    modal.classList.add("hidden");
  }

  closeBtn.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // Search filter
  search.addEventListener("input", (ev) => {
    const q = ev.target.value.toLowerCase();
    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(q)
    );
    render(filtered);
  });

  // Initial render
  render(products);
})();
