$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >20 ){
            $('.nb').addClass("sticky");
        }
        else{
            $('.nb').removeClass("sticky");
        }
    })
})
// contact section
function myfunc(event){
    var full_name= document.getElementById("full-name").value;
    var email= document.getElementById("email").value;
    var msg= document.getElementById("msg").value;
    if(email.search(/^[a-z0-9]+@[a-z]+(?:\.[a-z]+)*$/)){
        document.getElementById("Messages").innerHTML="Invalid Email";
        return false;
     }
        localStorage.setItem("name",full_name);
        localStorage.setItem("email",email);
        localStorage.setItem("msg",msg);    
    } 
// project section
var i=0;
function read(){
    if(!i){
        document.getElementById("more").style.display="inline";
        document.getElementById("dots").style.display="none";
        document.getElementById("read").innerHTML="";
      i=1;
    }
    else{
        document.getElementById("more").style.display="none";
        document.getElementById("dots").style.display="inline";
        document.getElementById("read").innerHTML="read more"
       i=0;
    }
}