var buttons = document.getElementsByTagName('button');
var resultDisplay = document.getElementById('result');
var expression = "";
var lastInput = "";

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        var value = this.innerText;

        if (value === 'AC') {
            expression = "";
            lastInput = "";
            resultDisplay.value = '0';
        } else if (value === '=') {
            try {
                expression = expression.replace(/X/g, '*'); // Replace X with * for multiplication
                resultDisplay.value = eval(expression);
                expression = resultDisplay.value; // Store the result for further operations
            } catch (e) {
                resultDisplay.value = "Error";
                expression = "";
            }
            lastInput = "";
        } else if (['+', '-', 'X', '/'].includes(value)) {
            if (['+', '-', 'X', '/'].includes(lastInput)) {
                expression = expression.slice(0, -1); // Replace last operator if two are entered
            }
            expression += value;
            resultDisplay.value = expression;
            lastInput = value;
        } else {
            if (resultDisplay.value === '0' || ['+', '-', 'X', '/'].includes(lastInput)) {
                resultDisplay.value = value;
            } else {
                resultDisplay.value += value;
            }
            expression += value;
            resultDisplay.value = expression;
            lastInput = value;
        }
    });
}
