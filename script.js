const goods = [
     {
        'name' : 'Anna',
        'size' : 'M',
        'price': 120,
        'color' : 'red',
        'image': 'images/1.jpg'
    },
    {
        'name' : 'Carina',
        'size' : 'S',
        'price': 100,
        'color' : 'green',
        'image': 'images/2.jfif'
    },
    {
        'name' : 'Adele',
        'size' : 'M',
        'price': 40,
        'color' : 'white',
        'image': 'images/3.jpg'
    },
    {
        'name' : 'Sofi',
        'size' : 'M',
        'price': 30,
        'color' : 'black',
        'image': 'images/4.jfif'
    },
     {
        'name' : 'Carry',
        'size' : 'L',
        'price': 30,
        'color' : 'red',
        'image': 'images/5.jpg'
    },
    {
        'name' : 'Taya',
        'size' : 'S',
        'price': 80,
        'color' : 'white',
        'image': 'images/6.jpg'
    },  
    {
        'name' : 'Jane',
        'size' : 'L',
        'price': 100,
        'color' : 'red',
        'image': 'images/7.jpg'
    },
    {
        'name' : 'Oksi',
        'size' : 'XL',
        'price': 60,
        'color' : 'green',
        'image': 'images/8.jfif'
    },
    {
        'name' : 'Kara',
        'size' : 'S',
        'price': 180,
        'color' : 'white',
        'image': 'images/9.jpg'
    },
     {
        'name' : 'Diana',
        'size' : 'S',
        'price': 70,
        'color' : 'black',
        'image': 'images/10.jpg'
    },
    {
        'name' : 'Lisa',
        'size' : 'M',
        'price': 80,
        'color' : 'green',
        'image': 'images/11.jfif'
    },
    {
        'name' : 'Alice',
        'size' : 'M',
        'price': 90,
        'color' : 'black',
        'image': 'images/12.jfif'
    }
];


function getAll() {
    let cards ="";
    for (let item of goods) {
        cards += `<div class="card">
        <p class="card__title"> ${item.name} </p>
        <img class="card__img" alt="" src="${item.image}">
        <p class="card__text"> Color: ${item.color} </p>
        <p class="card__text"> Size: ${item.size} </p>
        <p class="card__text"> Price : ${item.price} </p>
        </div>`
    }
    document.getElementById('cards').innerHTML = cards;
}

getAll();

function selectColor(color) {
    let cards = "";
    goods.forEach((item) => {
      if (item.color === color) {
        cards += `<div class="card">
        <p class="card__title"> ${item.name} </p>
        <img class="card__img" alt="" src="${item.image}">
        <p class="card__text"> Color: ${item.color} </p>
        <p class="card__text"> Size: ${item.size} </p>
        <p class="card__text"> Price : ${item.price} </p>
        </div>`
      }
    });
    document.getElementById('cards').innerHTML = cards;
}

function selectSize(size) {
    let cards = "";
    goods.forEach((item) => {
      if (item.size === size) {
        cards += `<div class="card">
        <p class="card__title"> ${item.name} </p>
        <img class="card__img" alt="" src="${item.image}">
        <p class="card__text"> Color: ${item.color} </p>
        <p class="card__text"> Size: ${item.size} </p>
        <p class="card__text"> Price : ${item.price} </p>
        </div>`
      }
    });
    document.getElementById('cards').innerHTML = cards;
  }

function selectPriceLow() {
    let cards = "";
    goods.forEach((item) => {
      if (item.price < 50) {
        cards += `<div class="card">
        <p class="card__title"> ${item.name} </p>
        <img class="card__img" alt="" src="${item.image}">
        <p class="card__text"> Color: ${item.color} </p>
        <p class="card__text"> Size: ${item.size} </p>
        <p class="card__text"> Price : ${item.price} </p>
        </div>`
      }
    });
    document.getElementById('cards').innerHTML = cards;
  }
      
function selectPrice() {
    let cards = "";
    goods.forEach((item) => {      
      if (item.price >50 && item.price <100) { 
        cards += `<div class="card">
        <p class="card__title"> ${item.name} </p>
        <img class="card__img" alt="" src="${item.image}">
        <p class="card__text"> Color: ${item.color} </p>
        <p class="card__text"> Size: ${item.size} </p>
        <p class="card__text"> Price : ${item.price} </p>
        </div>`
        }
      });
      document.getElementById('cards').innerHTML = cards;
    }
  function selectPriceHigh() {
    let cards = "";
      goods.forEach((item) => { 
      if (item.price > 100) {
        cards += `<div class="card">
        <p class="card__title"> ${item.name} </p>
        <img class="card__img" alt="" src="${item.image}">
        <p class="card__text"> Color: ${item.color} </p>
        <p class="card__text"> Size: ${item.size} </p>
        <p class="card__text"> Price : ${item.price} </p>
        </div>`
        document.getElementById('cards').innerHTML = cards;
      }
    });
   
}