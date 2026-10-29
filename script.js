
/* =========================================
   STUDIO AURORA — JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Menu de navegação para celular
  const menuToggle = document.querySelector("#menu-toggle");
  const navLinks = document.querySelector("#nav-links");

  if (menuToggle && navLinks) {
    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
      );

      menuToggle.innerHTML = isOpen ? "&times;" : "&#9776;";
    });

    // Fecha o menu depois que uma opção é selecionada
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
        menuToggle.innerHTML = "&#9776;";
      });
    });

    // Fecha o menu ao pressionar Escape
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        navLinks.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
        menuToggle.innerHTML = "&#9776;";
      }
    });
  }

  // 2. Atualiza o ano automaticamente no rodapé
  const currentYear = document.querySelector("#current-year");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // 3. Botão de contato demonstrativo
  
const contactButton = document.querySelector("#contact-button");

// Número oficial do WhatsApp do estabelecimento.
// Deixe vazio enquanto não houver um número autorizado.
const whatsappNumber = "5543991979162";

if (contactButton) {
  contactButton.addEventListener("click", () => {
    if (!whatsappNumber) {
      alert(
        "Obrigado pelo interesse no Studio Aurora!\n\n" +
        "Este é um projeto demonstrativo. " +
        "O WhatsApp será conectado quando houver um número oficial."
      );
      return;
    }

    const message = encodeURIComponent(
      "Olá! Conheci o Studio Aurora pelo site e gostaria de conhecer os serviços e consultar os horários disponíveis."
    );

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}


  // 4. Registra os cliques nos links internos para navegação suave
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

        // Atualiza o endereço da página sem recarregá-la
        history.replaceState(null, "", targetId);
      }
    });
  });

  console.log("Studio Aurora carregado com sucesso!");
});
