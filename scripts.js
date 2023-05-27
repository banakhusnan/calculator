const calculator = {
  screen: "",
  hasil: 0,
};

const screen = document.querySelector(".calculator-screen");

const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
  const { target } = event;
  if (!target.matches("button")) {
    return false;
  }
  if (target.classList.contains("number")) {
    calculator.screen += target.value;
    screen.value = calculator.screen;
  }

  if (target.classList.contains("operator")) {
    calculator.screen += target.value;
    screen.value = calculator.screen;
  }

  if (target.classList.contains("equal-sign")) {
    const inputValue = calculator.screen;

    if (inputValue) {
      calculator.hasil = eval(inputValue);
      screen.value = calculator.hasil;
    } else {
      screen.value = "0";
    }
  }

  if (target.classList.contains("all-clear")) {
    calculator.screen = "";
    screen.value = "0";
  }
});
