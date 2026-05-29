const targetUrl = atob("aHR0cHM6Ly94b25lLmZ1bi9wcm9kdWN0cy83LWNzMi14MS1pbnRlcm5hbD9kYXk9MzAmcHJvbW89c2hhcmtoYWNr");

document.querySelectorAll("[data-redirect-link]").forEach((link) => {
  link.setAttribute("href", targetUrl);
});

const menuButtons = document.querySelectorAll("[data-menu-button]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

if (menuButtons.length && mobileMenu) {
  const setExpanded = (value) => {
    menuButtons.forEach((button) => button.setAttribute("aria-expanded", String(value)));
  };

  menuButtons.forEach((menuButton) => {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      setExpanded(!isOpen);
      mobileMenu.hidden = isOpen;
    });
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setExpanded(false);
      mobileMenu.hidden = true;
    });
  });
}
