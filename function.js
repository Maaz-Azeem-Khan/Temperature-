$("#btn1").click(function convertTemperature() {
  let celsiusValue = document.getElementById("input1").value;

  let fahrenheitValue = document.getElementById("input2").value;

  if (celsiusValue === "" && fahrenheitValue === "") {
    alert("Please enter a value in either Celsius or Fahrenheit.");
    return;
  }

  // Handle invalid inputs (non-numeric values)
  if ((celsiusValue !== "" && isNaN(celsiusValue)) || (fahrenheitValue !== "" && isNaN(fahrenheitValue))) {
    alert("Invalid input. Please enter numeric values.");
    return;
  }

  if (celsiusValue !== "") {
    let fahrenheitValue = (celsiusValue * 9) / 5 + 32;

    document.getElementById("input2").value = fahrenheitValue;
  } else if (fahrenheitValue !== "") {
    let celsiusValue = ((fahrenheitValue - 32) * 5) / 9;

    document.getElementById("input1").value = celsiusValue;
  }
});
