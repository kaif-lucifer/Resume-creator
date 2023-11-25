function addWField() {
 //   console.log("ADD");
 let newNode=document.createElement('textarea');
 newNode.classList.add('form-control');
 newNode.classList.add('weField');
 newNode.classList.add("mt-2");
 newNode.setAttribute("rows",3);
 newNode.setAttribute('placeholder','Enter here');

 let weOb=document.getElementById("we")
 let weAddButtonOb = document.getElementById("weAddButton");

 weOb.insertBefore(newNode,weAddButtonOb);
}
function addAField() {
    //   console.log("ADD");
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter here');
   
    let aqOb=document.getElementById("aq")
    let aqAddButtonOb = document.getElementById("aqAddButton");
   
    aqOb.insertBefore(newNode,aqAddButtonOb);
   }

// generating resume
function generateResume(){
    //console.log('generate');
    let nameField=document.getElementById('nameField').value;
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=nameField;
    // direct or fast methhod
    document.getElementById("nameT2").innerHTML=nameField;
    //contact
    document.getElementById("contactT").innerHTML=document.getElementById("phoneField").value;
    //address
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
    //photo
    let file = document.getElementById("photoField").files[0];
        
            let reader = new FileReader();
            reader.readAsDataURL(file);
         reader.onloadend = function (){
         document.getElementById("imgT").src=reader.result;
            }
        

      
    

    //fb
    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
    //Insta
    document.getElementById("InstaT").innerHTML=document.getElementById("instaField").value;
    //Gmail
    document.getElementById("GmailT").innerHTML=document.getElementById("gmailField").value;
    //objective
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;
    //work experience
    let wes = document.getElementsByClassName("weField");
    let str ="";
    for ( let e of wes){
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML=str;
    //academics qualifications
    let aqs = document.getElementsByClassName("aqField");
    let str2 ="";
    for ( let e of aqs){
        str2 = str2 + `<li> ${e.value} </li>`;
    }
    document.getElementById('aqT').innerHTML=str2;


 document.getElementById('Resume-form').style.display='none';
 document.getElementById('Resume-template').style.display='block';
 
}
window.onload = function(){
    document.getElementById('download').addEventListener("click",()=>{
        const resume = this.document.getElementById("Resume-template");
    
        html2pdf().from(resume).save();
    });
}

function printResume(){
window.print();
}

