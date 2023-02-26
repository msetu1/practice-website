document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawTotalAmounString = withdrawField.value;
    const newWithdrawTotalAmoun = parseFloat(newWithdrawTotalAmounString);


    const withdrawTotalElement = document.getElementById('withdraw-total');
    const prevousWithdrawTotalString = withdrawTotalElement.innerText;
    const prevousWithdrawTotal = parseFloat(prevousWithdrawTotalString);

    const withdrawTotal = prevousWithdrawTotal + newWithdrawTotalAmoun;
    withdrawTotalElement.innerText = withdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceString = balanceTotalElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    const balanceTotal = previousBalance - newWithdrawTotalAmoun;
    balanceTotalElement.innerText = balanceTotal;


    withdrawField.value = '';
})