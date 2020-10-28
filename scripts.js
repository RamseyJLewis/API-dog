let url = 'https://dog.ceo/api/breeds/image/random/50'
let body = document.querySelector('body')

fetch(url)
    .then(res => res.json())
    .then(res => {
        console.log(res.message)
        for(let i = 0; i < res.message.length; i++){

        let picture = document.createElement('img')
        picture.src = res.message[i]
        body.appendChild(picture)
        }
    })
    .catch(err => console.log(err))

  