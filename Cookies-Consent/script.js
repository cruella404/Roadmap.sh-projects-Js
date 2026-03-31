document.addEventListener("DOMContentLoaded", () => {
    const cookieBox = document.querySelector(".box");
    const acceptBtn = document.querySelector(".accept-btn");
    const declineBtn = document.querySelector(".decline-btn");

    const cookieChoice = localStorage.getItem("cookieConsent");
    if (cookieChoice) cookieBox.style.display = "none";

    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "accepted");
        cookieBox.style.display = "none";
    });

    declineBtn.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "declined");
        cookieBox.style.display = "none";
    });
});