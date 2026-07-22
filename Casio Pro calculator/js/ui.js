// ======================================
// CASIO PRO CALCULATOR
// UI Utilities
// ======================================

function showToast(message, type = "success") {

    const toast = document.getElementById("toast");

    if (!toast) return;

    toast.textContent = message;

    // Reset classes
    toast.className = "toast";

    // Add color based on type
    toast.classList.add(type);

    // Show
    toast.classList.add("show");

    // Hide after 1.8 seconds
    setTimeout(() => {

        toast.classList.remove("show");

    }, 1800);

}