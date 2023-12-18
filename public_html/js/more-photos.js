const moreBtn = document.querySelector('.gray-button')
const gallery = document.querySelector('.galeria-index')
moreBtn.addEventListener('click', addMorePhotos)

function addMorePhotos(ev) {
    ev.preventDefault();
  
    const gallery = document.querySelector('.galeria-index');
  
    // Array de objetos representando detalhes de fotos
    const photos = [
        {
            href: 'images/portfolio/shows/bono.jpg',
            src: 'images/portfolio/shows/bono_vert.jpg',
            lightbox: 'portraits',
            title: 'U2',
            alt: 'U2'
        },


        {
            href: 'images/portfolio/shows/PJ.jpg',
            lightbox: 'portraits',
            title: 'PJ Harvey',
            alt: 'PJ Harvey'
        },
        
        {
            href: 'images/portfolio/shows/stones.jpg',
            src: 'images/portfolio/shows/stones_vert.jpg',
            lightbox: 'portraits',
            title: 'The Rolling Stones',
            alt: 'The Rolling Stones'
        },

        {
            href: 'images/portfolio/shows/paul.jpg',
            src: 'images/portfolio/shows/paul_vert.jpg',
            lightbox: 'portraits',
            title: 'Paul McCartney',
            alt: 'Paul McCartney'
        },


        {
            href: 'images/portfolio/portrait/trajano.jpg',
            lightbox: 'portraits',
            title: 'José Trajano, journalist',
            alt: 'Lucas Lima'
        },

        {
            href: 'images/portfolio/consolacao/consolacao-3.jpg',
            lightbox: 'portraits',
            title: 'Consolação, book cover',
            alt: 'Lucas Lima'
        },


        {
            href: 'images/portfolio/portrait/DJ_marky.jpg',
            lightbox: 'portraits',
            title: 'Liniker, singer',
            alt: 'Lucas Lima'
        },

        {
            href: 'images/portfolio/story/diego2.jpg',
            lightbox: 'portraits',
            title: 'Diego Hypólito, olympic medal winner',
            alt: 'Lucas Lima'
        },
        
        {
            href: 'images/portfolio/portrait/liniker.jpg',
            lightbox: 'portraits',
            title: 'Liniker, singer',
            alt: 'Lucas Lima'
        },


        {
            href: 'images/portfolio/politicos/haddad.jpg',
            lightbox: 'portraits',
            title: 'Fernando Haddad',
            alt: 'Lucas Lima'
        },
        
        {
            href: 'images/portfolio/politicos/temer.jpg',
            lightbox: 'portraits',
            title: 'Michel Temer, former brazillian president',
            alt: 'Lucas Lima'
        },
        
       
        
        {
          href: 'images/portfolio/corp/nomad-2.jpg',
          lightbox: 'portraits',
          title: 'Corp Portraits',
          alt: 'Lucas Lima'
        },
      // Adicione mais objetos conforme necessário
    ];
  
    // Iterar sobre o array de fotos e criar elementos para cada uma
    photos.forEach(photo => {
      const newPhoto = document.createElement('a');
      const newImage = document.createElement('img');
  
      newPhoto.className = 'gallery-photo';
      newPhoto.href = photo.href;
      newPhoto.dataset.lightbox = photo.lightbox;
      newPhoto.dataset.title = photo.title;
      
      if (photo.src === undefined) {
        newImage.src = photo.href} 
       // Use o mesmo caminho da imagem para o src
       else newImage.src = photo.src;
       
       newImage.alt = photo.alt;
  
      newPhoto.appendChild(newImage);
      gallery.appendChild(newPhoto);
    });

    moreBtn.removeEventListener('click', addMorePhotos)
    moreBtn.setAttribute('href', 'fotox-index')
    moreBtn.textContent = 'Galleries Index'
  }
  
  


