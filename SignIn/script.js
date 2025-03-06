const validateInput=()=>{

    clearErrors();
    
    let isValid=true;
    let username=document.forms["signIn"]["usrname"].value;
    if(username =="")
    {
        document.getElementById('uerror').innerHTML='Username must be filled';
        isValid=false;
    }
    else
    {
        password=document.forms["signIn"]["pwd"].value;
        if(password=="")
        {
            document.getElementById('perror').innerHTML='Please enter your password';
            isValid=false;
        }
        if(isValid){
            alert('Data Submitted Successfully');
            this.submit();
        }


    }
    return isValid;
}

const clearErrors=()=>{

    document.getElementById('uerror').innerHTML='';
    document.getElementById('perror').innerHTML='';

}
