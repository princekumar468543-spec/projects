let email = document.querySelector(".input1");
let password = document.querySelector(".input2");
let nm = document.querySelector(".nm");
let form = document.querySelector(".input");

let hides = document.querySelectorAll(".hide");

form.addEventListener("submit", function(e){
  e.preventDefault();

  console.log(e);

  let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordregex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if(nm.value.length > 2){
    hides[0].style.display = "none";
  }else{
    hides[0].style.display = "initial";
  }

  
 if(email.value === ""){
  hides[1].style.display = "initial";
}
else if(!emailregex.test(email.value)){
  hides[1].style.display = "initial";
}
else{
  hides[1].style.display = "none";
}

  if(password.value === ""){
  hides[2].style.display = "initial";
}
else if(!passwordregex.test(password.value)){
  hides[2].style.display = "initial";
}
else{
  hides[2].style.display = "none";
}
})