const sombreros = document.querySelectorAll('.sombrero');

sombreros.forEach(sombrero => {
    // Asigna una posición inicial aleatoria
    sombrero.style.left = Math.random() * window.innerWidth - sombrero.offsetWidth + 'px';
    sombrero.style.top = Math.random() * window.innerHeight - sombrero.offsetHeight + 'px';

    // Personaliza la animación de cada sombrero
    sombrero.style.animationDelay = Math.random() * 2 + 's';
});

/*
function chooseOption(option) {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('animation').classList.remove('hidden');

    setTimeout(() => {
        document.getElementById('animation').classList.add('hidden');
        if (option === 'erp') {
            document.getElementById('pageA').classList.remove('hidden');
        } else {
            document.getElementById('pageB').classList.remove('hidden');
        }
    }, 2000); // Duración de la animación en milisegundos
}

function scrollToNext(pageId) {
    const page = document.getElementById(pageId);
    window.scrollTo({
        top: page.scrollHeight,
        behavior: 'smooth'
    });
}

*/
