import {type  GaleryImg } from "~/media/domain/GaleryImg.interface";

import Image_Rio_Traducion_1  from '~/media/hamutana-galery/Tradicion/rio-tradicion-diablo-huma.jpg?jsx';
import Image_Rio_Traducion_2  from '~/media/hamutana-galery/Tradicion/rio-tradicion-diablo-lata-black.jpg?jsx';
import Image_Rio_Traducion_3  from '~/media/hamutana-galery/Tradicion/rio-tradicion-AYA-HUMA.jpg?jsx';
import Image_Rio_Traducion_4  from '~/media/hamutana-galery/Tradicion/rio-tradicion-DIABLO-DE-LATA(FUNKO)-BLACK.jpg?jsx';
import Image_Rio_Traducion_5  from '~/media/hamutana-galery/Tradicion/rio-tradicion-DIABLO-DE-LATA(FUNKO)-WHITE.jpg?jsx';


import  Image_Rio_Traducion_6  from '~/media/hamutana-galery/Tradicion/buo.jpg?jsx';
import  Image_Rio_Traducion_7  from '~/media/hamutana-galery/Tradicion/buo2.jpg?jsx';
import  Image_Rio_Traducion_8  from '~/media/hamutana-galery/Tradicion/tradicional.jpg?jsx';
import  Image_Rio_Traducion_9  from '~/media/hamutana-galery/Tradicion/tradicional2.jpg?jsx';


const imageRioTradicionObject : GaleryImg[] = [
  { imagen_main: Image_Rio_Traducion_9, title: 'tradicional2' },
  { imagen_main: Image_Rio_Traducion_8, title: 'tradicional' },
  { imagen_main: Image_Rio_Traducion_7, title: 'BÚHO2' },
  { imagen_main: Image_Rio_Traducion_6, title: 'BÚHO' },

  { imagen_main: Image_Rio_Traducion_1, title: 'El diablo Huma' },
  { imagen_main: Image_Rio_Traducion_2, 
    title: 'El diablo de lata' 
  },
  { imagen_main: Image_Rio_Traducion_3, 
    title: 'El aya huma' 
  },
  { imagen_main: Image_Rio_Traducion_4, 
    title: 'Diablo de lata',
    imagen_variation:[
      { imagen: Image_Rio_Traducion_4, 
        title: 'Diablo de lata black' 
      },
      { imagen: Image_Rio_Traducion_5, 
        title: 'Diablo de lata white' 
      },

    ]
  },
]


export default imageRioTradicionObject;