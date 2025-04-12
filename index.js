document.addEventListener("DOMContentLoaded", () => {
    textBackground = document.querySelectorAll(".text-background")
    textBackground.forEach(element => {
        text = document.createTextNode(
            "PURPLE_PENTAGONS_".repeat(10)
        );
        element.appendChild(text);
    });
})