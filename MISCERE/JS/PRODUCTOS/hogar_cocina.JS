
  document.addEventListener("DOMContentLoaded", () => {
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
      const decreaseBtn = card.querySelector(".decrease");
      const increaseBtn = card.querySelector(".increase");
      const quantityDisplay = card.querySelector(".quantity");

      const stockText = card.querySelector(".stock-alert").textContent;
      const stockMatch = stockText.match(/\d+/); // Busca el número en el texto
      const stock = stockMatch ? parseInt(stockMatch[0]) : 0;

      let quantity = 0;

      increaseBtn.addEventListener("click", () => {
        if (quantity < stock) {
          quantity++;
          quantityDisplay.textContent = quantity;
        } else {
          alert(`Solo hay ${stock} unidades disponibles`);
        }
      });

      decreaseBtn.addEventListener("click", () => {
        if (quantity > 0) {
          quantity--;
          quantityDisplay.textContent = quantity;
        }
      });
    });
  });

