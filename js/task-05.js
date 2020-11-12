const inputRef = document.querySelector('#name-input');

const changeGreat = (event) =>{
    const nameOutputRef = document.querySelector('#name-output');
     if (event.target.value !== ''){
         nameOutputRef.textContent = event.target.value;
     } else {
         nameOutputRef.textContent = 'незнакомец'
     }
}

inputRef.addEventListener('input', changeGreat);