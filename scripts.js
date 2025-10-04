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
  swiper.autoplay.stop();
}

function fecharModal(id) {
  document.getElementById(id).style.display = "none";
  document.body.classList.remove("modal-aberto");
  swiper.autoplay.start();
}

const video = document.getElementById('meuVideo');
const overlay = document.getElementById('videoOverlay');

if(video && overlay){
  video.addEventListener('canplay', () => {
    overlay.style.animation = 'fadeOut 1.5s ease-out forwards';
  });
}

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 60,
  loop: true,
  autoplay: {
    delay: 2600,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: { 
      slidesPerView: 1,
      spaceBetween: 65,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 65,
    },
    1024: { 
      slidesPerView: 3,
      spaceBetween: 60,
    },
  },
  
});

document.querySelectorAll(".btn-ver").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    swiper.autoplay.stop();
  });
  btn.addEventListener("mouseleave", () => {
    if (!document.body.classList.contains("modal-aberto")) {
      swiper.autoplay.start();
    }
  });
});

document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.classList.remove("modal-aberto");
      swiper.autoplay.start();
    }
  });
});


