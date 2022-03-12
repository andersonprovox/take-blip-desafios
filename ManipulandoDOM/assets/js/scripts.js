
const botaoDarkMode = document.getElementById('mode-selector');
const titulo = document.getElementById('page-title');
const corpoPagina = document.getElementsByTagName('body')[0];
const footerPagina = document.getElementsByTagName('footer')[0];

botaoDarkMode.addEventListener("click", function () {
    botaoDarkMode.classList.toggle('dark-mode');
    
    corpoPagina.classList.toggle('dark-mode');
    titulo.classList.toggle('dark-mode');
    
    footerPagina.classList.toggle('dark-mode');

    if (corpoPagina.classList.contains("dark-mode")) {
        botaoDarkMode.innerHTML = "Light Mode";
        titulo.innerHTML = 'Dark Mode ON';
    } else {
        titulo.innerHTML = 'Light Mode ON';
        botaoDarkMode.innerHTML = "Dark Mode";
    }
});
