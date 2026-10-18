function toggleNav() {
    const menu = document.querySelector('.links-nav-mobile');
    const button = document.querySelector('.container-menu');

    menu.classList.toggle('active');
    button.classList.toggle('active');

    const isOpen = menu.classList.contains('active');

    button.setAttribute('aria-expanded', isOpen);
}

function closeNav() {
    const menu = document.querySelector('.links-nav-mobile');
    const button = document.querySelector('.container-menu');

    menu.classList.remove('active');
    button.classList.remove('active');

    button.setAttribute('aria-expanded', 'false');
}

//texto animado home-page
const textos = [
    "Design com propósito",
    "Impacto visual",
    "Autenticidade"
  ];

  let index = 0;
  const textoElement = document.getElementById("texto-animado");

  function trocarTexto() {
    // Apaga
    textoElement.style.opacity = 0;

    setTimeout(() => {
      // Troca o texto e mostra
      textoElement.textContent = textos[index];
      textoElement.style.opacity = 1;

      // Próximo índice
      index = (index + 1) % textos.length;
    }, 500); // Tempo do fade-out
  }

  setInterval(trocarTexto, 3000); // Troca a cada 3s



window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
        // Fecha o menu mobile e reseta ícones ao redimensionar
        document.querySelector(".links-nav-mobile").style.width = "0%";
        document.querySelector(".abrir").style.display = "none";
        document.querySelector(".fechar").style.display = "none";
    } else {
        document.querySelector(".abrir").style.display = "block";
    }
});

// scroll no nav
window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 0) {
      nav.classList.add("scroll");
    } else {
      nav.classList.remove("scroll");
    }
  });

  //animações das divs
    AOS.init();