let display = document.getElementById("display");
let operand1 = "";
let operand2 = "";
let operator = "";

function addDigit(digit) {
  if (operator === "") {
    operand1 += digit;
    display.value = operand1;
  } else {
    operand2 += digit;
    display.value = operand2;
  }
}

function addOperator(op) {
  if (operand1 !== "") {
    // Garante que um operador só pode ser adicionado após o primeiro operando
    operator = op;
    display.value = ""; // Limpa o display para o próximo operando
  }
}

function clearDisplay() {
  operand1 = "";
  operand2 = "";
  operator = "";
  display.value = "";
}

function calculate() {
  let result;
  // Assegura que a conversão para número é feita corretamente e verifica se operandos não estão vazios
  let num1 = parseFloat(operand1);
  let num2 = parseFloat(operand2);

  if (!isNaN(num1) && !isNaN(num2)) {
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      // Inclua casos para outros operadores aqui, se necessário
      default:
        alert("Operador inválido!");
        return; // Sai da função caso não seja um operador esperado
    }
    display.value = result.toString();
    operand1 = result.toString(); // Permite operações encadeadas
    operand2 = "";
    operator = "";
  } else {
    alert("Operação inválida!");
  }
}
