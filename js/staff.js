const form = document.getElementById('form');
const staffname = document.getElementById('staffname');
const stafflname = document.getElementById('stafflname');
const email = document.getElementById('email');
const address = document.getElementById('address');
const phoneNo = document.getElementById('phoneNo');
const status = document.getElementById('status');


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInputs();
});

function  checkInputs(){
    const staffnameV = staffname.value.trim();
    const stafflnameV = stafflname.value.trim();
    const emailV = email.value.trim();
    const addressV= address.value.trim();
    const phoneNoV = phoneNo.value.trim();
    const statusV = status.value.trim();

    if (staffnameV == '') {
        setErrorFor(staffname, 'fName must be filled!');
    } else {
        setSuccessFor(staffname);
    }
    
    if (stafflnameV == '') {
        setErrorFor(stafflname, 'lname must be filled!');
    } else {
        setSuccessFor(lname);
    }

    if (emailV == '') {
        setErrorFor(email, 'email must be filled!');
    } else {
        setSuccessFor(email);
    }

    if (addressV == '') {
        setErrorFor(address, 'address must be filled!');
    } else {
        setSuccessFor(address);
    }
    
    if (phoneNoV == '') {
        setErrorFor(phoneNo, 'phoneno must be filled!');
    } else {
        setSuccessFor(phoneNo);
    }
    
    if (statusV == '') {
        setErrorFor(status, 'status must be filled!');
    } else {
        setSuccessFor(status);
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