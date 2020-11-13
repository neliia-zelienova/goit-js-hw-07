const checkInput = (event) => {
   if (event.target.value.length === Number(event.target.dataset.length)){
     event.target.classList.add('valid') ;
     if (event.target.classList.contains('invalid')){
         event.target.classList.remove('invalid');
     }
   } else {
    event.target.classList.add('invalid') ;
    if (event.target.classList.contains('valid')){
        event.target.classList.remove('valid');
    }
   }
}


const validationInputRef = document.querySelector('#validation-input');

validationInputRef.addEventListener('blur', checkInput);