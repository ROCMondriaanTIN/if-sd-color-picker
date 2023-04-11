console.log("main.js loaded");

// Variables
const bgColor = {
    r: 12, 
    g: 50,
    b: 100,

    toCSS: function () {
        let result = `rgb(${this.r},${this.g}, ${this.b})`;

        return result;
    },

    toHex: function () {
        let result = "#";
        // bewerk hier het resultaat naar een hexadecimaal getal. 
        result += Number(this.r).toString(16);
        result += Number(this.g).toString(16);
        result += Number(this.b).toString(16);
        return result;
    }
}

const redSlider = document.querySelector("input.red");
const greenSlider = document.querySelector("input.green");
const blueSlider = document.querySelector("input.blue");

//Event listeners
redSlider.addEventListener("change", (event) => {
    bgColor.r = event.target.value;
    document.querySelector("span.r-value").textContent = bgColor.r;
    changeCircleColor();
    changeHeading();
});

greenSlider.addEventListener("change", (event) => {
    bgColor.g = event.target.value;
    document.querySelector("span.g-value").textContent = bgColor.g;
    changeCircleColor();
    changeHeading();
});

blueSlider.addEventListener("change", (event) => {
    bgColor.b = event.target.value;
    document.querySelector("span.b-value").textContent = bgColor.b;
    changeCircleColor();
    changeHeading();
});

//Functions
function changeCircleColor(){
    const circleDiv = document.querySelector("div.circle");
    circleDiv.style.backgroundColor = bgColor.toCSS(); 
}


function changeHeading(){
    const headings = document.querySelectorAll("h1, h2,h3,h4,h6");
    for (let i = 0; i < headings.length; i++) {
        const h = headings[i];
        h.style.backgroundColor = bgColor.toHex();
    }
}