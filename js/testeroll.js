const videoSections = document.querySelectorAll(".video-scroll");
let ticking = false;


function updateVideos() {
    videoSections.forEach(section => {
        const video = section.querySelector("video");
        const rect = section.getBoundingClientRect();


        // =========================================
        // VERIFICA SE A SEÇÃO ESTÁ NA TELA
        // =========================================

        if (rect.top > window.innerHeight) {
            return;
        }
        if (rect.bottom < 0) {
            return;
        }

        // =========================================
        // PROGRESSO DA SEÇÃO
        // =========================================

        const scrollable =
            section.offsetHeight - window.innerHeight;
        let progress =
            -rect.top / scrollable;
        progress =
            Math.max(0, Math.min(progress, 1));


        // =========================================
        // CONTROLE DO VÍDEO
        // =========================================

        if (
            video.readyState >= 1 &&
            video.duration
        ) {

            const newTime =
                video.duration * progress;
            if (
                Math.abs(
                    video.currentTime - newTime
                ) > 0.01
            ) {

                video.currentTime = newTime;
            }
        }


        // =========================================
        // PROCURA OS TEXTOS
        // =========================================

        const textoLeft =
            section.querySelector(
                ".container-about-text-left"
            );

        const textoRight =
            section.querySelector(
                ".container-about-text-right"
            );


        // =========================================
        // SE NÃO TIVER TEXTO,
        // CONTINUA PARA O PRÓXIMO VÍDEO
        // =========================================

        if (!textoLeft || !textoRight) {
            return;
        }


        // =========================================
        // TEXTO ESQUERDO
        // =========================================

        /*
            0% ---------------- 35%
            
            Texto completamente visível.
        */


        if (progress <= 0.35) {

            textoLeft.style.opacity = 1;

            textoLeft.style.transform =
                "translate(0, -50%)";

        }


        /*
            35% ---------------- 50%

            Texto esquerdo desaparece
            e se movimenta para esquerda.
        */


        else if (progress <= 0.50) {

            const fadeProgress =
                (progress - 0.35) / 0.15;


            const opacity =
                1 - fadeProgress;


            const movement =
                -200 * fadeProgress;


            textoLeft.style.opacity =
                opacity;


            textoLeft.style.transform =
                `translate(${movement}px, -50%)`;

        }


        /*
            Depois de 50%

            Texto esquerdo desaparece
            completamente.
        */


        else {

            textoLeft.style.opacity = 0;

            textoLeft.style.transform =
                "translate(-200px, -50%)";

        }


        // =========================================
        // TEXTO DIREITO
        // =========================================

        /*
            Antes de 50%

            Texto direito invisível.
        */


        if (progress < 0.50) {

            textoRight.style.opacity = 0;

            textoRight.style.transform =
                "translate(200px, -50%)";

        }


        /*
            50% ---------------- 65%

            Texto direito entra pela direita.
        */


        else if (progress <= 0.65) {

            const fadeProgress =
                (progress - 0.50) / 0.15;


            const opacity =
                fadeProgress;


            const movement =
                200 - (200 * fadeProgress);


            textoRight.style.opacity =
                opacity;


            textoRight.style.transform =
                `translate(${movement}px, -50%)`;

        }


        /*
            Depois de 65%

            Texto direito fica parado.
        */

        else {
            textoRight.style.opacity = 1;
            textoRight.style.transform =
                "translate(0, -50%)";

        }

    });


    ticking = false;

}


// =========================================
// SCROLL
// =========================================

window.addEventListener("scroll", () => {

    if (!ticking) {

        requestAnimationFrame(updateVideos);

        ticking = true;

    }

});