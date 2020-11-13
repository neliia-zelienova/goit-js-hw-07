const fontSizeRef = document.querySelector('#font-size-control');

const changeFontSize = (event) => {
    const textRef = document.querySelector('#text');
    textRef.style.fontSize  = `${event.target.value}px`;
}

fontSizeRef.addEventListener('input', changeFontSize);
