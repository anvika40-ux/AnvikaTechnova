/* -----------------------------------------------
   GSAP HERO ANIMATIONS
--------------------------------------------------*/

// Name + titles fade + slide
gsap.from(".name", {
  y: 30,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});

gsap.from(".titles", {
  y: 20,
  opacity: 0,
  duration: 1.2,
  delay: 0.2,
  ease: "power3.out"
});

gsap.from(".tagline", {
  y: 15,
  opacity: 0,
  duration: 1.2,
  delay: 0.4
});

gsap.from(".cta-row", {
  y: 20,
  opacity: 0,
  duration: 1.2,
  delay: 0.6
});

/* -----------------------------------------------
   AVATAR FLOAT + GLOW PULSE
--------------------------------------------------*/
gsap.to(".avatar-img", {
  y: -8,
  repeat: -1,
  yoyo: true,
  duration: 2.4,
  ease: "power1.inOut"
});

gsap.to(".avatar-img", {
  boxShadow: "0 0 40px rgba(127, 92, 255, 0.7)",
  repeat: -1,
  yoyo: true,
  duration: 3,
  ease: "sine.inOut"
});

/* -----------------------------------------------
   SECTION ANIMATION ON SCROLL
--------------------------------------------------*/
gsap.utils.toArray(".section").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%", 
    }
  });
});

/* -----------------------------------------------
   SMOOTH SCROLL FOR NAVIGATION LINKS
--------------------------------------------------*/
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

/* -----------------------------------------------
   CONTACT FORM SUBMIT (DEMO)
--------------------------------------------------*/
function onContactSubmit(event) {
  event.preventDefault();
  alert("Thank you! Your message has been sent.");
}

/* -----------------------------------------------
   AUTO YEAR UPDATE
--------------------------------------------------*/
document.getElementById("year").textContent = new Date().getFullYear();
