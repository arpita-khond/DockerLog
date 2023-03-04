function validate()
{
var username=document.getElementById("username").ariaValueText;
var password=document.getElementById("password").ariaValueText;
if(username=="admin" && password=="user")
{
    alert("login successful");
    return false;
}    
else{
    alert("login failed")
}
}