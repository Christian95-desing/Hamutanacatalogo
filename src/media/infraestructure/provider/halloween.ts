import {type  GaleryImg } from "~/media/domain/GaleryImg.interface";

import Image_Halloween_1  from '~/media/hamutana-galery/Halloween/halloween-calavera-black.jpg?jsx';
import Image_Halloween_2  from '~/media/hamutana-galery/Halloween/halloween-calavera-white.jpg?jsx';
import Image_Halloween_3  from '~/media/hamutana-galery/Halloween/halloween-craneo-roja.jpg?jsx';
import Image_Halloween_4  from '~/media/hamutana-galery/Halloween/halloween-diablo-robot.jpg?jsx';
import Image_Halloween_5  from '~/media/hamutana-galery/Halloween/halloween-diablo.jpg?jsx';
import Image_Halloween_7  from '~/media/hamutana-galery/Halloween/halloween-dulce-o-biela-black.jpg?jsx';
import Image_Halloween_8  from '~/media/hamutana-galery/Halloween/halloween-dulce-o-biela-white.jpg?jsx';
import Image_Halloween_9  from '~/media/hamutana-galery/Halloween/halloween-dulce-o-truco-black.jpg?jsx';
import Image_Halloween_10  from '~/media/hamutana-galery/Halloween/halloween-dulce-o-truco-white.jpg?jsx';
import Image_Halloween_11  from '~/media/hamutana-galery/Halloween/halloween-marciano.jpg?jsx';

const imageHallowenObject: GaleryImg[] = [
  { imagen_main: Image_Halloween_1, 
    title: 'Calavera',
    imagen_variation :[
      { imagen: Image_Halloween_1, 
        title: ' Calavera Black' 
      },
      { imagen: Image_Halloween_2, 
        title: ' Calavera White' 
      },
    ] 
  },
  { imagen_main: Image_Halloween_3, 
    title: 'Craneo' 
  },
  { imagen_main: Image_Halloween_4, 
    title: ' Diablo Robot' 
  },
  { imagen_main: Image_Halloween_5, 
    title: ' Diablo' 
  },
  { imagen_main: Image_Halloween_7, 
    title: ' Dulce o Biela', 
    imagen_variation :[
      { imagen: Image_Halloween_7, 
        title: ' Dulce o Biela Black' 
      },
      { imagen: Image_Halloween_8, 
        title: ' Dulce o Biela White' 
      },
    ]  
  },
  { imagen_main: Image_Halloween_9, 
    title: 'Dulce o Truco' ,
    imagen_variation :[
      { imagen: Image_Halloween_9, 
        title: ' Dulce o Truco Black' 
      },
      { imagen: Image_Halloween_10, 
        title: ' Dulce o Truco White' 
      },
    ]  
  },
  { imagen_main: Image_Halloween_11, 
    title: ' Marciano' 
  },
];


export default imageHallowenObject;