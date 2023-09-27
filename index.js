  // let myForm=document.querySelector("form")
        
  let NameInp=document.getElementById("name")
  let AgeInp=document.getElementById("age")
  


  // myForm.addEventListener("submit",function(e){
  //     e.preventDefault();
   function submit(){
      document.getElementById("submit").style.backgroundColor="green";
      let Name=NameInp.value
      let Age=AgeInp.value
      localStorage.setItem("Name",Name)
      localStorage.setItem("Age",Age)
      alert("Form Submitted Successfully")
      alert("Take a Printout for future purposes")
      document.querySelector("p").innerText="Your Form has been Submitted"

      reset()

   }
     
  // })
   function view(){
    location.href="PrintForm.html";
  // <a href="PrintForm.html" target="_blank"></a>

  
    
   }
   function reset(){
      NameInp.value="";
      AgeInp.value="";
   }
 
//   .......
let UserName=localStorage.getItem("Name");
let UserAge=localStorage.getItem("Age");
let Display=document.getElementById("display");
document.getElementById("N").innerText=`${UserName}`
document.getElementById("A").innerText=`${UserAge}`
