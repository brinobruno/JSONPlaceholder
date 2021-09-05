getPost = () => {

    fetch('https://jsonplaceholder.typicode.com/albums')
    .then( (data) => {
        return data.json()
    })

    .then( (data) => {
        for (let index = 0; index < 12; index++) {
            div.innerHTML+=
                `
                    <div class="card col-6 m-1 mx-auto">
                    
                        <div class="card-body">
                            <h5 class="card-title"><strong>TÍTULO: </strong>${data[cont].title}</h5>
                            <p class="card-text"><strong>Nº: </strong>${data[cont].userId}</p>
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
    btn.innerHTML = 'Ver + Álbuns'
}

var btn = document.getElementById('btn')
btn.addEventListener('click',getPost)
btn.addEventListener('click',changeText)

var cont = 0
var div = document.getElementById('cardDiv')