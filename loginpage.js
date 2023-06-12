function onSubmit(event) {
  var name = document.getElementById("input-name").value;
  var email = document.getElementById("input-mail").value;
  var password = document.getElementById("input-password").value;

  if (name == "") {
    document.getElementById("span1").style.display = "inline";
  } else {
    document.getElementById("span1").style.display = "none";
  }
  if (email == ""){
    document.getElementById("span3").style.display = "inline";
  }
  else{
    document.getElementById("span3").style.display = "none";
  }
  if (password == ""){
    document.getElementById("span5").style.display = "inline";
  }
  else{
    document.getElementById("span5").style.display = "none";
  }
  if ( /^[A-Za-z]+$/.test(name)==true)
  {
  document.getElementById("span2").style.display = "none"}
  else
   {
    document.getElementById("span2").style.display = "inline"
  }
  if(name==""){
    document.getElementById("span2").style.display = "none"
  }
  if (email.match("([a-zA-Z0-9\\_\\-\\.]+)@([a-zA-Z]+)\\.+(.+)"))
  {
  document.getElementById("span4").style.display = "none"}
  else
   {
    document.getElementById("span4").style.display = "inline"
  }
  if (email == ""){
    document.getElementById("span4").style.display = "none"
  }
  if (password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/)){
    document.getElementById("span6").style.display = "none"
  }
  else{
    document.getElementById("span6").style.display = "inline"
  }
  if(password==""){
    document.getElementById("span6").style.display = "inline"
  }
  if(password.length<6){
    document.getElementById("span6").style.display = "inline"
  }
  else{
    document.getElementById("span6").style.display = "none"
  }
//   if(password.match(/^[A-Z]*+$/)){
//     document.getElementById("span7").style.display = "none"
//   }
//   else{
//     document.getElementById("span7").style.display = "inline"
//   }
//   if (password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/)){
//     document.getElementById("span7").style.display = "none"
//   }
 
}
