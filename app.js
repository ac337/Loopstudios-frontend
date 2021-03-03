document.querySelector(".burger").addEventListener("click", () => {
    document.querySelector(".header-section .navigation").classList.add("active");
});

document.querySelector(".close").addEventListener("click", () => {
    document
        .querySelector(".header-section .navigation")
        .classList.remove("active");
});
