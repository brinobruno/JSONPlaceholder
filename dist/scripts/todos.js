/* const todoUrl = 'https://jsonplaceholder.typicode.com/todos/'
var results = document.getElementById('results')

fetchTodo = () => {
    //http req

    fetch(todoUrl)
    .then ( (data) => {
        return data.json()
    })

    .then( (data) => {
        console.log(data)

        results.forEach(element => {
            element.innerHTML = `<p>Tarefa: ${data.title}`            
        });

    })

    .catch( (error) => {
        console.log(`Um erro foi detectado! ${error}`)
    })
}

*/

const todoUrl = 'https://jsonplaceholder.typicode.com/todos/'

getPost = () => {

    fetch(todoUrl)
    .then( (data) => {
        return data.json()
    })

    .then( (data) => {

        for (let index = 0; index < 12; index++) {
            div.innerHTML+=
                `
                    <div class="card col-6 m-1 mx-auto">
                    
                    <div class="card-body">
                    <h5 class="card-title"><strong>TAREFA Nº: ${data[cont].id} - </strong>${data[cont].title}</h5>
                    <p class="card-text">Foi realizada? <strong>${data[cont].completed}</strong></p>
                    <p class="card-text"><strong>Tarefa do Usuário </strong>${data[cont].userId}</p>
                </div>
                    
                    </div         
                `
            cont += 1
        }
    })

    .catch( (error) => {
        console.log(`Um erro foi encontrado! ${error}`)
    })
}

changeText = () => {
    btn.innerHTML = 'Ver + To-Dos'
}

var btn = document.getElementById('btn')
btn.addEventListener('click',getPost)
btn.addEventListener('click',changeText)

var cont = 0
var div = document.getElementById('cardDiv')