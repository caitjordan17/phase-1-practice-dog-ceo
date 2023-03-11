console.log('%c HI', 'color: firebrick')

let breeds = []

function getBreeds(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    return fetch(imgUrl)
    .then(response => response.json())
    .then(response => {
        console.log('response:', response.message)
        const dogImageContainer = document.getElementById("dog-image-container")
        response.message.forEach(url => {
            const img = document.createElement('img')
            img.src = url
            dogImageContainer.append(img)
        })
    }) 

}
function getBreedNames(){
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
    .then(response => response.json())
    .then(response => {
        breeds = Object.keys(response.message)
        addBreedNamesToDom(breeds)
    })
}

document.addEventListener('click', event => {
    if (event.target.matches('li')){
        event.target.style.color = 'red'
    }
})

function addBreedNamesToDom(breeds){
    const ul = document.querySelector('#dog-breeds')
    breeds.map(breed => {
        const li = document.createElement('li')
        li.textContent = breed
        ul.append(li)
    })
}

document.addEventListener('change', event =>{
    if(event.target.matches('#breed-dropdown')){
        const ul = document.querySelector('#dog-breeds')
        ul.innerHTML = ""
        const filteredBreeds = breeds.filter(breed => breed[0] === event.target.value)
        addBreedNamesToDom(filteredBreeds)
    }
})

getBreeds()
getBreedNames()