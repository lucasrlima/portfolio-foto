const moreBtn = document.querySelector('.gray-button')
const gallery = document.querySelector('.galeria-index')
moreBtn.addEventListener('click', addMorePhotos)

function addMorePhotos(ev) {
    ev.preventDefault();

    const gallery = document.querySelector('.galeria-index');

    // Array de objetos representando detalhes de fotos
    const photos = [
      {
        href: 'images/portfolio/portrait/gentili.jpg',
        src: 'images/portfolio/portrait/gentili_vert.jpg',
        lightbox: 'portraits',
        title: 'Danilo Gentili, comedian',
        alt: 'Portrait of the comedian Danilo Gentile'
      },

      {
        href: 'images/portfolio/portrait/muricy.jpg',
        src: 'images/portfolio/portrait/muricy.jpg',
        lightbox: 'portraits',
        title: 'Muricy Ramalho, football coach',
        alt: 'Portrait of the football coach Muricy Ramalho'
      },

      {
        href: 'images/portfolio/politicos/FHC.jpg',
        src: 'images/portfolio/politicos/FHC.jpg',
        lightbox: 'portraits',
        title: 'Fernando Henrique Cardoso, former president',
        alt: 'Portrait of the Fernando Henrique Cardoso, former Brazillian President'
      },

      {
        href: 'images/portfolio/portrait/emicida.jpg',
        src: 'images/portfolio/portrait/emicida.jpg',
        lightbox: 'portraits',
        title: 'Emicida',
        alt: 'Portrait of the brazillian musisian Emicida'
      },


        {
            href: 'images/portfolio/corp/etad-6.jpg',
            src: 'images/portfolio/corp/etad-6.jpg',
            lightbox: 'portraits',
            title: 'Inaê',
            alt: 'Commisioned portrait'
          },


          {
              href: 'images/portfolio/food/food_0003.jpg',
              src: 'images/portfolio/food/food_0003.jpg',
              lightbox: 'portraits',
              title: 'Tássia Magalhães',
              alt: 'Portrait of the chef Tássia Magalhães'
            },


            {
                href: 'images/portfolio/food/food_0103.jpg',
                src: 'images/portfolio/food/food_0103.jpg',
                lightbox: 'portraits',
                title: 'Michel Scherer',
                alt: 'Portrait of the chef Michel Scherer'
              },

              {
                href: 'images/portfolio/portrait/bruna.jpg',
                src: 'images/portfolio/portrait/bruna.jpg',
                lightbox: 'portraits',
                title: 'Bruna',
                alt: 'Portrait in Firenze'
              },

              {
                href: 'images/portfolio/reportage/tanoaria5.jpg',
                src: 'images/portfolio/reportage/tanoaria5_vert.jpg',
                lightbox: 'portraits',
                title: 'Port Wine Barrels',
                alt: 'Port Wine Barrels workers'
              },

              {
                href: 'images/portfolio/reportage/tanoaria4.jpg',
                src: 'images/portfolio/reportage/tanoaria4_vert.jpg',
                lightbox: 'portraits',
                title: 'Port Wine Barrels',
                alt: 'Port Wine Barrels workers'
              },


              {
                href: 'images/portfolio/reportage/drag3.jpg',
                src: 'images/portfolio/reportage/drag3_vert.jpg',
                lightbox: 'portraits',
                title: 'Girl in Drag',
                alt: 'Backstage photo'
              },

              {
              href: 'images/portfolio/reportage/drag1.jpg',
              src: 'images/portfolio/reportage/drag1_vert.jpg',
              lightbox: 'portraits',
              title: 'Girl in Drag',
              alt: 'Backstage photo'
            },



            {
                href: 'images/portfolio/35mm/lorrayne.jpg',
                src: 'images/portfolio/35mm/lorrayne.jpg',
                lightbox: 'portraits',
                title: 'Lorrayne',
                alt: 'Analog photo made with a 35mm camera'
            },

            {
                href: 'images/portfolio/35mm/gio.jpg',
                src: 'images/portfolio/35mm/gio.jpg',
                lightbox: 'portraits',
                title: 'Gio',
                alt: 'Analog photo made with a 35mm camera'
              },

              {
                href: 'images/portfolio/35mm/ezye.jpg',
                src: 'images/portfolio/35mm/ezye.jpg',
                lightbox: 'portraits',
                title: 'Ezyê',
                alt: 'Analog photo made with a 35mm camera'
              },

              {
              href: 'images/portfolio/35mm/ian.jpg',
              src: 'images/portfolio/35mm/ian.jpg',
                lightbox: 'portraits',
                title: 'Ian Ramil',
                alt: 'Analog photo made with a 35mm camera'
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




