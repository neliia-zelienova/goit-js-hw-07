const rootUlRef = document.querySelector('#categories');
const itemsArrRef = document.querySelectorAll('.item');

const getItemsNum = function(item){
    console.log (`Категория: ${item.querySelector('h2').textContent}\nКоличество элементов: ${item.querySelector('ul').children.length}`); 
}

console.log(`В списке ${rootUlRef.children.length} категории`);
itemsArrRef.forEach(item => getItemsNum(item));

