const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const phoneNo = document.getElementById('phoneNo');
const email = document.getElementById('email');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInputs();
});

function  checkInputs(){
    const fnameV = fname.value.trim();
    const lnameV = lname.value.trim();
    const phoneNoV = phoneNo.value.trim();
    const emailV = email.value.trim();

    if (fnameV == '') {
        setErrorFor(fname, 'fName must be filled!');
    } else {
        setSuccessFor(fname);
    }
    
    
    if (lnameV == '') {
        setErrorFor(lname, 'lName must be filled!');
    } else {
        setSuccessFor(lname);
    }
    
    if (phoneNoV == '') {
        setErrorFor(phoneNo, 'phoneno must be filled!');
    } else {
        setSuccessFor(phoneNo);
    }
    if (emailV == '') {
        setErrorFor(email, 'e-mail must be filled!');
    } else {
        setSuccessFor(email);
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