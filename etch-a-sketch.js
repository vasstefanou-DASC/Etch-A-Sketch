const projectName = document.createElement("h1");
projectName.classList.add("parts");
projectName.textContent = "Etch-A-Sketch";
document.body.appendChild(projectName);

const buttonsArea = document.createElement("div");
buttonsArea.classList.add("parts");
const buttonNames = ["Choose your grid","Same Color","Random Color","Opacity Mode"];
for (let i=0;i<4;i++) {
    const button = document.createElement("button");
    button.textContent = buttonNames[i];
    buttonsArea.appendChild(button);
}
document.body.appendChild(buttonsArea);

const sketchContainer = document.createElement("div");
sketchContainer.classList.add("container");
function createBoxes(boxesSide) {
    const size = 480/boxesSide;
    for (let i=0;i<boxesSide**2;i++) {
        const sketchBox = document.createElement("div");
        sketchBox.classList.add("box");
        sketchBox.style.width = `${size}px`;
        sketchBox.style.height = `${size}px`;
        sketchContainer.appendChild(sketchBox);
    }
}
createBoxes(16);    
document.body.appendChild(sketchContainer);


