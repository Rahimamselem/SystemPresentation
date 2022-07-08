const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const admitted = document.getElementById('admitted');
const course = document.getElementById('course');
const phoneno = document.getElementById('phoneno');
const email = document.getElementById('email');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInputs();
});

function  checkInputs() {
    const fnameV = fname.value.trim();
    const lnameV = lname.value.trim();
    const admittedV= admitted.value.trim();
    const courseV = course.value.trim();
    const phonenoV = phoneno.value.trim();
    const emailV = email.value.trim();

    if (fnameV == '') {
        setErrorFor(fname, 'fName must be filled!');
    } else {
        setSuccessFor(fname);
    }

    if (lnameV == '') {
        setErrorFor(lname, 'lname must be filled!');
    } else {
        setSuccessFor(lname);
    }

    if (admittedV == '') {
        setErrorFor(admitted, 'admitted must be filled!');
    } else {
        setSuccessFor(admitted);
    }
    if (courseV == '') {
        setErrorFor(course, 'course must be filled!');
    } else {
        setSuccessFor(course);
    }
    if (phonenoV == '') {
        setErrorFor(phoneno, 'phoneno must be filled!');
    } else {
        setSuccessFor(phoneno);
    }
    if (emailV == '') {
        setErrorFor(email, 'email must be filled!');
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