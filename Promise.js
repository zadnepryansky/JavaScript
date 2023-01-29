fetch('https://jsonplaceholder.typicode.com/todos/8')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error.message))