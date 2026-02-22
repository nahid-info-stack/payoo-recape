//console.log('conected')

document.getElementById('cashout-btn').addEventListener('click',function(){
    const cashoutNumber = getValueFormInput ('cashout-number');
    //console.log(cashoutNumber);

    const cashoutAmount =getValueFormInput ('cashout-amount');
    console.log(cashoutAmount);

    const elementBlance =document.getElementById('blance');
    const blance =elementBlance.innerText;

     const newBlance=Number(blance) - Number(cashoutAmount);
    // console.log(newBlance)
     if(newBlance < 0){
        alert('Invaild Blance');
        return;
     }

     const inputPin =getValueFormInput ('cashout-pin');
     console.log(inputPin);

     if(inputPin === '0000'){
        alert('Cashout succesfull');
        elementBlance.innerText=newBlance;
     console.log(newBlance)

     }else{
        alert('Invaild pin');
        return;
     }



});



/*document.getElementById('cashout-btn').addEventListener('click',function(){
    //console.log('succes');

    // get the agent number
    const agentNumberInput=document.getElementById('cashout-number');
    const agentNumber=agentNumberInput.value;
    if(agentNumber.length != 11){
        alert('Invaild Agent Number');
        return;
    }
    console.log(agentNumber);

    // get the ammount
    const cashoutAmountInput=document.getElementById('cashout-amount');
    const cashoutAmount=cashoutAmountInput.value;
   
    console.log(cashoutAmount);

    // get the current blance
    const elementBlance =document.getElementById('blance');
    const blance =elementBlance.innerText;

    // calculate the new blance
    const newBlance=Number(blance) - Number(cashoutAmount);
    //console.log("New Blance:",newBlance);
     if(newBlance < 0){
        alert('Invaild Blance');
        return;
    }

    // get the pin varyfiy
    const cashoutPinInput=document.getElementById('cashout-pin');
    const pin =cashoutPinInput.value;
    console.log(pin);

    if(pin == '0000'){
    
        alert('cashout succesfull');
       const newtk= blance.innerText=newBlance;
    console.log(newtk);


    }

});*/
