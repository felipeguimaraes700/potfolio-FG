const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const mensagem = document.getElementById("mensagem").value;


    const texto =
`Olá, Felipe!

Meu nome é ${nome}.

E-mail: ${email}
Telefone: ${telefone}

Mensagem:
${mensagem}`;


    const numeroWhatsApp = "5511910837324";

    const url =
        `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;


    window.open(url, "_blank");

});