let calculateButton = document.getElementById("calculate");
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
let inputprincipal=document.getElementById("principal");

let calculate = () => {
  let p = Number(document.getElementById("principal").value);
  let r = Number(document.getElementById("rate").value);
  let t = Number(document.getElementById("time").value);
  
  let simpleInterest = (p * r * t) / 100;
  let amount = p + simpleInterest;


  result2.innerHTML = `<div>Principal Amount: <span>${p.toFixed(2)}</span></div>
  <div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>
  <div>Total Amount: <span>${amount.toFixed(2)}</span></div>`;
};

inputprincipal.addEventListener('keyup',(event)=>{
    result1.innerHTML = `<div>Principal Amount: <span>${event.target.value}</span></div>`
    });

calculateButton.addEventListener("click", calculate);