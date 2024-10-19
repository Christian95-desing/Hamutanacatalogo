import {type  GaleryImg } from "~/media/domain/GaleryImg.interface";

import Image_Ecu_1  from '~/media/hamutana-galery/EcuadorFutbol/ecuador-futbol-cuy.jpg?jsx';
import Image_Ecu_2  from '~/media/hamutana-galery/EcuadorFutbol/ecuador-futbol-la-tri-escudo-black.jpg?jsx';
import Image_Ecu_3  from '~/media/hamutana-galery/EcuadorFutbol/ecuador-futbol-la-tri-escudo-white.jpg?jsx';
import Image_Ecu_4  from '~/media/hamutana-galery/EcuadorFutbol/ecuador-futbol-la-tri-kiss-black.jpg?jsx';
import Image_Ecu_5  from '~/media/hamutana-galery/EcuadorFutbol/ecuador-futbol-la-tri-kiss-withe.jpg?jsx';
import Image_Ecu_6  from '~/media/hamutana-galery/EcuadorFutbol/ecuador-futbol-si-se-puede.jpg?jsx';

const imageEcuObject : GaleryImg[] = [
  { imagen_main: Image_Ecu_1, 
    title: 'Cuy Style' 
  },
  { imagen_main: Image_Ecu_2, 
    title: 'Vamos Ecuador',
    imagen_variation :[
      {
        imagen: Image_Ecu_2,
        title: 'variacion arriba ecuador'
      },
      {
        imagen: Image_Ecu_3,
        title: 'variacion arriba ecuador'
      },
    
    ] 
      
  },
  { imagen_main: Image_Ecu_4, 
    title: 'Seleccion modelo kiss',
    imagen_variation : [
      {
        imagen: Image_Ecu_4,
        title: 'Seleccion modelo kiss'
      },
      {
        imagen: Image_Ecu_5,
        title: 'Seleccion modelo kiss'
      },

    ]
  },
  { imagen_main: Image_Ecu_6, 
    title: 'Seleccion sí se puede' 
  },
]


export default imageEcuObject;