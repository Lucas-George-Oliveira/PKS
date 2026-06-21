const grid = document.querySelector(".products-grid");
const btn = document.getElementById("btnVerMais");
const btncat = document.getElementById("btnVerMais");
const catalogo = document.getElementById("produtos");

document.getElementById("tab-all").addEventListener("change", () => {
    grid.classList.add("fechado");
    btn.style.display = "block";
    btn.textContent = "Ver mais produtos";
});

["tab-temperos","tab-condimentos","tab-churrasco","tab-outros"]
.forEach(id => {
    document.getElementById(id).addEventListener("change", () => {
        grid.classList.remove("fechado");
        btn.style.display = "none";
    });
});

btn.addEventListener("click", () => {

    grid.classList.toggle("fechado");

    btn.textContent =
        grid.classList.contains("fechado")
            ? "Ver mais produtos"
            : "Ver menos";
});

document.querySelector(".contact-form-wrapper form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("form-nome").value;
    const tel = document.getElementById("form-tel").value;
    const email = document.getElementById("form-email").value;
    const msg = document.getElementById("form-msg").value;

    const texto =
        `Olá! Gostaria de entrar em contato.%0A%0A` +
        `👤 Nome: ${nome}%0A` +
        `📞 Telefone: ${tel}%0A` +
        `📧 Email: ${email}%0A` +
        `💬 Mensagem: ${msg}`;

    const numero = "5563992423909";

    window.open(`https://wa.me/${numero}?text=${texto}`, "_blank");

    this.reset();
});