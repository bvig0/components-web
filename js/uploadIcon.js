let image = document.querySelector("img")
let input = document.querySelector("input");

input.addEventListener("change", () => {
    if (input.files && input.files[0]) {
        image.src = URL.createObjectURL(input.files[0]);
    }
});