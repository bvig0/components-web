const btnToggle = document.querySelector(".btnToggle");
const lockIcon = document.querySelector(".icon i");

btnToggle.addEventListener("click", () => {
    btnToggle.classList.toggle("active");

    if (btnToggle.classList.contains("active")) {
        return lockIcon.classList.replace("bi-unlock-fill", "bi-lock-fill");
    }
    lockIcon.classList.replace("bi-lock-fill", "bi-unlock-fill");
})