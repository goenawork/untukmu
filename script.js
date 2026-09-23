const enterButton = document.getElementById("enterButton");
const openButton = document.getElementById("openButton");
const letterModal = document.getElementById("letterModal");
const closeButton = document.getElementById("closeButton");
const modalBackdrop = document.getElementById("modalBackdrop");

enterButton.addEventListener("click", () => {
  document.getElementById("story").scrollIntoView({ behavior: "smooth" });
});

function openLetter() {
  letterModal.classList.add("open");
  letterModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLetter() {
  letterModal.classList.remove("open");
  letterModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

openButton.addEventListener("click", openLetter);
closeButton.addEventListener("click", closeLetter);
modalBackdrop.addEventListener("click", closeLetter);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && letterModal.classList.contains("open")) {
    closeLetter();
  }
});
