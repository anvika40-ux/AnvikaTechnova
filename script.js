/* NEON CURSOR */
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

/* TYPING EFFECT */
const text = [
  "Frontend Developer",
  "Web Designer",
  "Creative Developer",
  "Student + Developer",
  "Building Premium Websites"
];

let index = 0;
let char = 0;

function type() {
  if (char < text[index].length) {
    document.getElementById("typing").innerHTML += text[index].charAt(char);
    char++;
    setTimeout(type, 90);
  } else {
    setTimeout(erase, 900);
  }
}

function erase() {
  if (char > 0) {
    document.getElementById("typing").innerHTML =
      text[index].substring(0, char - 1);
    char--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % text.length;
    setTimeout(type, 400);
  }
}

document.addEventListener("DOMContentLoaded", type);
