function showSection(sectionId) {
    var sections = document.querySelectorAll('.main-content section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

window.onload = function() {
    showSection('inicio'); // Mostrar la sección "Inicio" por defecto al cargar la página
}
