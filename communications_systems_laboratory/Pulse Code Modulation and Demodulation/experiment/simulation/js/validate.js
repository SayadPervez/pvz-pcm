var vali = addEventListener(onclick, validate1(e));
var vale = addEventListener(onclick, validate2(e));
var valie = addEventListener(onclick, validate3(e));



function validate3(event){
    if (document.getElementById("DSB-SC").checked==true) {
        document.getElementById("Answer3").innerHTML = "Correct Answer";    
    } else if(document.getElementById("DSB-FC").checked==true) {
        document.getElementById("Answer3").innerHTML = "Wrong Answer "+'<br />'+" Correct answer : DSB-SC";    
    }
    else{
        document.getElementById("Answer3").innerHTML = "Choose one of the options";
    }
}
function validate2(event){
    if(document.getElementById("dsbfc").checked==true ){
        
        document.getElementById("Answer2").innerHTML = "Correct Answer";



        
             
    }else if(document.getElementById("dsbsc").checked==true){
       
        document.getElementById("Answer2").innerHTML = "Wrong Answer"+'<br />'+"Correct answer : DSB-FC";
        document.getElementById("radio-o").style.color = "solid red";

         
    }else{
        document.getElementById("Answer2").innerHTML = "Choose one of the options";
        document.getElementById("warning").style.visibility = "visible";

    }
}
function validate1(event){
    if(document.getElementById("radio-one").checked==true){
        document.getElementById("Answer1").innerHTML = "Correct Answer";
    }else if(document.getElementById("radio-two").checked==true){
        document.getElementById("Answer1").innerHTML = "Wrong Answer"+'<br />'+"Correct answer : True";
    }else{
        document.getElementById("Answer1").innerHTML = "Choose one of the options";
    }


    
}

 


