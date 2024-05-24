/* function makeNegative(num) {
    return num >= 0 ? -num : num;
  }
  


 */
  function makeNegative() {
    var numberInput = document.getElementById("number").value;
    var resultDiv = document.getElementById("result");
    var result = parseFloat(numberInput);
    
    if (!isNaN(result)) {
      result = result >= 0 ? -result : result;
      resultDiv.textContent = "Result: " + result;
    } else {
      resultDiv.textContent = "Please enter a valid number.";
    }
  }