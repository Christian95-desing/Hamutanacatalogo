import {type  GaleryImg } from "~/media/domain/GaleryImg.interface";

import Image_Rio_1 from '~/media/hamutana-galery/Riobambenidad/rio-canela-loading-black.jpg?jsx';
import Image_Rio_2 from '~/media/hamutana-galery/Riobambenidad/rio-canela-loading-white.jpg?jsx';
import Image_Rio_3 from '~/media/hamutana-galery/Riobambenidad/rio-cuy-black.jpg?jsx';
import Image_Rio_4 from '~/media/hamutana-galery/Riobambenidad/rio-cuy-white.jpg?jsx';
import Image_Rio_5 from '~/media/hamutana-galery/Riobambenidad/rio-poseidon-black.jpg?jsx';
import Image_Rio_6 from '~/media/hamutana-galery/Riobambenidad/rio-poseidon-white.jpg?jsx';

const imageRioObject: GaleryImg[] = [
  { imagen_main: Image_Rio_1, 
    title: 'Canela Loading',
    imagen_variation: [
      { imagen: Image_Rio_1, 
        title: ' Canela Loading Black',
      },
      { imagen: Image_Rio_2, 
        title: ' Canela Loading White',
      },
    ] 
  },
  { imagen_main: Image_Rio_3, 
    title: 'Cuy Riobambeño',
    imagen_variation: [
      { imagen: Image_Rio_3, 
        title: ' Cuy Black',
      },
      { imagen: Image_Rio_4, 
        title: ' Cuy White',
      },
    ] 
  },
  { imagen_main: Image_Rio_5, 
    title: 'Neptuno Rio',
    imagen_variation: [
      { imagen: Image_Rio_5, 
        title: 'Neptuno Black',
      },
      { imagen: Image_Rio_6, 
        title: 'Neptuno White',
      },
    ] 
  },
];



export default imageRioObject;