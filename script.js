const model = document.createElement("div");
model.id = "model";
document.body.appendChild(model);

const images = document.querySelectorAll(".img");

images.forEach(image => {
    image.addEventListener("click", () => {
        // Clear old content
        model.innerHTML = "";

        // Create new image
        const img = document.createElement("img");
        img.src = image.src;
        img.style.maxWidth = "90%";  // slightly bigger
        img.style.maxHeight = "90%";
        img.style.borderRadius = "10px"; // rounded corners optional

        model.appendChild(img);

        // Show modal
        model.classList.add("active");
    });
});

// Click on modal to close
model.addEventListener("click", () => {
    model.classList.remove("active");
});
