function validate(){
    var fn=document.getElementById("first").value;
     var sn=document.getElementById("last").value;
    var p=document.getElementById("p").value;
    var mn=document.getElementById("middle").value;
    var address=document.getElocument.getElementById("address").value;
    var agre=ementById("agree").checked;
    var c1=document.getElementById("c1").checked;
    var c2=document.getElementById("c2").checked;
    var c3=document.getElementById("c3").checked;

    var fulln=document.getElementById("fullname").value;
    var dob=document.getElementById("dob").value;
     var flag1=1;
     var mail=document.getElementById("mail").value;
     mailval=/^[a-z0-9]*\.?([a-z0-9]*)@[a-z]{2,7}((\.)?([a-z]{2}))?\.[a-z]{2,3}$/;
     if (!mailval.test(mail)){
         alert("Enter valid email");
     }
    if(ln!=null && fn!=null){
        fulln=fn+ln;
        document.getElementById("fullname").innerText(fulln);
    }
    const calculateAge = (birthday) => {
        const startDate = new Date();
        const endDate = new Date(birthday);
        return Math.abs(moment.duration(endDate - startDate).years());
    }
    var age=document.getElementById("age").value;
    if(dob){
        age=calculateAge(dob);
        document.getElementById("age").innerText(age);

    }
    var rexpsn=/[a-z]*/gim;
        if(!rexpsn.test(fn) || !rexpsn.test(sn) || !rexpsn.test(mn) || !rexpsn.test(address)){
            alert("Enter only alphabets");
            flag1=0;
        }
        if(fn.length<4 || sn.length<4 || p.length<7 )
        {
            document.getElementById("l").style.border="3px solid red";
            document.getElementById("l").style.visibility="visible";
            setTimeout(function(){
                image=document.getElementById("l");
                image.style.visibility="hidden";
            },3000);
            flag1=0;
        }
        if(!agre){
            alert("Agree to the terms and conditions");
            flag1=0;
        }
        if(!c1){
            if (!c2 || !c3){
                alert("Select atleast two hobbies");
                flag1=0;
            }
        }
        else{
            if(!c2){
                if (!c1 || !c3){
                    alert("Select atleast two hobbies");
                    flag1=0;
                }
            }
            else{
                if (!c1 || !c2){
                    alert("Select atleast two hobbies");
                    flag1=0;
                }
            }
        }
        if(flag==0){
            return false;
        }
    }

function sp1(){
    var txt=document.getElementById("p").type;
    if (txt=='text'){
        document.getElementById("p").type="password";
        document.getElementById("img1").src="invisible.jpg";
    }
    else{
        document.getElementById("p").type="text";
        document.getElementById("img1").src="visible.jpg";
    }
}
function confirm(){
alert("Are you sure to confirm?");
}