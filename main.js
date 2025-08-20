//#region ========== HEADER ==========
let closeButton = document.getElementById("close-button");
let navMenu = document.getElementById("nav-menu");
let burgerButton = document.getElementById("burger-button");

closeButton.addEventListener("click", () => {
  navMenu.classList.remove("nav-hide");
  burgerButton.style.opacity = 1;
});

burgerButton.addEventListener("click", () => {
  navMenu.classList.add("nav-hide");
  burgerButton.style.opacity = 0;
});

function showHeader() {
  let header = document.getElementById("header");
  if (scrollY >= 50) {
    header.classList.add("shadow-header");
  } else {
    header.classList.remove("shadow-header");
  }
}

window.addEventListener("scroll", showHeader);

const links = document.querySelectorAll("nav a");

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

//#endregion
//#region ========== ABOUT ==========
//Movement Animation to happen
const card = document.getElementById("about-description");
const container = document.getElementById("about");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 20 - e.pageX) / 100;
  let yAxis = (window.innerHeight * 0.02 - e.pageY) / 100;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
//#endregion
//#region ========== PROJECT ==========
let projectContainer = document.querySelector(".project-cards");

let projects = [
  {
    image: "./assets/CakeStore.png",
    title: "Cake Store",
    subtitle: "Cake Trading webite",
    githubLink: "https://github.com/Elvinesgerov/Cake-Store.git",
    liveView: "https://cake-store-psi.vercel.app/",
  },
  {
    image: "./assets/MyFilm.png",
    title: "My Film",
    subtitle: "Film website",
    githubLink: "https://github.com/Elvinesgerov/my-Film.git",
    liveView: "https://my-film-mu.vercel.app/",
  },
  {
    image: "./assets/GithubFinder.png",
    title: "GithubFinder",
    subtitle: "GithubFinder website",
    githubLink: "https://github.com/Elvinesgerov/GithubFinder.git",
    liveView: "https://github-finder-five-gilt.vercel.app/",
  },
  {
    image: "./assets/GameStore.png",
    title: "GameStore",
    subtitle: "GameStore Trading webite",
    githubLink: "https://github.com/Elvinesgerov/Game-Store.git",
    liveView: "https://game-store-three-pi.vercel.app/",
  },
  {
    image: "./assets/calculyatorApp.png",
    title: "Calculyator",
    subtitle: "Calculyator App",
    githubLink: "https://github.com/Elvinesgerov/Calculator-App.git",
    liveView: "https://calculator-app-eight-alpha.vercel.app/",
  },
  {
    image: "./assets/piozogen.png",
    title: "Piozogen",
    subtitle: "Piozogen website",
    githubLink: "https://github.com/Elvinesgerov/Hakaton.git",
    liveView: "https://hakaton-eight.vercel.app/",
  },
  {
    image: "./assets/valyuta.png",
    title: "Valyuta",
    subtitle: "Valyuta App",
    githubLink: "https://github.com/Elvinesgerov/Valyuta.git",
    liveView: "https://valyuta-ochre.vercel.app/",
  },
  {
    image: "./assets/TodoList.png",
    title: "TodoList",
    subtitle: "TodoList website",
    githubLink: "https://github.com/Elvinesgerov/to-do-listt.git",
    liveView: "https://to-do-listt-kohl.vercel.app/",
  },
];

function showCards(arr) {
  arr.forEach((element) => {
    let projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectCard.innerHTML = `
          <img src="${element.image}" alt="Project Image" />
          <div class="project-title">
            <h2>${element.subtitle}</h2>
            <h1>${element.title}</h1>
          </div>
          <div class="project-links">
            <a target="_blank" href="${element.liveView}" class="project-link">
              <i class="ri-eye-2-line"></i>
              <p>View</p>
            </a>
            <a target="_blank" href="${element.githubLink}" class="project-link">
              <i class="ri-eye-2-line"></i>
              <p>Github</p>
            </a>
          </div>
    `;
    projectContainer.append(projectCard);
  });
}

showCards(projects);
//#endregion
//#region ========== CONTACT ==========
let contactForm = document.getElementById("contact-form");

const sendMail = () => {
  emailjs.sendForm(
    "service_gynp5l1",
    "template_o54layb",
    "#contact-form",
    "bzj7XofiRWUJhFwDn"
  );
};
let inputName = document.getElementById("name");
let inputSubject = document.getElementById("subject");
let inputEmail = document.getElementById("email");
let inputMessage = document.getElementById("message");
let validateDesc = document.getElementById("validate-desc");
let validateTitle = document.getElementById("validate-title");
let validation = document.querySelector(".toast");
let toastTitle = document.querySelector(".toast-title");

let submitBtn = document.getElementById("contact-submit");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    inputName.value.length > 0 &&
    inputSubject.value.length > 0 &&
    inputEmail.value.length > 0 &&
    inputMessage.value.length
  ) {
    validation.classList.add("success");
    validateTitle.textContent = "Success";
    validateDesc.textContent = "Message sent successfully";
    sendMail();
    resetInputs();
  } else {
    validation.classList.add("error");
    if (inputName.value.length === 0) {
      validateDesc.textContent = "Please fill your name!";
    } else if (inputEmail.value.length === 0) {
      validateDesc.textContent = "Please fill your email!";
    } else if (inputSubject.value.length === 0) {
      validateDesc.textContent = "Please fill your subject!";
    } else if (inputMessage.value.length === 0) {
      validateDesc.textContent = "Please fill your message!";
    }
    validateTitle.textContent = "Error";
  }
  validateAnimation();
});

function validateAnimation() {
  submitBtn.disabled = true;
  // validation.style.right = "-100%";
  setTimeout(() => {
    submitBtn.disabled = false;
    // validation.style.right = "-100%";
    validation.classList.remove("error");
    validation.classList.remove("success");
  }, 1500);
}

function successAnimation() { }

function resetInputs() {
  inputName.value = "";
  inputSubject.value = "";
  inputEmail.value = "";
  inputMessage.value = "";
}

//#endregion
