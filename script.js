const menuButtons = document.querySelectorAll("#category button");

menuButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove 'selected' from all buttons
    menuButtons.forEach(btn => btn.classList.remove("selected"));
    // Add 'selected' to the clicked one
    button.classList.add("selected");
  });
});