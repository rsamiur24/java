// add money to the account

// step 1: add an event handler to the add money button inside the form
// s-2 get money to be added to the account balance

document.getElementById('btn-add-money').addEventListener('click',function(event){
// prevent page reload after form submit
event.preventDefault();

const addMoneyInput = document.getElementById('input-add-money').value;
console.log(addMoneyInput);

const pinNumberInput = document.getElementById('input-pin-number').value;
console.log(pinNumberInput);
});