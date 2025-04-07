// Get modal elements
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.querySelector(".close-modal");

// Show modal when open button is clicked
openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";  // Changed from "block" to "flex" to center modal
});

// Close modal when close button is clicked
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
