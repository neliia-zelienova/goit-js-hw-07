const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];


   const createGalery = function (images){
     const htmlListArray = images.map(function(item) {
        const listItem = document.createElement('li');
        const itemImage = document.createElement('img');
        listItem.classList.add('galleryItem');
        itemImage.alt = item.alt;
        itemImage.src = item.url;
        itemImage.classList.add('galleryImage');
        listItem.appendChild(itemImage);
        return listItem;
     });
     return htmlListArray;
   }

const galleryContRef = document.querySelector('#gallery');
galleryContRef.append(...createGalery(images));
