const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const htmlArray = ingredients.map(item => {
    const liItem = document.createElement('li');
    liItem.textContent = item;
    return liItem;
});

 const rootUlRef = document.querySelector('#ingredients');
 rootUlRef.append(...htmlArray);
