// let NameField=document.getElementById('Name');
// let signinBtn=document.getElementById('SignIn');
// let heading=document.getElementById('heading');
// let signupbtn=document.getElementById('SignUp')

// signinBtn.onclick=function(){
//       NameField.style.maxHeight='0';
//       heading.innerHTML="Sign In";
//       signinBtn.classList.remove('disButton');
//       signupbtn.classList.add('disButton');

// }
// signupbtn.addEventListener('click',function(){
//           NameField.style.maxHeight="65px";
//           heading.innerHTML="Sign Up";
//           signupbtn.classList.remove('disButton');
//           signinBtn.classList.add('disButton');
// })


let NameField=document.getElementById('NameField');
let signupbtn=document.getElementById('Signup');
let signinBtn=document.getElementById('SignIn');
let heading=document.getElementById('heading');

signinBtn.onclick=function(){
      NameField.style.maxHeight='0';
      signinBtn.classList.remove('disable');
      signupbtn.classList.add('disable');
      heading.innerHTML="Sign In";
}
signupbtn.onclick=function(){
        NameField.style.maxHeight='60px';
        signinBtn.classList.add('disable');
        signupbtn.classList.remove('disable');
        heading.innerHTML="Sign Up";
}
