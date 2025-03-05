document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
    }
});

const messages = [
    "Hola niña preciosa",
    "Hay mucho que decirte pero no sé por dónde empezar",
    "Tal vez por un te quiero",
    "O un te extraño",
    "O un te amo",
    "O un te necesito",
    "O un te deseo",
    "O un te admiro",
    "O un te respeto",
    "O un te valoro",
    "O un te aprecio",
    "O un te quiero cerca",
    "O un no te quiero lejos",
    "O un te quiero conmigo",
    "O un te quiero abrazar",
    "O un te quiero para siempre",
    "pero sé que no es suficiente nada de eso",
    "porque te quiero decir todo eso y más",
    "porque te quiero decir que eres mi vida",
    "que eres mi amor",
    "que eres mi todo",
    "que eres mi sol",
    "que eres mi luna",
    "que eres mi estrella",
    "que eres mi cielo",
    "que eres mi universo",
    "que eres mi razón de ser",
    "que eres mi razón de vivir",
    "que eres mi razón de amar",
    "que eres mi razón de soñar",
    "que eres mi razón de existir",
    "que eres mi razón de todo",
    "que eres mi razón de nada",
    "porque sin ti no soy nada",
    "porque sin ti no soy nadie",
    "porque sin ti no soy yo",
    "porque sin ti no soy",
    "porque sin ti no",
    "porque sin ti",
    "porque gracias a ti puedo ser",
    "porque gracias a ti puedo estar",
    "porque gracias a ti puedo vivir",
    "porque gracias a ti puedo amar",
    "porque eres la musa de mi inspiración",
    "porque eres la razón de mi creación",
    "porque todas las canciones que escribo son para ti",
    "porque todas las palabras que digo son para ti",
    "porque todo lo que hago es por ti",
    "porque todo lo que tengo es por ti",
    "porque todo lo que soy es por ti",
    "porque todo lo que seré es por ti",
    "y mi mayor deseo es que seas feliz",
    "y mi mayor anhelo es que seas amada",
    "y mi mayor sueño es que seas correspondida",
    "y mi mayor ilusión es que seas valorada",
    "y mi mayor esperanza es que seas respetada",
    "sé que fue un largo camino para llegar hasta aquí",
    "sé que fuí un tonto por no darme cuenta antes",
    "sé que cometí muchos errores en el pasado",
    "sé que no soy perfecto",
    "sé que no soy el mejor",
    "sé que no soy el más guapo",
    "sé que no soy el más inteligente",
    "sé que no soy el más fuerte",
    "sé que no soy el más valiente",
    "sé que no soy el más rico",
    "sé que no soy el más famoso",
    "sé que no soy el mejor",
    "sé que ya estás harta de escuchar lo mismo",
    "sé que ya estás cansada de esperar",
    "sé que ya estás harta de sufrir",
    "sé que ya estás harta de llorar",
    "sé que ya estás harta de todo",
    "sé que ya estás harta de mí",
    "pero quiero que sepas que te amo",
    "que sepas que te extraño",
    "que sepas que te necesito",
    "que sepas que te deseo",
    "porque eres la mujer de mi vida",
    "quiero que seas mi esposa",
    "quiero que seas la madre de mis hijos",
    "quiero que seas mi compañera",
    "quiero que seas mi amiga",
    "porque no veo un futuro sin ti",
    "porque no veo un mañana sin ti",
    "quizás no sea el mejor momento",
    "quizás no sea la mejor manera",
    "pero esta es una muestra de mi amor",
    "de mi cariño",
    "de mi respeto",
    "de mi admiración",
    "de mi valoración",
    "y de mi cambio",
    "porque quiero ser mejor",
    "porque quiero ser diferente",
    "porque quiero ser tu hombre",
    "porque quiero ser tu amor",
    "porque quiero ser tu vida",
    "Te amo, preciosa",
    "con todo mi corazón",
    "Y aunque cueste creerlo",
    "es la pura verdad",
    "porque te amo",
    "porque te amé",
    "porque te amaré",
    "porque aunque ya no me tengas la misma confianza",
    "porque aunque ya no me tengas la misma fe",
    "porque aunque ya no me tengas el mismo amor",
    "porque aunque ya no me tengas el mismo cariño",
    "estaré aquí",
    "esperando",
    "esperando por ti",
    "esperando por nosotros",
    "esperando por un futuro juntos",
    "esperando por un mañana mejor",
    "esperando por un nuevo comienzo",
    "Quiero que seas mi novia",
    "pero esta no es la manera de pedirtelo",
    "sólo es una pizca de lo que estoy por hacer",
    "sólo es una muestra de lo que siento",
    "trataré de ser mejor",
    "trataré de ser diferente",
    "trataré de ser tu hombre",
    "trataré de ya no ser el mismo",
    "porque mereces lo mejor",
    "y yo quiero ser el mejor para ti",
    "Muchas gracias por todo",
    "por tu paciencia",
    "por tu comprensión",
    "por tu amor",
    "por tu cariño",
    "por tu apoyo",
    "por tu confianza",
    "por tu fe",
    "Tendrás lo mejor, te lo prometo",
    "Te amo demasiado, Adita❤️",

];

let currentPage = 0;
let isLastPage = false;

function showMessage() {
    $('.message').text(messages[currentPage]);
    
    isLastPage = currentPage === messages.length - 1;
    
    if (isLastPage) {
        $('.next-button').show();
        $('.bg_heart').css('cursor', 'default');
    } else {
        $('.next-button').hide();
        $('.bg_heart').css('cursor', 'pointer');
    }
}

$('.bg_heart').on('click', function() {
    if (!isLastPage) {
        currentPage++;
        showMessage();
    }
});

var love = setInterval(function() {
    var r_num = Math.floor(Math.random() * 40) + 1;
    var r_size = Math.floor(Math.random() * 65) + 10;
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;
    
    $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);animation:love " + r_time + "s ease'></div>");
    
    $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);animation:love " + (r_time + 5) + "s ease'></div>");
    
    $('.heart').each(function() {
        var top = parseFloat($(this).css("top"));
        var width = parseFloat($(this).css("width"));
        if (top <= -100 || width >= 150) {
            $(this).remove();
        }
    });
}, 500);

showMessage();

function clearMusicState() {
    localStorage.removeItem('musicPlaying');
    localStorage.removeItem('musicCurrentTime');
}

window.onload = function() {
    clearMusicState(); 
}

function setupMusic() {
    const music = document.getElementById('backgroundMusic');
    
    if (!localStorage.getItem('initialLoad')) {
        clearMusicState();
        localStorage.setItem('initialLoad', 'true');
        music.currentTime = 0;
    }

    const isMusicPlaying = localStorage.getItem('musicPlaying') === 'true';
    const musicCurrentTime = localStorage.getItem('musicCurrentTime') || 0;

    if (isMusicPlaying) {
        music.currentTime = parseFloat(musicCurrentTime);
        music.play().catch(error => console.log('Playback failed', error));
    }

    music.addEventListener('play', () => {
        localStorage.setItem('musicPlaying', 'true');
    });

    music.addEventListener('pause', () => {
        localStorage.setItem('musicPlaying', 'false');
    });

    setInterval(() => {
        localStorage.setItem('musicCurrentTime', music.currentTime);
    }, 1000);

    document.addEventListener('click', function startMusic() {
        music.play().catch(error => {
            console.log('Autoplay prevented', error);
        });
        document.removeEventListener('click', startMusic);
    });
}

document.addEventListener('DOMContentLoaded', setupMusic);