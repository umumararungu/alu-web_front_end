function setCookies(){
var Firstname = document.form["firstname"].value;
var Email = document.form["email"].value;

setCookie("firstname",Firstname,365);
setCookie("email",Email,365);


}

function showCookies(){
    
}