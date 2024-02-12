const btnSi = document.querySelector('.botones__btn-si');
const btnNo = document.querySelector('.botones__btn-no');
let randomPic = document.querySelector('.random-pics__cats');
const question = document.querySelector('.question');

const musica = new Audio('/assets/musica/Mi Persona Favorita.mp3');
let video = document.createElement('video'); // Crear elemento de video

// Si acepta:
btnSi.addEventListener('click', () => {
    musica.play(); // Pausar la música si se está reproduciendo
    video.src = '/assets/video/0.mp4'; // Cambiar la fuente del video
    video.autoplay = true; // Reproducir automáticamente el video
    video.controls = true; // Mostrar controles de reproducción
    video.style.maxWidth = '50%'; // Establecer un ancho máximo
    video.style.display = 'block'; // Mostrar como bloque para centrarlo
    video.style.margin = '0 auto';
    randomPic.replaceWith(video); // Reemplazar la imagen con el video
    question.innerText = ' Uwu!!!!! :3 ';
    question.classList.add('question-style');
    btnSi.style.display = 'none';
    btnNo.style.display = 'none';
    video.muted = true;
})

// Lógica:
let contador = 0;

btnNo.addEventListener('click', () => {
    switch (contador) {
        case 0:
            btnNo.innerText = 'Segura?';
            btnSi.classList.add('estilo-1');
            break;
        case 1:
            btnNo.innerText = 'Segurísima?';
            btnSi.classList.add('estilo-2');
            break;
        case 2:
            btnNo.innerText = 'Apoco si :( ?';
            btnSi.classList.add('estilo-3');
            break;
        case 3:
            btnNo.innerText = 'Ni modo...';
            btnSi.classList.add('estilo-4');
            break;
        case 4:
            btnNo.innerText = 'Duren... ';
            btnSi.classList.add('estilo-5');
            break;
    }
    contador++;
});
