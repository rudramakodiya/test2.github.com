// Get input values safely and validate them
function getValues() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    return { error: "Please enter valid numbers in both fields." };
  }

  if (num2 === 0) {
    return { error: "Second number cannot be zero." };
  }

  return { num1, num2 };
}

// Display result
function showResult(message) {
  document.getElementById("result").innerText = message;
}

// 1. Percentage of first number relative to second
function calculatePercentage() {
  const data = getValues();
  if (data.error) return showResult(data.error);

  const percent = (data.num1 / data.num2) * 100;
  showResult(`${data.num1} is ${percent.toFixed(2)}% of ${data.num2}.`);
}

// 2. Percentage increase (num1 → num2)
function calculateIncrease() {
  const data = getValues();
  if (data.error) return showResult(data.error);

  const increase = ((data.num2 - data.num1) / data.num1) * 100;

  if (data.num1 === 0) {
    return showResult("Cannot calculate increase from zero.");
  }

  showResult(`Increase from ${data.num1} to ${data.num2} is ${increase.toFixed(2)}%.`);
}

// 3. Percentage decrease (num1 → num2)
function calculateDecrease() {
  const data = getValues();
  if (data.error) return showResult(data.error);

  const decrease = ((data.num1 - data.num2) / data.num1) * 100;

  if (data.num1 === 0) {
    return showResult("Cannot calculate decrease from zero.");
  }

  showResult(`Decrease from ${data.num1} to ${data.num2} is ${decrease.toFixed(2)}%.`);
}
