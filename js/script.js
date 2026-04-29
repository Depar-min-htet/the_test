const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const sideMenuToggle = document.querySelector(".side-menu-toggle");
const sideMenu = document.querySelector(".side-menu");
const menuOverlay = document.querySelector(".menu-overlay");
const menuCloseControls = document.querySelectorAll("[data-menu-close]");
const themeToggle = document.querySelector(".theme-toggle");
const themeText = document.querySelector(".theme-text");
const filterButtons = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");
const themeStorageKey = "portfolio-theme";

const getPreferredTheme = () => {
  const storedTheme = localStorage.getItem(themeStorageKey);

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const setTheme = (theme) => {
  document.documentElement.dataset.theme = theme;

  if (themeToggle && themeText) {
    const isDark = theme === "dark";
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    themeToggle.setAttribute("title", isDark ? "Switch to light mode" : "Switch to dark mode");
    themeText.textContent = isDark ? "Light" : "Dark";
  }
};

setTheme(getPreferredTheme());

const setSideMenu = (isOpen) => {
  sideMenu?.classList.toggle("open", isOpen);
  menuOverlay?.classList.toggle("open", isOpen);
  sideMenuToggle?.setAttribute("aria-expanded", String(isOpen));
};

navToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

sideMenuToggle?.addEventListener("click", () => {
  const isOpen = !sideMenu?.classList.contains("open");
  setSideMenu(isOpen);
});

menuCloseControls.forEach((control) => {
  control.addEventListener("click", () => setSideMenu(false));
});

sideMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setSideMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setSideMenu(false);
  }
});

themeToggle?.addEventListener("click", () => {
  const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  localStorage.setItem(themeStorageKey, nextTheme);
  setTheme(nextTheme);
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const activeFilter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const shouldShow = activeFilter === "all" || card.dataset.category === activeFilter;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});
