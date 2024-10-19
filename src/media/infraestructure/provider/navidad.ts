import {type  GaleryImg } from "~/media/domain/GaleryImg.interface";

import Image_Navidad_1 from '~/media/hamutana-galery/Navidad/navidad-grinch-black.jpg?jsx';
import Image_Navidad_2 from '~/media/hamutana-galery/Navidad/navidad-grinch-white.jpg?jsx';
import Image_Navidad_3 from '~/media/hamutana-galery/Navidad/navidad-grinch-mi-dia-black.jpg?jsx';
import Image_Navidad_4 from '~/media/hamutana-galery/Navidad/navidad-grinch-mi-dia-white.jpg?jsx';

const imageNavidadObject: GaleryImg[] = [
  { imagen_main: Image_Navidad_1, 
    title: 'Navideña Grinch ',
    imagen_variation : [
      { imagen: Image_Navidad_1, 
        title: 'Navideña Grinch Black' 
      },
      { imagen: Image_Navidad_2, 
        title: 'Navideña Grinch White' 
      },
    ] 
  },
  { imagen_main: Image_Navidad_3, 
    title: 'Navideña Grinch Mi Día',
    imagen_variation : [
      { imagen: Image_Navidad_3, 
        title: 'Navideña Grinch Mi Día Black' 
      },
      { imagen: Image_Navidad_4, 
        title: 'Navideña Grinch Mi Día White' 
      },
    ] 
  },

];


export default imageNavidadObject;