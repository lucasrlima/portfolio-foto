const moreBtn = document.querySelector('.gray-button')
const gallery = document.querySelector('.galeria-index')


function addMorePhotos(ev) {
    ev.preventDefault()
    const newPhoto = document.createElement('a')
    const newImage = document.createElement('img')

    newPhoto.className = 'gallery-photo'
    newPhoto.href = 'images/portfolio/politicos/dilma.jpg'
    newPhoto.dataset.lightbox = 'portraits'
    newPhoto.dataset.title = 'Dilmãe'

    newImage.src = 'images/portfolio/politicos/dilma.jpg'
    newImage.alt = 'Lucas Lima'

    newPhoto.appendChild(newImage)
    gallery.appendChild(newPhoto)
}


moreBtn.addEventListener('click', addMorePhotos)