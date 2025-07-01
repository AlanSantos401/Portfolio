 const links = document.querySelectorAll(".menu-link");
  const sections = document.querySelectorAll("main, section");

  function ativarLinkNaScroll() {
    let scrollY = window.scrollY;

    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (scrollY >= top && scrollY < top + height) {
        links.forEach(link => {
          link.classList.remove("ativo");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("ativo");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", ativarLinkNaScroll);

  function abrirModal(id) {
    document.getElementById(id).style.display = "block";
    document.body.classList.add("modal-aberto");
  }

  function fecharModal(id) {
    document.getElementById(id).style.display = "none";
    document.body.classList.remove("modal-aberto");
  }

  const video = document.getElementById('meuVideo');
  video.addEventListener('canplay', () => {
    video.classList.add('animar-frente');
  });
