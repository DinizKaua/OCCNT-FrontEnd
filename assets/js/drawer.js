document.addEventListener("DOMContentLoaded", () => {
  const drawerContent = document.querySelector(".drawer-content");
  const drawerButton = document.querySelector(".drawer-title");

  if (drawerContent && drawerButton) {
    drawerButton.addEventListener("click", () => {
      const expanded = drawerButton.getAttribute("aria-expanded") === "true";
      drawerButton.setAttribute("aria-expanded", !expanded);
      drawerContent.hidden = expanded;
    });
  }
});
