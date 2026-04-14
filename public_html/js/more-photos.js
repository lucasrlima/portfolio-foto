const moreBtn = document.querySelector('.gray-button')
const gallery = document.querySelector('.galeria-index')
moreBtn.addEventListener('click', addMorePhotos)

function addMorePhotos(ev) {
    ev.preventDefault();

    const gallery = document.querySelector('.galeria-index');

    // Array de objetos representando detalhes de fotos
    const photos = [

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
            href: 'images/portfolio/story/esquiva2.jpg',
            lightbox: 'portraits',
            title: 'Esquiva Falcão, olympic medal winner',
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
          href: 'images/portfolio/portrait/kaka.jpg',
          src: 'images/portfolio/portrait/kaka.jpg',
          lightbox: 'portraits',
          title: 'Kaká, football player',
          alt: 'Lucas Lima'
        },



        {
            href: 'images/portfolio/corp/etad-6.jpg',
            src: 'images/portfolio/corp/etad-6.jpg',
            lightbox: 'portraits',
            title: 'Inaê',
            alt: 'Lucas Lima'
          },


          {
              href: 'images/portfolio/food/food_0003.jpg',
              src: 'images/portfolio/food/food_0003.jpg',
              lightbox: 'portraits',
              title: '.',
              alt: 'Lucas Lima'
            },


            {
                href: 'images/portfolio/food/food_0103.jpg',
                src: 'images/portfolio/food/food_0103.jpg',
                lightbox: 'portraits',
                title: '.',
                alt: 'Lucas Lima'
              },

              {
                href: 'images/portfolio/portrait/bruna.jpg',
                src: 'images/portfolio/portrait/bruna.jpg',
                lightbox: 'portraits',
                title: 'Bruna',
                alt: 'Lucas Lima'
              },

              {
                href: 'images/portfolio/reportage/tanoaria5.jpg',
                src: 'images/portfolio/reportage/tanoaria5_vert.jpg',
                lightbox: 'portraits',
                title: 'Port Wine Barrels',
                alt: 'Lucas Lima'
              },

              {
                href: 'images/portfolio/reportage/tanoaria4.jpg',
                src: 'images/portfolio/reportage/tanoaria4_vert.jpg',
                lightbox: 'portraits',
                title: 'Port Wine Barrels',
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
                href: 'images/portfolio/35mm/lorrayne.jpg',
                src: 'images/portfolio/35mm/lorrayne.jpg',
                lightbox: 'portraits',
                title: 'Lorrayne',
                alt: 'Lucas Lima'
            },

            {
                href: 'images/portfolio/35mm/gio.jpg',
                src: 'images/portfolio/35mm/gio.jpg',
                lightbox: 'portraits',
                title: 'Gio',
                alt: 'Lucas Lima'
              },

              {
                href: 'images/portfolio/35mm/pedro.jpg',
                src: 'images/portfolio/35mm/pedro.jpg',
                lightbox: 'portraits',
                title: 'Pedro Luís',
                alt: 'Lucas Lima'
              },

              {
              href: 'images/portfolio/35mm/ian.jpg',
              src: 'images/portfolio/35mm/ian.jpg',
                lightbox: 'portraits',
                title: 'Ian Ramil',
                alt: 'Lucas Lima'
            },

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
    moreBtn.textContent = 'Galleries'
  }




