const calcState = {
    first: "",
    operator: "",
    second: "",
    screenContent: "",
    allClear(){
        this.first = "";
        this.operator = "";
        this.second = "";
        this.screenContent = "";
    },
    clearLastEquation(){
        this.first = "";
        this.operator = "";
        this.second = "";
    }
};

const screen = document.querySelector(".screen");
screen.textContent = calcState.screenContent;
const keyPad = document.querySelector(".keypad-container");

keyPad.addEventListener("click", (e) => {
    if(e.target.dataset.value){
        calcState.screenContent += e.target.dataset.value;
        screen.textContent = calcState.screenContent;
    } else if(e.target.textContent === "="){
        calcState.screenContent = solve(calcState.screenContent);
        screen.textContent = calcState.screenContent;
        calcState.clearLastEquation();
        console.log(calcState);
    } else if(e.target.textContent === "AC"){
        calcState.allClear();
        screen.textContent = calcState.screenContent;
    }
});

function solve(string){
    string = parseOrderOfOperations(string);
    string = parsePlusAndMinus(string);
    return string;
}

function parsePlusAndMinus(string){
    calcState.first = 0;
    calcState.operator = "+";
    calcState.second = "0";
    for(let i = 0; i <= string.length - 1; i++){
        if(string[i] < "/" || string[i] > ":"){
            calcState.first = operate(calcState.first, calcState.operator, parseInt(calcState.second));
            calcState.operator = string[i];
            calcState.second = "";
            continue;
        }

        if (string[i] >= "/" &&
            string[i] <= ":" ||
            string[i] === "."){
                calcState.second += string[i];
                continue;      
        }
    }

    calcState.first = operate(calcState.first, calcState.operator, parseInt(calcState.second));

    return calcState.first;
}

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
                if(string[i] === "-" && string[i - 1] === "×"){
                    calcState.second += string[i];
                    continue;
                }
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
            
            calcState.allClear();
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
                if(string[i] === "-" && string[i - 1] === "÷"){
                    calcState.second += string[i];
                    continue;
                }
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
            
            calcState.allClear();
        }    
    }

    return string;
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
            if(num2 === "0"){
                calcState.screenContent = "ERROR:Divide by 0";
                screen.textContent = calcState.screenContent;
                console.log(calcState);
                return calcState.screenContent;
            } else {
                return num1 / num2;
            }
        default:
            console.log("Operator not recognized!");
    }
}