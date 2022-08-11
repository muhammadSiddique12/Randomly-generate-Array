function arr() {
  var x;
  x = 0;
  x = parseInt(document.getElementById("num1").value);
  if (isNaN(x)) {
    document.getElementById("array").innerHTML = "Please enter Numeric value";
  } else if (x > 99) {
    document.getElementById("array").innerHTML = "enter number less then 99";
  } else {
    y = [];
    // console.log(x);
    document.getElementById("arr").innerHTML = "";
    for (i = 0; i <= x - 1; i++) {
      y[i] = generateString(5);
      document.getElementById("arr").innerHTML += i + 1 + " : " + y[i] + "<br>";
    }
    document.getElementById("array").innerHTML =
      "First element:" + y[0] + "<br>Last element:" + y[y.length - 1];
  }
}
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function generateString(length) {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
