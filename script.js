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
//while string includes x or /, find the first index of one of these operators
    while(string.includes("×") || string.includes("÷")){
        while(string.indexOf("×") !== -1){
            //set this index as a variable
            let index = string.indexOf("×");
            let lowIndex, highIndex;
            calcState.operator = "×";

            //go backwards from this operator until you hit another operator, adding each number to the front of a number string and remembering the final index as low index
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
    
    //this becomes the first number for the calculation
    
    //then go forward from the first operator index (for x or /) until you hit another operator, adding each number to a string to become the second number for the calculation
    
    //remember this index as well as forwardRange
    
    //Run the calculation with the first number, operator, and second number, converting the number strings to numbers first
    
    //Convert the answer back into a string
    
    //Splice the answer string into the equation to replace the characters between the backwardRange(+1) and forwardRange
    }
    //After this process is complete, all that should be left is addition and subtraction
    return string;
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

//10+10/10 should become 10+1
//10+10x10 should become 10+100
parseOrderOfOperations("10+10×10×10×10×10");