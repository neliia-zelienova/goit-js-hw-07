const decrement = (counterValue) => {
    return counterValue - 1;
}

const increment = (counterValue) => {
    return counterValue + 1;
}

const handleClick = (event) => {
    const counterValueRef = document.querySelector('.counter-value');
    const counterValue = Number (counterValueRef.textContent);
    if(event.toElement.className === 'button decrement') {
        counterValueRef.textContent = decrement(counterValue);
    } else {
        counterValueRef.textContent = increment(counterValue);
    }
};

const decrementButton = document.querySelector('.decrement');
const incrementButton = document.querySelector('.increment');

decrementButton.addEventListener('click', handleClick);
incrementButton.addEventListener('click', handleClick);
