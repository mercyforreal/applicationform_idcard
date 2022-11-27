// let nameerror =document.getElementById('name error');
// let emailfalse =document.getElementById('email false');
// let phonefalse =document.getElementById('phone false');
// let passwordfalse =document.getElementById('password false');
// let confirmpasswordfalse=document.getElementById('confirm passwordfalse');
// let addressfalse =document.getElementById('address false');
    
    
   function getName(){
   let name= document.getElementById('name').value
   let error="";
   let validatedName=""
   if(name ==""){
    error ="Your name is required"
    validatedName=""
   }else if(name.length < 10){
    error="invaid Name";
    validatedName=""
   }else{
    validatedName=name
   }
    document.getElementById('nameerror').innerHTML= error;
    document.getElementById('validatedName').innerHTML= validatedName;
   } 
    

   function getEmail(){
    let email= document.getElementById('email').value
    let error="";
    let validatedEmail=""
    if(email ==""){
     error ="Email is required"
     validatedEmail=""
    }else if(email.includes('@') == false){
     error="invalid email";
     validatedEmail=""
    }else if(email.includes('.') == false){
    error="invalid email"
    validatedEmail=""
    }
    else{
     validatedEmail=email
    }
     document.getElementById('emailerror').innerHTML= error;
     document.getElementById('validatedEmail').innerHTML=validatedEmail;
    } 
     
 
  function getphone(){
   let phone =document.getElementById('phone')
   let error = "";
   validatedPhone =""
   
   if(phone.value == "" || phone.value == null){
   error="phone number is required"
   validatedPhone=""
  }else if(!(phone.value.startsWith('080') || phone.value.startsWith('081')|| phone.value.startsWith('070')||phone.value.startsWith('091') ||phone.value.startsWith('090'))) {
   error ="invalid phone number"
    validatedPhone == "";
}else{
  validatedPhone=phone.value
}
document.getElementById('phoneError').innerHTML= error;
document.getElementById('validatedPhone').innerHTML=validatedPhone;
}


function getpassword(){
  let password=document.getElementById('password').value; 
  let error ="";  
   validatedpassword = ""
  if(password= ""){
    error ="password is required"
    validatedpassword = ""

  }else if(password =="password"){
    error = "you can't use \"password\" as your password";
    validatedpassword=""
}else if(password.length < 8 ){
  error ="your password must be more than eight characters";
  validatedpassword = "";
}else{
validatedpassword = password
}

document.getElementById('passworderror').innerHTML =error;
document.getElementById('validatedpassword').innerHTML=validatedpassword;
}


function getconfirmpassword(){
let comfirmpassword= document.getElementById('confirmpassword').value
let error =  "";
validconfirmpassword = ""  
if(confirmpassword ==""){
 let error ="confirm password is required"
 let validconfirmpassword=""
}else if(document.getElementById('password').value !=confirmpassword){
 error="password is not matched";
 validpassword=""

}else{
  error="password is matched"
}
document.getElementById('confirmpassworderror').innerHTML=error;
}
                                                       
function getAddress(){
  let Address = document.getElementById('Address').value;
  let error = "";
  validatedAddress =""
if(Address == ""){
error = "Address is required"
validatedAddress = ""

}else if(!(Address.startsWith ('no')) ){
error = "invalid Address"
validatedAddress =""

}else{
  validatedAddress = Address
}

document.getElementById('Addresserror').innerHTML =error;
document.getElementById('validatedAddress').innerHTML=validatedAddress;




}
  
  