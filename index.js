const email=document.getElementById("email");
document.getElementById("submit").addEventListener("click",(e)=>
{
    e.preventDefault();
    checkInput();
})
function checkInput()
{
    const emailValue=email.value.trim();
    if(!isEmail(emailValue))
    {
        showError();
    }
    else
    {
        showSuccess();
    }
}
function showError()
{
    document.getElementById("email").classList.remove("success");
    document.getElementById("email").classList.add("error");
    
    document.getElementById("error-message").style.visibility="visible";
}
function showSuccess()
{
    document.getElementById("email").classList.remove("error");
    document.getElementById("email").classList.add("success");
    document.getElementById("error-message").style.visibility="hidden";
}
function isEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  
    if (reg.test(email) == false) {
      return false;
    }
  
    return true;
  }