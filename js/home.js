// add money to the account

// step 1: add an event handler to the add money button inside the form
// s-2 get money to be added to the account balance

// step 3 verify pin number(wrong way)
// step 4 get the current balance

document.getElementById('btn-add-money').addEventListener('click',function(event){
// prevent page reload after form submit
event.preventDefault();

const addMoneyInput = document.getElementById('input-add-money').value;
console.log(addMoneyInput);

const pinNumberInput = document.getElementById('input-pin-number').value;
console.log(pinNumberInput);

if(pinNumberInput === '1234'){
    console.log('adding money to your account');
    
    // step 4 

    const balance = document.getElementById('account-balance').innerText;
    console.log(type of balance);

    // step 5 add money
    const addMoneyNumber = parseFloat(addMoneyInput);
    const balanceNumber = parseFloat(balance);
    const newBalance = addMoneyNumber + balanceNumber;
    console.log(newBalance)

    // step 6 update the balance in the ui/dom
    document.getElementById('account-balance').innerText =newBalance;
    
}
else{
    alert('Failed to add money! Please try again.')
}

});