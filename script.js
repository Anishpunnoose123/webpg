

var mail = document.getElementById("email");
var pswd = document.getElementById("password");
function lvalidate()
{
    var res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var psr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    

    if(res.test(mail.value)!="1")
    {
        window.alert("Email Is Invalid");
        return false;
    }
    else if(psr.test(pswd.value)!="1")
    {
        window.alert("Password Is Invalid, try again");


        return false;
    }
    else
    {
        window.alert("validation Success");
        return true;
    }
    
};


var smail = document.getElementById("inputEmail4");
var spswd = document.getElementById("inputPassword4");
var phone = document.getElementById("inputphone");
let address = document.getElementById("inputAddress");
let city = document.getElementById("inputCity");
let state = document.getElementById("inputState");
let zip = document.getElementById("inputZip");

function svalidate()
{
    var res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var psr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var zipno = /^\(?([0-9]{6})\)?$/;
    
    if( smail.value.trim() == "" || spswd.value.trim() == ""|| city.value.trim() == ""|| address.value.trim() == ""|| state.value.trim() == ""|| zip.value == ""|| phone.value.trim() == "") {
        alert("field cannot be empty");
        return false;

    }

   else if(res.test(smail.value)!="1")
    {
        
        window.alert("Email Is Invalid");
        return false;
    }
    else if(phoneno.test(phone.value)!="1")
    {
        window.alert("Please enter a valid phone number :");
        return false;
    }
    else if(zipno.test(zip.value)!="1")
    {
        window.alert("invalid PIN :");
        return false;
    }
    else if(psr.test(spswd.value)!="1")
    {
        window.alert("Password Is Invalid");
        return false;
    }
    else
    {
        window.alert("validation Success");
        return true;
    }
    
};
spswd.addEventListener('input',() => 

{if(spswd.value.length < 1){
    document.getElementById("inputPassword4").style.borderColor="white";
}
else if(spswd.value.length >=1 && spswd.value.length < 3){
    document.getElementById("inputPassword4").style.borderWidth="3px"
    document.getElementById("inputPassword4").style.borderStyle="solid"
    document.getElementById("inputPassword4").style.borderColor="red";
    }
    else if(spswd.value.length >=3 && spswd.value.length < 8){
        document.getElementById("inputPassword4").style.borderWidth="3px"
        document.getElementById("inputPassword4").style.borderStyle="solid"
        document.getElementById("inputPassword4").style.borderColor="orange";
        }
    else if(spswd.value.length >=8){
        document.getElementById("inputPassword4").style.borderWidth="3px"
        document.getElementById("inputPassword4").style.borderStyle="solid"
        document.getElementById("inputPassword4").style.borderColor="green";
    }

})



