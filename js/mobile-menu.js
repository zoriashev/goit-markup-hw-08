(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileBtnRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.classList.toggle("aria-expanded", !expanded);
    mobileBtnRef.classList.toggle("is-open");
  });
})();
