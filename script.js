const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let active = 1;

const update = () => {
  circles.forEach((circle, index) => {
    if (active > index) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  progress.style.width = ((active - 1) / (circles.length - 1)) * 100 + "%";

  if (active === 1) {
    prev.disabled = true;
  } else if (active === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};

next.addEventListener("click", () => {
  if (active < circles.length) {
    active++;
    console.log(active);
  }
  update();
});

prev.addEventListener("click", () => {
  if (active > 1) {
    active--;
  }
  update();
});
