
function removeChar(str){
    return str.slice(1, -1);
  }

  function removeFirstLast() {
    var input = document.getElementById("inputString").value;
    var result = removeChar(input);
    document.getElementById("result").innerText = "Result: " + result;
  }