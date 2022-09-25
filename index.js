// selecting all values
let initialPrice = document.getElementById("ip");
let currentPrice = document.getElementById("cp");
let quantityOfStocks = document.getElementById("quant");
let btn = document.getElementById("cal");
let display = document.querySelector("#output");

// click event listener
btn.addEventListener("click", calProfitAndLoss = () => { /* function calProfitAndLoss to calculate profit & loss*/
  let ip = Number(initialPrice.value);
  let cp = Number(currentPrice.value);
  let qty = Number(quantityOfStocks.value);

  if (ip > cp) {
    let loss = (ip - cp) * qty.toFixed(2);  /* toFixed to get correct to two decimal values*/
    let newIp = ip * qty;                   /* newIp variable declared to get the new initial price*/
    let lossPercentage = ((loss / newIp) * 100).toFixed(2);
    display.innerText =
      "Loss is " +
      "₹ " +
      loss +
      " and loss percentage is " +
      lossPercentage +
      "%";
  } else if (ip < cp) {
    let profit = (cp - ip) * qty.toFixed(2);
    let newIp = ip * qty;
    let profitPercentage = ((profit / newIp) * 100).toFixed(2);
    display.innerText =
      "Profit is " +
      "₹ " +
      profit +
      " and profit percentage is " +
      profitPercentage +
      "%";
  }
  
  else{
    display.innerText = "No profit or loss, ip & cp are equal";
  }
});
