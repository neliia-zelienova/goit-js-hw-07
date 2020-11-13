function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomColor() {
     const colorArr = [];
    for (let i = 0; i < 3; ++i) {
        colorArr.push(getRandomInt(255));
    }
    return `rgb(${colorArr})`;
}

const createBoxes = (amount) => {
    if (amount > 0) {
    const boxesArray = [];
        for (let i = 0; i < amount; ++i) {
            boxesArray.push(document.createElement('div'));
            boxesArray[i].classList.add('created-box');
            boxesArray[i].style.backgroundColor = getRandomColor();
            boxesArray[i].style.width = `${30 + (i * 10)}px`;
            boxesArray[i].style.height = `${30 + (i * 10)}px`;
        }
        const insidedivRef = document.querySelector('#boxes');
        insidedivRef.append(...boxesArray);
    }
}

const destroyBoxes = () => {
    const insidedivRef = document.querySelector('#boxes');
    const boxesDivArr = insidedivRef.querySelectorAll('div');
    boxesDivArr.forEach((elem) => {
        elem.remove();
    });
}

const btnAction = (event) => {
    
    if (event.target.dataset.action === 'render') {
        destroyBoxes();
        const boxesAmountRef = document.querySelector('#controls input');
    createBoxes(Number(boxesAmountRef.value));
    } else {
        destroyBoxes();
    }
    
}
 
const createBtnRef = document.querySelector('.task-08 button[data-action="render"]');
const clearBtnRef = document.querySelector('.task-08 button[data-action="destroy"]');


createBtnRef.addEventListener('click', btnAction);
clearBtnRef.addEventListener('click', btnAction);


