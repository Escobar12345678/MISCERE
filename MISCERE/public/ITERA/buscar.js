document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
  
    if (!searchInput) return;
  
    searchInput.addEventListener("input", function () {
      const searchTerm = this.value.toLowerCase();
      const products = document.querySelectorAll(".card");
  
      products.forEach((product) => {
        const title = product.querySelector("h3").textContent.toLowerCase();
        if (title.includes(searchTerm)) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    });
  });
  