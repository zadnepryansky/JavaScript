const url = 'https://jsonplaceholder.typicode.com/todos'

const getData = (url) =>
    new Promise((resolve, reject) =>
        fetch(url)
        .then(response => response.json())  // stream
        .then(json => resolve(json))
        .catch(error => reject(error))
    )

getData(url)
    .then(data => console.log(data))
    .catch(error => console.log(error.message))