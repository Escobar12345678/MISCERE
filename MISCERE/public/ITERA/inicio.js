document.addEventListener("DOMContentLoaded", () => {
  // Parte 1: Mostrar más imágenes de proveedores
  const viewMoreBtn = document.getElementById("viewMoreBtn");
  const hiddenImages = document.querySelectorAll(".providers .hidden");

  // Cuando el usuario haga clic en "Ver más"
  viewMoreBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del enlace

    // Mostrar las imágenes ocultas
    hiddenImages.forEach((img) => {
      img.classList.remove("hidden");
    });

    // Cambiar el texto del botón para "Ver menos"
    viewMoreBtn.textContent = "Ver menos";
    viewMoreBtn.addEventListener("click", () => {
      // Si el usuario vuelve a hacer clic, ocultamos las imágenes nuevamente
      hiddenImages.forEach((img) => {
        img.classList.add("hidden");
      });

      // Cambiar el texto del botón de vuelta a "Ver más"
      viewMoreBtn.textContent = "Ver más";
    });
  });

  // Parte 2: Modal para proveedores
  const modal = document.getElementById("providerModal");
  const modalImg = modal.querySelector(".modal-img");
  const modalName = document.getElementById("modalName");
  const modalLocation = document.getElementById("modalLocation");
  const modalDesc = document.getElementById("modalDescription");
  const closeBtn = modal.querySelector(".close-btn");

  // Datos de ejemplo de proveedores
  const providersData = [
    {
      name: "Variedades Lupita",
      location: "Centro de Cali",
      description: "Especialistas en lencería para el hogar con más de 10 años de experiencia. Atención amable y surtido completo.",
      img: "https://lh3.googleusercontent.com/p/AF1QipP7rtDgk6yBMDotW2nhZMkAD7G-7TXryV_rt4Zp=s680-w680-h510-rw"
    },
    {
      name: "Detalles y sorpresas Kevin",
      location: "San Andresito",
      description: "Regalos personalizados, globos, decoración de eventos y más. ¡Creatividad sin límites!",
      img: "https://lh3.googleusercontent.com/p/AF1QipNWTSObQstCozWtGpVmuHDwxNKHIG5BM6oNMbVm=s680-w680-h510-rw"
    }
  ];

  // Asegúrate de que las tarjetas existan antes de hacer algo con ellas
  const cards = document.querySelectorAll(".card");

  if (cards.length > 0) {
    cards.forEach((card, i) => {
      card.addEventListener("click", () => {
        const provider = providersData[i];
        modalImg.src = provider.img;
        modalName.textContent = provider.name;
        modalLocation.textContent = provider.location;
        modalDesc.textContent = provider.description;
        modal.style.display = "flex";
      });
    });
  }

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cerrar al hacer clic fuera del contenido
  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });
});
