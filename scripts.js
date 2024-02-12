const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')

function formatcurrency(value) {
    const newValue = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    return newValue
}


function showAll(productArray) {
    let myli = ''

    productArray.forEach(product => {
        myli = myli + `
        <li>
             <img src=${product.src}>
             <p>${product.name}</p>
             <p class="item-price">R$ ${formatcurrency(product.price)}</p>
        </li>
     `
    })

    list.innerHTML = myli
}

function mapAllitems() {
    const newPrice = menuOptions.map(function (product) {
        return ({
            ...product,
            price: product.price * 0.9,


        })
    })
    showAll(newPrice)
}

function sumAllitems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = ` 
          <li>
            <p>O valor total dos items é R$ ${formatcurrency(totalValue)}</p>
        </li>
   
   `




    console.log(totalValue)
}

function filterAllitems() {
    const filterJustvegan = menuOptions.filter((product) => product.vegan)

    showAll(filterJustvegan)
}


buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllitems)
sumAll.addEventListener('click', sumAllitems)
filterAll.addEventListener('click', filterAllitems)

