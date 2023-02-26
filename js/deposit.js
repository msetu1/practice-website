document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositTotalAmountString = depositField.value;
    const newDepositTotalAmount = parseFloat(newDepositTotalAmountString);


    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const depoditTotal = previousDepositTotal + newDepositTotalAmount;
    depositTotalElement.innerText = depoditTotal;

    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousbalanceTotal = parseFloat(previousBalanceTotalString);

    const totalBalance = previousbalanceTotal + newDepositTotalAmount;
    balanceElement.innerText = totalBalance;


    depositField.value = '';

})