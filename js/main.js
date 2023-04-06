//Variables
const redSlider = document.querySelector("input.red");

const backgroundColor = {
    red: 12, 
    green: 50,
    blue: 100,

    toCSS: function (){
        let result = `rgb(${this.r},${this.g}, ${this.b})`;
        return result;
    },
    toHex: function (){
        let result = "";
        // bewerk hier het resultaat naar een heximale decimalen. 
        return result;
    }
}



//Event listeners
redSlider.addEventListener("change", (event)=>{
    backgroundColor.red = event.target.value;
    
    changeCircleColor();
});

//Functions
function changeCircleColor(){
    const circleDiv = document.querySelector("div.circle");
    circleDiv.style.backgroundColor = backgroundColor.toCSS();    
}