let animalForm = document.getElementById('animal-form')
let animalInput = document.getElementById('animal-input')
let getAnimalsBtn = document.getElementById('get-animals')
let animalList = document.getElementById('list')

function addAnimal(e){
    e.preventDefault()

    let body = {
        animal: animalInput.value
    }

    axios.post('/add', body).then((res) => {
        console.log(res.data)
    })
    animalInput.value = ''
}

function getAnimals(){
    axios.get('/get').then((res) => {
        animalList.innerHTML = ''
        res.data.forEach(e => {
            let animal = document.createElement('li')
            animal.innerText = e.animal
            animalList.appendChild(animal)
        })
        console.log(res.data)
    })
}



animalForm.addEventListener('submit', addAnimal)
getAnimalsBtn.addEventListener('click', getAnimals)


