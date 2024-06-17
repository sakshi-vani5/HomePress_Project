function check(){
   
 let username=document.getElementById("usrnme").value;
 let password=document.getElementById("psswrd").value;

//  console.log(username);
//  console.log(password);






//  if(username.trim().length>=8){
//     if(password.trim().length>=6){
//         return true
//     }else{
//         document.getElementById("l1").innerText= "Password  must be 6 characters";
//         return false
//     }
//  }else{
//     document.getElementById("l1").innerText= "Username   must be 8 characters";
//     return false
//  }


if(username==="" && password===""){
    document.getElementById("l1").innerHTML="Please enter both username and password";
    return false
}

else if( username.trim().length<8  &&  password.trim().length<8){
  document.getElementById("l1").innerHTML="Username and password contains atleast 8 charactes";
  return false

}else if( username.trim().length<8){
    document.getElementById("l1").innerHTML="Username contains atleast 8 characters ";
    return false
}
else if( password.trim().length<6){
    document.getElementById("l1").innerHTML="password contains  atleast 8 characters"
    return false
}
else{
    return true
}





 }











