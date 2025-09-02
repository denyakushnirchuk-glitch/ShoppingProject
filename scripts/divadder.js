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
    pricetag.placeholder = "20$"
    pricetag.classList.add("bottom")
    box.appendChild(pricetag)
});