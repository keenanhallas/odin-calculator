const calcState = {
    numberOne: 0,
    operator: "",
    numberTwo: 0,
    screenContent: ``,
};

const screen = document.querySelector(".screen");
screen.textContent = calcState.screenContent;
const keyPad = document.querySelector(".keypad-container");
keyPad.addEventListener("click", (e) => {
    if(e.target.dataset.value){
        calcState.screenContent += e.target.dataset.value;
        screen.textContent = calcState.screenContent;
        console.log(calcState.screenContent);
    }
});

function operate(num1, operator, num2){
    switch(operator){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "x":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            console.log("Operator not recognized!");
    }
}