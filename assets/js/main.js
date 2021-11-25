const themeKey = "@penalogue:user-theme";
const userTheme = localStorage.getItem(themeKey);
const themeToggler = document.querySelector("#theme-toggle");

const sunImageLink = "./assets/images/sun.svg";
const moonImageLink = "./assets/images/moon.svg";

if (!userTheme) {
  localStorage.setItem(themeKey, "light");
}

if (
  userTheme === "dark" ||
  (!(themeKey in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  themeToggler.src = moonImageLink;
} else {
  document.documentElement.classList.remove("dark");
  themeToggler.src = sunImageLink;
}

const toggleMode = () => {
  const userTheme = localStorage.getItem(themeKey);
  if (userTheme && userTheme === "dark") {
    localStorage.setItem(themeKey, "light");
    document.documentElement.classList.remove("dark");
    themeToggler.src = sunImageLink;
  } else if (userTheme && userTheme === "light") {
    localStorage.setItem(themeKey, "dark");
    document.documentElement.classList.add("dark");
    themeToggler.src = moonImageLink;
  } else {
    localStorage.setItem(themeKey, "light");
    document.documentElement.classList.remove("dark");
    themeToggler.src = sunImageLink;
  }
};

themeToggler.addEventListener("click", (e) => toggleMode());

const mobileNavButton = document.querySelector("#mobile-nav-button");
const mobileNav = document.querySelector("#navbar-mobile");
const mobileNavContent = document.querySelector(".mobile-content");
const mobileNavCloser = document.querySelector("#close-mobile-nav");

mobileNavButton.addEventListener("click", () => {
  document.body.classList.toggle("modal-open");
  mobileNav.classList.toggle("open");
  mobileNavContent.classList.toggle("open");
});

mobileNavCloser.addEventListener("click", () => {
  document.body.classList.toggle("modal-open");
  mobileNav.classList.toggle("open");
  mobileNavContent.classList.toggle("open");
});
