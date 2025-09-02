const parent = document.getElementById("mainbox");
const parent1 = document.getElementById("parent1");
const button = document.getElementById("AddButton");

button.addEventListener("click", () => {
    // creating a new div
    const box = document.createElement("div");
    box.classList.add("parent1");
    parent.appendChild(box);

    const title = document.createElement("div");
    title.classList.add("top")
    title.textContent = "Title";
    box.appendChild(title);

    const image = document.createElement("div");
    image.classList.add("middle");
    box.appendChild(image);

    const pricetag = document.createElement("input");
    pricetag.placeholder = "enter the price here"
    pricetag.classList.add("bottom");
    box.appendChild(pricetag);

    /* chat gpt bit, to delete soon*/ 
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.style.display = "none"; // hide it
    image.appendChild(fileInput);

    image.addEventListener("click", () => {
        fileInput.click();
    });

     fileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(event) {
            image.style.backgroundImage = `url('${event.target.result}')`;
            image.style.backgroundSize = "contain";
            image.style.backgroundPosition = "center";
            image.style.backgroundRepeat = "no-repeat";
        }
        reader.readAsDataURL(file);
    });

});