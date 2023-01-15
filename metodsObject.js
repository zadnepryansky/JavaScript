const myCity = {
    city: 'Kharkiv',
    cityGreeting: function(){                // first example
        console.log('Greetings!!')
    }
}

myCity.cityGreeting()            


const myCity2 = {
    city: 'Kharkiv',
    cityGreeting() {                       // second example
        console.log('Greetings 2 !!')
    }
}

myCity2.cityGreeting()