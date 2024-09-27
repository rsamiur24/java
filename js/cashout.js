document.getElementById('btn-cash-out').addEventListener('click',function(event){
    // prevent page reload after form submit
    event.preventDefault();
    
    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashout);
    
    const pinNumberInput = document.getElementById('input-cash-out-pin').value;

    console.log(cashOut,pinNumber);
    
    if(pinNumber === '1234'){
    
        
        // step 4 
    
        const balance = document.getElementById('account-balance').innerText;
        console.log( balance);
    
        // step 5 add money
        const balanceNumber = parseFloat(balance);
    
        const newBalance = balanceNumber - cashOutNumber;
        console.log(newBalance)
    
        // step 6 update the balance in the ui/dom
        document.getElementById('account-balance').innerText =newBalance;
        
    }
    else{
        alert('Failed to cash money! Please try again.')
    }
    
    });