document.addEventListener("DOMContentLoaded", () => {
    textBackground = document.querySelectorAll(".text-background")
    textBackground.forEach(element => {
        text = document.createTextNode(
            "PURPLEPENTAGONS".repeat(10)
        );
        element.appendChild(text);
    });
})