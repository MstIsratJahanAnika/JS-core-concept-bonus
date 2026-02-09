const numbers = [34, 2, 56, 21, 78, 49, 5];

for(let i=0; i<numbers.length; i++)
{
    const number = numbers[i];
    // console.log(number);
}

console.log('------------------------------');
//another for loop - in javascript only 
// for(const number of numbers){
//     console.log(number);
// }

const items = [
    {id: 1, model:'walton phone', price: 13000},
    {id: 2, model:'asus vivo book laptop', price: 80000},
    {id: 3, model:'lenovo yoga Laptop', price: 77000},
    {id: 4, model:'xiaomi Phone', price: 18000},
    {id: 5, model:'samsung galaxy phone', price: 65000},
    {id: 6, model:'iPhone XS Phone', price: 78000},
    {id: 7, model:'dell inspire lapTOP', price: 62000},
    {id: 8, model:'msi dragon pc', price: 200000}
]

//fetching the objects of the array
// for(const item of items){
//     console.log(item);
// }

//search matched products of same type 
function matchedProducts(products, search){
    const matched = [];

    for(const product of products){
        // console.log(product.model.includes(search));
        if(product.model.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    console.log(matched);
}

//function call
const result = matchedProducts(items, 'phone');
const result2 = matchedProducts(items, 'laptop');
