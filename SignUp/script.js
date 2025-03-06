//Javascript Code
const validateInput = () =>
{
      
    let isValid=true;
    let fname = document.forms["signUp"]["fname"].value;
    let lname = document.forms["signUp"]["lname"].value;
    let bod = document.getElementById('bd').value;
    let gender=document.getElementById('gender').value;
    let email= document.getElementById('email').value;
    let password=document.getElementById('pwd').value;
    
    clearErrors();
    let ftest = fname.match(/[0-9]/i);
    let ltest=lname.match(/[0-9]/i);
    let passwdt1=password.match(/[0-9]/i);
    let passwdt2=password.match(/[A-Za-z]/);
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let str='Please fill out this field';
    
    if( fname == "" ){
        document.getElementById('ferror').innerHTML=str;
        isValid=false;
    }
    else if(ftest != null){
        let str="First name must be of alphabets only."
        document.getElementById('ferror').innerHTML=str;
        isValid=false;
    }


    if( lname == ""){
        document.getElementById('lerror').innerHTML=str;
        isValid=false;
    }
    else if(ltest != null){
        let str="Last name must be of alphabets only."
        document.getElementById('lerror').innerHTML=str;
        isValid=false;
    }


    if(bod ==""){
        document.getElementById('bderror').innerHTML=str;
        isValid=false;
    }


    if(gender == ""){
        document.getElementById('gerror').innerHTML='Please select any option';
        isValid=false;
    }


    if(email == ""){
        document.getElementById('eerror').innerHTML=str;
        isValid=false;
    }
    else if (!emailRegex.test(email)) {
        document.getElementById('eerror').innerHTML = " Invalid email format!";
        isValid=false
    }


    if(password==""){
        document.getElementById('perror').innerHTML='Please create a password.';
        isValid=false;
    }
    else if( passwdt1=="" || passwdt2==""){
        document.getElementById('perror').innerHTML='Password should contain alphabets and numbers.'
        isValid=false;
    }
    
    
    if(isValid){
        alert('Data is submitted successfully');
        this.submit();
    }

    return isValid;
}

const clearErrors=()=>{

    document.getElementById('ferror').innerHTML='';
    document.getElementById('lerror').innerHTML='';
    document.getElementById('bderror').innerHTML='';
    document.getElementById('gerror').innerHTML='';
    document.getElementById('eerror').innerHTML='';
    document.getElementById('perror').innerHTML='';

}