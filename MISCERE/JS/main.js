// Función para inicializar el mapa (para la sección de ubicación)
function initMap() {
    // Esta función se llamaría si estuvieras usando Google Maps API
    // Como estamos usando un iframe por simplicidad, no necesitamos implementarla completamente
    console.log("Mapa inicializado");
}

// Funcionalidad para las pestañas en la página de políticas
document.addEventListener('DOMContentLoaded', function() {
    // Verificar si estamos en la página de políticas
    const tabButtons = document.querySelectorAll('.tab-button');
    
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remover clase active de todos los botones y contenidos
                document.querySelectorAll('.tab-button').forEach(btn => {
                    btn.classList.remove('active');
                });
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                
                // Agregar clase active al botón clickeado
                this.classList.add('active');
                
                // Mostrar el contenido correspondiente
                const tabId = this.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }
    
    // Funcionalidad para el scroll suave al hacer clic en el card de ubicación
    const ubicacionCard = document.getElementById('ubicacion-card');
    if (ubicacionCard) {
        ubicacionCard.addEventListener('click', function(e) {
            e.preventDefault();
            const ubicacionSection = document.getElementById('ubicacion');
            ubicacionSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
// Sistema de Notificaciones
document.addEventListener('DOMContentLoaded', function() {
    // Elementos
    const notificationsWrapper = document.querySelector('.notifications-wrapper');
    const notificationsContainer = document.querySelector('.notifications-container');
    const notificationsList = document.querySelector('.notifications-list');
    const notificationBadges = document.querySelectorAll('.notification-badge');
    const mobileNotificationsBtn = document.querySelector('.mobile-notifications-btn');
    
    // Función para abrir notificaciones
    function openNotifications() {
      notificationsWrapper.style.display = 'block';
      setTimeout(() => {
        notificationsContainer.classList.add('open');
      }, 10);
    }
    
    // Función para cerrar notificaciones
    function closeNotifications() {
      notificationsContainer.classList.remove('open');
      setTimeout(() => {
        notificationsWrapper.style.display = 'none';
      }, 300);
    }
    
    // Eventos para abrir
    document.querySelectorAll('.notifications-trigger, .mobile-notifications-btn').forEach(trigger => {
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        openNotifications();
      });
    });
    
    // Evento para cerrar
    document.querySelector('.close-notifications').addEventListener('click', closeNotifications);
    
    // Cerrar al hacer clic fuera
    notificationsWrapper.addEventListener('click', function(e) {
      if (e.target === notificationsWrapper) {
        closeNotifications();
      }
    });
    
    // Función para añadir notificaciones
    function addNotification(text, time, isToday = true) {
      const notification = document.createElement('div');
      notification.className = 'notification-item';
      notification.innerHTML = `
        <div class="notification-content">
          <p class="notification-text">${text}</p>
          <span class="notification-time">${time}</span>
        </div>
      `;
      notificationsList.appendChild(notification);
      updateBadge();
    }
    
    // Actualizar badge
    function updateBadge() {
      const count = document.querySelectorAll('.notification-item').length;
      notificationBadges.forEach(badge => {
        badge.textContent = count;
      });
    }
    
    // Ejemplo de notificaciones (puedes eliminar esto)
    addNotification('Pagaste $500.000 a Universal de Dulces', '9:01am');
    addNotification('Tienes pendiente cancelar factura', '9:01am');
    addNotification('Pagaste $1.500.000 a Variedades María', '9:01am');
    
    // Hacer deslizable en móviles
    let startY = 0;
    
    notificationsContainer.addEventListener('touchstart', (e) => {
      startY = e.touches[0].clientY;
    }, { passive: true });
    
    notificationsContainer.addEventListener('touchmove', (e) => {
      const y = e.touches[0].clientY;
      const diff = y - startY;
      
      if (diff > 0) {
        e.preventDefault();
        notificationsContainer.style.transform = `translateY(${diff}px)`;
      }
    }, { passive: false });
    
    notificationsContainer.addEventListener('touchend', (e) => {
      const y = e.changedTouches[0].clientY;
      const diff = y - startY;
      
      if (diff > 100) {
        closeNotifications();
      }
      
      notificationsContainer.style.transform = '';
    }, { passive: true });
  });