const counterDisplay = document.querySelector("h3");
let counter = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = Math.random() * 200 + 100 + "px";
  // *100 pck le random crée un chiffre entre 0 et 1 donc on multiplie par 100 pour que la height soit au moins égale à 100.
  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";
  // + 50 car on veut que les bulles partent du bas. Donc on rajoute une marge de 50% par rapport au TOP;
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1; // si ton random est supérieur à 0.5 tu renvoi 1 sinon tu renvoi -1. Donc une fois sur deux ce sera 1 et l'autre fois -1.
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%"); // on rajoute le plusMinus pour que le pop soit plus aléatoire à gauche et à droite mais non indispensable

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });

  setTimeout(() => {
    bubble.remove();
  }, 8000); // au bout de 8 sec la bulle disparait
};

setInterval(bubbleMaker, 400);
