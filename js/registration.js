const form = document.querySelector("form");

nField = form.querySelector(".name"),
nInput = nField.querySelector("input"),


phField = form.querySelector(".phone"),
phInput = phField.querySelector("input"),


eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),


pField = form.querySelector(".password"),
pInput = pField.querySelector("input"),


cpField = form.querySelector(".conpassword"),
cpInput = cpField.querySelector("input");

form.onsubmit = (e)=>{
  e.preventDefault(); //preventing from form submitting
  //if email and password is blank then add shake class in it else call specified function
  (nInput.value == "") ? nField.classList.add("shake", "error") : checkName();
  (phInput.value == "") ? phField.classList.add("shake", "error") : checkPhone();
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
  (cpInput.value == "") ? cpField.classList.add("shake", "error") : checkConPass();

  setTimeout(()=>{ //remove shake class after 500ms
    nField.classList.remove("shake");
    phField.classList.remove("shake");
    eField.classList.remove("shake");
    pField.classList.remove("shake");
    cpField.classList.remove("shake");
  }, 500);

  nInput.onkeyup = ()=>{checkName();} //calling checkEmail function on email input keyup
  phInput.onkeyup = ()=>{checkPhone();} //calling checkEmail function on email input keyup
  eInput.onkeyup = ()=>{checkEmail();} //calling checkEmail function on email input keyup
  pInput.onkeyup = ()=>{checkPass();} //calling checkEmail function on email input keyup
  cpInput.onkeyup = ()=>{checkConPass();} //calling checkPassword function on pass input keyup

  function checkName(){ //checkName function
    let pattern = /^[^ ][a-z]{2,30}$/; //pattern for validate email
    if(!nInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
      nField.classList.add("error");
      nField.classList.remove("valid");
      let errorTxt = nField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      (eInput.value != "") ? errorTxt.innerText = "Enter a Name" : errorTxt.innerText = "Type Correct Name";
    }else{ //if pattern matched then remove error and add valid class
      nField.classList.remove("error");
      nField.classList.add("valid");
    }
  }
  
  function checkPhone(){ //checkPhone function
    let pattern = /^[^ ][0-9]{9}$/; //pattern for validate email
    if(!phInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
      phField.classList.add("error");
      phField.classList.remove("valid");
      let errorTxt = phField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      (phInput.value != "") ? errorTxt.innerText = "Enter a valid Phone Number" : errorTxt.innerText = "Phone can't be blank";
    }else{ //if pattern matched then remove error and add valid class
      phField.classList.remove("error");
      phField.classList.add("valid");
    }
  }
  
  function checkEmail(){ //checkEmail function
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
    if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    }else{ //if pattern matched then remove error and add valid class
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  function checkPass(){ //checkPass function
    if(pInput.value == ""){ //if pass is empty then add error and remove valid class
      pField.classList.add("error");
      pField.classList.remove("valid");
    }else{ //if pass is empty then remove error and add valid class
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  
  function checkConPass(){ //checkPass function
    if(cpInput.value == ""){ //if pass is empty then add error and remove valid class
      cpField.classList.add("error");
      cpField.classList.remove("valid");
    }else{ //if pass is empty then remove error and add valid class
      cpField.classList.remove("error");
      cpField.classList.add("valid");
    }
  }

  //if eField and pField doesn't contains error class that mean user filled details properly
  if
    (       !nField.classList.contains("error")
         && !phField.classList.contains("error")
         && !eField.classList.contains("error")
         && !cpField.classList.contains("error")
         && !pField.classList.contains("error")
    )
  
  
  
  {
    window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
  }
}
