const enterButton = document.getElementById("enterButton");
const openButton = document.getElementById("openButton");
const letterModal = document.getElementById("letterModal");
const closeButton = document.getElementById("closeButton");
const modalBackdrop = document.getElementById("modalBackdrop");

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

enterButton?.addEventListener("click", () => {
  document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
});
openButton?.addEventListener("click", openLetter);
closeButton?.addEventListener("click", closeLetter);
modalBackdrop?.addEventListener("click", closeLetter);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && letterModal?.classList.contains("open")) {
    closeLetter();
  }
});
const chaptersEl = document.getElementById("chapters");

if (typeof chapters !== "undefined" && chaptersEl) {
  chapterData.forEach((c, i) => {
    const num = String(i + 3).padStart(2, "0"); // lanjut dari 03
    const paragraphs = c.text
      .split("\n\n")
      .map((p) => `<p class="body-copy">${p}</p>`)
      .join("");

    const section = document.createElement("section");
    section.className = "chapter section";
    section.innerHTML = `
      <div class="section-number">${num}</div>
      <div class="chapter-copy">
        <p class="eyebrow">Usia ${String(c.age).padStart(2, "0")} · ${c.year}</p>
        <h2>${c.title}</h2>
        ${paragraphs}
      </div>
      ${c.image ? `<figure class="chapter-photo"><img src="${c.image}" alt="${c.title}" loading="lazy"></figure>` : ""}
    `;
    chaptersEl.appendChild(section);
  });
}
