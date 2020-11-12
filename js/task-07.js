const fontSizeRef = document.querySelector('#font-size-control');

const changeFontSize = (event) => {
    const textRef = document.querySelector('#text');
    textRef.style.fontSize  = `${event.target.value}px`;
    console.log(event.target.value)
}

fontSizeRef.addEventListener('input', changeFontSize);
