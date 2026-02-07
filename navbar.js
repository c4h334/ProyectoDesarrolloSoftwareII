// función que carga los archivos del header y footer en el home.html
function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`No se pudo cargar ${filePath}`);
            }
            return response.text();
        })
        .then(data => {
            document.querySelector(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}

// Esto ejecuta la carga cuando esté listo
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("#Header", "Header.html");
    loadComponent("#Footer", "Footer.html");
});
