class Calculadora {
  construcao(inputDisplay, outputDisplay) {}

  limparTudo() {}

  apagar() {}

  inserirNumero(value) {}

  inserirOperacao(value) {}

  numeroNegativo() {}

  inserirPonto () {}

  gerarResultado() {}

  //
}

const inputDisplay = document.querySelector("#historia");
const outputDisplay = document.querySelector("#resultado")

const allClearButton = document.querySelector("[data-all-clear]");
const backspaceButton = document.querySelector("[data-backspace]");
const operationButtons = document.querySelector("[data-operator]");
const numberButtons = document.querySelector("[data-number]");
const negationButton = document.querySelector("[data-negation]")
const decimalButton = document.querySelector("[data-decimal]");
const equalsButton = document.querySelector("[data-equals]");

//


const calculator = new Calculator(inputDisplay, outputDisplay);

// add event handlers to the calculador buttons
allClearButton.addEventListener("click", ( => {
  calculator,clearAllHistory();
}));






















