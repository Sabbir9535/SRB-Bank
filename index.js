const login = document.getElementById("LoginBtn");
login.addEventListener("click",function(){
    const loginArea =document.getElementById("login_area");
    loginArea.style.display = "none";
    const TransactionArea = document.getElementById("transaction_area");
    TransactionArea.style.display = "block";
});

const depositBtn = document.getElementById("deposit");

depositBtn.addEventListener("click", function() {
    // Get the value entered in the deposit input field
    const depositInput = document.getElementById("deposit_input").value;
    
    // Convert the input value to a floating-point number
    const depositAmount = parseFloat(depositInput);

    // Get the current deposit amount displayed on the page
    const currentDepositAmount =parseFloat(document.getElementById("deposit_amount").innerText);


    // Calculate the new total deposit amount
    const total = depositAmount + currentDepositAmount;

    // Update the deposit amount displayed on the page
    document.getElementById("deposit_amount").innerText = total;
});
