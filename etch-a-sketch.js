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



