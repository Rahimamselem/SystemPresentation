const form = document.getElementById('form');
const paymentdate = document.getElementById('paymentdate');
const amount = document.getElementById('amount');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInputs();
});

function  checkInputs(){
    const amountValue = amount.value.trim();
    const paymentdateValue = paymentdate.value.trim();

    if (paymentdateValue == '') {
        setErrorFor(paymentdate, 'paymentdate must be filled!');
    } else {
        setSuccessFor(paymentdate);
    }
    
    if (amountValue == '') {
        setErrorFor(amount, 'amount must be filled!');
    } else {
        setSuccessFor(amount);
    }
}



function setErrorFor(input, msg){
    const fmGroup = input.parentElement; 
    const small = fmGroup.querySelector('small');

    fmGroup.className = 'form-group error';

    small.innerText = msg;
    function setSuccessFor(input) {
    const fmGroup = input.parentElement;
    fmGroup.className = 'form-group success';
}
    



}

