const d = document;
// Para manipular el elemento con id mark-all
const markAll = d.querySelector("#mark-all");
const numberElement = d.querySelector("#number");
const posts = d.querySelectorAll(".post");

posts.forEach((post) => {
  post.addEventListener("click", () => {
    post.querySelector(".not-read").remove("not-read");

    // Actualiza el estado numérico de las notificaciones
    updateNotifications();
  });
});

// Para darle un evento click al elemento con id mark-all
markAll.addEventListener("click", () => {
  // Para seleccionar todos los elementos con clase not-read
  const notReadElements = d.querySelectorAll(".not-read");
  // Para remover la clase not-read a todos los elementos con clase not-read
  notReadElements.forEach((notReadElement) => {
    notReadElement.classList.remove("not-read");

    // Actualiza el estado numérico de las notificaciones
    updateNotifications();
  });
});

// Para manejar el estado número de las notificaciones
const updateNotifications = () => {
  const notReadElementsActual = d.querySelectorAll(".not-read");
  numberElement.textContent = notReadElementsActual.length;
};
