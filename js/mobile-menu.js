// -----------------OPEN CLOSE MENU

(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const logoMenuRef = document.querySelector("[logo-head]");
  
  menuBtnRef.addEventListener("click", () => {

      const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
      mobileMenuRef.classList.toggle("is-open");
      logoMenuRef.classList.toggle("is-open");
  });
})();
  
