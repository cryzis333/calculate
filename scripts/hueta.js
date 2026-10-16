console.log("test")

function calculate() {

  let userInputOne = Number(document.getElementById("userInputH").value);
  let userInputTwo = Number(document.getElementById("userInputH2").value);

  function sum() {
    return userInputOne + userInputTwo
  }

  function min() {
    return userInputOne - userInputTwo
  }

  function mul() {
    return userInputOne * userInputTwo
  }

  function div() {
    if (userInputTwo === 0) {
      return "На ноль делить нельзя";
    }
    return userInputOne / userInputTwo
  }

  function rotsum() {
    return (userInputOne * userInputOne) + (userInputTwo * userInputTwo)
  }

  function rotsumsum() {
    return (userInputOne * userInputOne * userInputOne) + (userInputTwo * userInputTwo * userInputTwo)
  }

  function test() {
    let operation = document.getElementById("operationH").value;
    console.log(operation);
    if(operation == "+") {
      let result = document.getElementById("resultH").textContent = sum();
   } else if (operation == "-") {
    let result = document.getElementById("resultH").textContent = min();
   } else if (operation == "*") {
    let result = document.getElementById("resultH").textContent = mul();
   } else if (operation == "/") {
    let result = document.getElementById("resultH").textContent = div();
   } else if (operation == "+^2") {
    let result = document.getElementById("resultH").textContent = rotsum();
   } else if (operation == "+^3") {
    let result = document.getElementById("resultH").textContent = rotsumsum();
   } else {
    console.log("ты даун?");
   };
   };
   test();
};

let knopkaH = document.getElementById("knopkaH");

knopkaH.addEventListener('click', calculate);
