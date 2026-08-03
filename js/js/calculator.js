const button = document.getElementById("calculateLoan");

if(button){

button.addEventListener("click",()=>{

const amount=parseFloat(document.getElementById("loanAmount").value);

const rate=parseFloat(document.getElementById("interestRate").value)/100/12;

const years=parseFloat(document.getElementById("loanYears").value)*12;

if(isNaN(amount)||isNaN(rate)||isNaN(years)){

alert("Please fill in all fields.");

return;

}

const payment=(amount*rate)/(1-Math.pow(1+rate,-years));

document.getElementById("loanResult").innerHTML="$"+payment.toFixed(2);

});

}
