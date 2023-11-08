const calcState = {
    first: "",
    operator: "",
    second: "",
    screenContent: "",
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

//10+10/10 should become 10+1
//10+10x10 should become 10+100
function parseOrderOfOperations(string){
    while(string.includes("×") || string.includes("÷")){
        while(string.indexOf("×") !== -1){
            let index = string.indexOf("×");
            let lowIndex, highIndex;
            calcState.operator = "×";

            for(let i = index - 1; i >= 0; i--){
                if (string[i] < "/" ||
                    string[i] > ":"){
                        break;
                    }
                if(string[i] >= "/" &&
                    string[i] <= ":" ||
                    string[i] === "."){
                        lowIndex = i;
                        calcState.first = string[i] + calcState.first;
                    }
            }

            for(let i = index + 1; i <= string.length - 1; i++){
                if (string[i] < "/" ||
                    string[i] > ":"){
                        break;
                    }
                if(string[i] >= "/" &&
                    string[i] <= ":" ||
                    string[i] === "."){
                        highIndex = i;
                        calcState.second += string[i];
                    }
            }

            let answer = operate(calcState.first, calcState.operator, calcState.second).toString();
            
            string = string.slice(0, lowIndex) + answer + string.slice(highIndex + 1);
            
            calcState.first = "";
            calcState.operator = "";
            calcState.second = "";

            console.log(string);
        }
    
        while(string.indexOf("÷") !== -1){
            let index = string.indexOf("÷");
            let lowIndex, highIndex;
            calcState.operator = "÷";

            for(let i = index - 1; i >= 0; i--){
                if (string[i] < "/" ||
                    string[i] > ":"){
                        break;
                    }
                if(string[i] >= "/" &&
                    string[i] <= ":" ||
                    string[i] === "."){
                        lowIndex = i;
                        calcState.first = string[i] + calcState.first;
                    }
            }

            for(let i = index + 1; i <= string.length - 1; i++){
                if (string[i] < "/" ||
                    string[i] > ":"){
                        break;
                    }
                if(string[i] >= "/" &&
                    string[i] <= ":" ||
                    string[i] === "."){
                        highIndex = i;
                        calcState.second += string[i];
                    }
            }

            let answer = operate(calcState.first, calcState.operator, calcState.second).toString();
            
            string = string.slice(0, lowIndex) + answer + string.slice(highIndex + 1);
            
            calcState.first = "";
            calcState.operator = "";
            calcState.second = "";

            console.log(string);
        }    
    }
}

function parseScreen(string){ //1+1+1
    let current = "";
    string.forEach();
}

function operate(num1, operator, num2){
    switch(operator){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "×":
            return num1 * num2;
        case "÷":
            return num1 / num2;
        default:
            console.log("Operator not recognized!");
    }
}