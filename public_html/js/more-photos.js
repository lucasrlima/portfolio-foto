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
            title: 'DJ Marky',
            alt: 'Lucas Lima'
        },

        {
            href: 'images/portfolio/story/diego2.jpg',
            lightbox: 'portraits',
            title: 'Diego Hypólito, olympic medal winner',
            alt: 'Lucas Lima'
        },

        {
            href: 'images/portfolio/portrait/gentili.jpg',
            src: 'images/portfolio/portrait/gentili_vert.jpg',
            lightbox: 'portraits',
            title: 'Danilo Gentili, comedian',
            alt: 'Lucas Lima'
        },
        
        {
            href: 'images/portfolio/portrait/tais_araujo.jpg',
            lightbox: 'portraits',
            title: 'Taís Araújo, actress',
            alt: 'Lucas Lima'
        },
        
        {
            href: 'images/portfolio/portrait/fillipo.jpg',
            src: 'images/portfolio/portrait/fillipo_vert.jpg',
            lightbox: 'portraits',
            title: "Filippo Sorcinelli, pope's Stylist",
            alt: 'Lucas Lima'
        },

        {
            href: 'images/portfolio/portrait/pickpocket.JPG',
            lightbox: 'portraits',
            title: 'Monica Poli, anti pickpocket activist',
            alt: 'Lucas Lima'
        },
        
        {
            href: 'images/portfolio/portrait/liniker.jpg',
            lightbox: 'portraits',
            title: 'Liniker, singer',
            alt: 'Lucas Lima'
        },


        {
            href: 'images/portfolio/politicos/marina.jpg',
            lightbox: 'portraits',
            title: 'Marina Silva, brazillian minister',
            alt: 'Lucas Lima'
        },
        
        {
            href: 'images/portfolio/politicos/temer.jpg',
            lightbox: 'portraits',
            title: 'Michel Temer, former brazillian president',
            alt: 'Lucas Lima'
        },
        
        {
          href: 'images/portfolio/portrait/kaka.jpg',
          lightbox: 'portraits',
          title: 'Kaká, football player',
          alt: 'Lucas Lima'
        },
        
        {
            href: 'images/portfolio/reportage/tourada7.jpg',
            src: 'images/portfolio/reportage/tourada7_vert.jpg',
            lightbox: 'portraits',
            title: 'Bull Fight in Portugal',
            alt: 'Lucas Lima'
          },

          {
              href: 'images/portfolio/reportage/tourada2.jpg',
              src: 'images/portfolio/reportage/tourada2_vert.jpg',
              lightbox: 'portraits',
              title: 'Bull Fight in Portugal',
              alt: 'Lucas Lima'
          },
          
          {
              href: 'images/portfolio/reportage/fragmento14.jpg',
              src: 'images/portfolio/reportage/fragmento14_vert.jpg',
              lightbox: 'portraits',
              title: 'Berlin',
              alt: 'Lucas Lima'
            },
            
            
            {
                href: 'images/portfolio/reportage/yoga-3.jpg',
                lightbox: 'portraits',
                title: 'Nude Yoga',
                alt: 'Lucas Lima'
              },
              
              {
                href: 'images/portfolio/story/murer5.jpg',
                src: 'images/portfolio/story/murer5_vert.jpg',
                lightbox: 'portraits',
                title: 'Fabiana Murer, olympic athlete',
                alt: 'Lucas Lima'
              },

              {
                href: 'images/portfolio/story/zanetti12jpg.jpg',
                src: 'images/portfolio/story/zanetti12_vert.jpg',
                lightbox: 'portraits',
                title: 'Artur Zanetti, olympic gold medal winner',
                alt: 'Lucas Lima'
              },


              {
                href: 'images/portfolio/reportage/drag3.jpg',
                src: 'images/portfolio/reportage/drag3_vert.jpg',
                lightbox: 'portraits',
                title: 'Girl in Drag',
                alt: 'Lucas Lima'
              },
            
              {
              href: 'images/portfolio/reportage/drag1.jpg',
              src: 'images/portfolio/reportage/drag1_vert.jpg',
              lightbox: 'portraits',
              title: 'Girl in Drag',
              alt: 'Lucas Lima'
            },
            
            {
                href: 'images/portfolio/street/evora-01.jpg',
                src: 'images/portfolio/street/evora-01.jpg',
                lightbox: 'portraits',
                title: 'Evora, Portugal',
                alt: 'Lucas Lima'
            },
            
            {
                href: 'images/portfolio/street/SP-03.jpg',
                src: 'images/portfolio/street/SP-03.jpg',
                lightbox: 'portraits',
                title: 'São Paulo',
                alt: 'Lucas Lima'
            },
            
            {
                href: 'images/portfolio/street/lisbon-06.jpg',
                src: 'images/portfolio/street/lisbon-06.jpg',
                lightbox: 'portraits',
                title: 'Lisbon',
                alt: 'Lucas Lima'
              },

              {
                href: 'images/portfolio/street/firenze05.jpg',
                src: 'images/portfolio/street/firenze05.jpg',
                lightbox: 'portraits',
                title: 'Firenze, Italy',
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
    moreBtn.setAttribute('href', 'fotos-index')
    moreBtn.textContent = 'Galleries Index'
  }
  
  


