//console.log('okk');

document.getElementById('login-btn').addEventListener('click',function(){
    console.log('btn click');

    const inputNumber=document.getElementById('input-number');
    const contactNumber=inputNumber.value;
    console.log(contactNumber);

    const inputPin=document.getElementById('input-pin');
    const Pin =inputPin.value;
    console.log(Pin);

    if(contactNumber == '01987654321' && Pin == '0000'){
        alert('Login SuccesFull');
       //window.location.replace('/home.html');
       window.location.assign('/home.html');


    }else{
        alert('Login Failed');
    }
});