const myCity = {
    city: 'Kharkiv'
}

myCity.popular = true                   // add something

console.log(myCity)

myCity.victory = true
myCity.people = 'Best'

delete myCity.people                    // delete something

myCity.people = 'The best'
console.log(myCity)

myCity['myStreet'] = 'Plekhanivska'    // add another way


console.log(myCity)

const counstryPropertyName = 'conutry'    // country :

myCity[counstryPropertyName] = 'Ukraine'  // country : 'Ukraine'

console.log(myCity)

