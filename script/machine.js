console.log('machine add');

// Machine get the id -> return input value

function getValueFormInput (id){
    const inputId = document.getElementById(id);
    const inputValue =inputId.value;
    //console.log(inputValue);
    return inputValue;
};

// machine blance
function getBlance () {

    const blanceElement =document.getElementById('blance');
    const blance =blanceElement.innerText;
    console.log(blance);
    return Number(blance);
}

// set -> blance
/*function setBlance (value){
    const blanceElement =document.getElementById('blance');
    blanceElement.innerText = value;

};
*/
// cashout pin
// const pinInput = function inputpin (id){
//     const inputpin =document.getElementById(id);
//     const pin = inputpin.value;
//     console.log('Pin:',pin);

// }



