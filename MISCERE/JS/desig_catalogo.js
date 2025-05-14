document.addEventListener("DOMContentLoaded", () => {
    console.log("App móvil lista");
  
    const buttons = document.querySelectorAll(".category-button");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const nombre = button.dataset.name;
        console.log("Clic en categoría:", nombre);
  
        alert(`Has elegido: ${nombre}`);
      });
    });
  });
  