//--Mode
'use strict'

// Select card groups 
const cardContainerGroup1 = document.getElementById('card-container-1');
const cardContainerGroup2 = document.getElementById('card-container-2')
const cardContainerGroup3 = document.getElementById('card-container-3')

// Create card wrappers
const cardItemsFirst = document.createElement('div');
const cardItemsSecond = document.createElement('div');
const cardItemsThird = document.createElement('div');

//id prefix
let prefix = 'qm-'

// Section Cards-1 
cardGroupFirst.forEach((item) => {
    cardItemsFirst.classList.add('cards');
    cardItemsFirst.innerHTML +=
        `<a href="#" id=${prefix + item.id} class="card text-white">
    <img class="card-img" src=${item.card.image} alt=${item.card.text}>
    <div class="card-content">
    <div class="card-title text-center justify-self-end text-white p-2 fw-bold ">
    ${item.card.text}
    </div>
    </div>
    </a>
    `;
    cardContainerGroup1.appendChild(cardItemsFirst);
})
// --End-- Section Cards-1  --End--  


// Section Cards-2
cardGroupSecond.forEach((item) => {
    cardItemsSecond.classList.add('cards');
    cardItemsSecond.innerHTML +=
        `<a href="#" id=${prefix + item.id} class="card text-white">
    <img class="card-img img-fluid" src=${item.card[0].image} alt=${item.card[0].text}>
    <div class="card-content">
    <div class="card-title text-center justify-self-end text-white p-2 fw-bold ">
    ${item.card[0].text}
    </div>
    </div>
    </a>
    `;
    cardContainerGroup2.appendChild(cardItemsSecond);
})
// --End-- Section Cards-2

// Section Cards-3
cardGroupThird.map((item) => {
    cardItemsThird.classList.add('cards');
    cardItemsThird.innerHTML +=
        `
    <a href="#" id=${prefix+item.id} class="card text-white">
    <img class="card-img img-fluid" src=${item.card.image} alt=${item.card.text}>
    <div class="card-content">
    <div class="card-title text-center justify-self-end text-white p-2 fw-bold ">
    ${item.card.text}
    </div>
    </div>
    </a>

    ` ;
    cardContainerGroup3.appendChild(cardItemsThird);


})
// --End-- Section Cards-3  --End--  




