

// Object property shorthand

const name = 'Andrew'
const userAge = 27

const user = {
    name: name,
    age: userAge,
    location: 'Philadelphia'
}

const userES6 = {
    name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)
console.log(userES6)

// Object de-structuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

/*
const label = product.label
const stock = product.stock
*/

const {label:productLabel, stock, rating = 5} = product 
console.log(productLabel)
console.log(stock)
console.log(rating)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)

const sale = {
    saleDate: '2020-01-01',
    product: {
        name: 'Book 1',
        price: 34.50
    }
}

const {product: {name:productName}} = sale
console.log(productName)
