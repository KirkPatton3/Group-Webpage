function toggleBio(bioId, button) {
    const card = document.getElementById(bioId).closest(".card");
    const isOpen = card.classList.toggle("expanded");

    if (button) {
        button.textContent = isOpen ? "Hide Bio" : "Show Bio";
        button.setAttribute("aria-expanded", String(isOpen));
    }
}

function showSection(sectionId) {
    const sections = ["bios", "vision"];

    sections.forEach(function (id) {
        const section = document.getElementById(id);
        const navButton = document.getElementById("nav-" + id);
        const isActive = id === sectionId;

        section.hidden = !isActive;
        navButton.classList.toggle("active", isActive);
    });
}
