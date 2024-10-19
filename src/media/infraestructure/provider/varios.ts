import {type  GaleryImg } from "~/media/domain/GaleryImg.interface";

import Image_Varios_1 from '~/media/hamutana-galery/Varios/varios-breiner.jpg?jsx';
import Image_Varios_2 from '~/media/hamutana-galery/Varios/varios-bumburi.jpg?jsx';
import Image_Varios_3 from '~/media/hamutana-galery/Varios/varios-calaveras-2.jpg?jsx';
import Image_Varios_4 from '~/media/hamutana-galery/Varios/varios-formula-1-ferrari.jpg?jsx';
import Image_Varios_5 from '~/media/hamutana-galery/Varios/varios-formula-1-piloto.jpg?jsx';
import Image_Varios_6 from '~/media/hamutana-galery/Varios/varios-maya-2.jpg?jsx';
import Image_Varios_7 from '~/media/hamutana-galery/Varios/varios-maya.jpg?jsx';
import Image_Varios_8 from '~/media/hamutana-galery/Varios/varios-motorcicle.jpg?jsx';
import Image_Varios_9 from '~/media/hamutana-galery/Varios/varios-no-fear.jpg?jsx';
import Image_Varios_10 from '~/media/hamutana-galery/Varios/varios-paradise.jpg?jsx';
import Image_Varios_11 from '~/media/hamutana-galery/Varios/varios-police-white.jpg?jsx';
import Image_Varios_12 from '~/media/hamutana-galery/Varios/varios-police-black.jpg?jsx';
import Image_Varios_13 from '~/media/hamutana-galery/Varios/varios-rick-morty.jpg?jsx';
import Image_Varios_14 from '~/media/hamutana-galery/Varios/varios-the-clash.jpg?jsx';
import Image_Varios_15 from '~/media/hamutana-galery/Varios/varios-tupac.jpg?jsx';
import Image_Varios_16 from '~/media/hamutana-galery/Varios/varios-uka-uka.jpg?jsx';
import Image_Varios_17 from '~/media/hamutana-galery/Varios/varios-wu-tang.jpg?jsx';
import Image_Varios_18 from '~/media/hamutana-galery/Varios/varios-brothers.jpg?jsx';
import Image_Varios_19 from '~/media/hamutana-galery/Varios/Semitono-Todo-lo-que-necesitas-es-amor.jpg?jsx';

import Image_Varios_20 from '~/media/hamutana-galery/Varios/futurama.jpg?jsx';
import Image_Varios_21 from '~/media/hamutana-galery/Varios/michael-jackson-2.jpg?jsx';
import Image_Varios_22 from '~/media/hamutana-galery/Varios/michael-jackson.jpg?jsx';
import Image_Varios_23 from '~/media/hamutana-galery/Varios/michael-jackson-black.jpg?jsx';


import Image_Varios_24 from '~/media/hamutana-galery/Varios/MORAT.jpg?jsx';
import Image_Varios_25 from '~/media/hamutana-galery/Varios/MORAT_CRO_TOP.jpg?jsx';


import Image_Varios_26 from '~/media/hamutana-galery/Varios/Gorillaz.jpg?jsx';
import Image_Varios_27 from '~/media/hamutana-galery/Varios/Gorillaz_1.jpg?jsx';
import Image_Varios_28 from '~/media/hamutana-galery/Varios/Gorillaz_2.jpg?jsx';


const imageVariosObject: GaleryImg[] = [
  { imagen_main: Image_Varios_28,   title: ' Gorillaz2' },
  { imagen_main: Image_Varios_27,   title: ' Gorillaz1' },
  { imagen_main: Image_Varios_26,   title: ' Gorillaz' },

  { imagen_main: Image_Varios_25,   title: ' CROP TOP MORAT' },
  { imagen_main: Image_Varios_24,   title: ' MORAT' },
  { imagen_main: Image_Varios_1,   title: ' Breiner' },
  { imagen_main: Image_Varios_2,  title: ' Bumburi' },
  { imagen_main: Image_Varios_3, title: ' Calaveras 2' },
  { imagen_main: Image_Varios_4, title: ' Formula 1 Ferrari' },
  { imagen_main: Image_Varios_5, title: ' Formula 1 Piloto' },
  { imagen_main: Image_Varios_6,  title: ' Maya 2' },
  { imagen_main: Image_Varios_7,  title: ' Maya' },
  { imagen_main: Image_Varios_8,  title: ' Motorcicle' },
  { imagen_main: Image_Varios_9,  title: ' No Fear' },
  { imagen_main: Image_Varios_10, title: ' Paradise' },
  { imagen_main: Image_Varios_11, title: ' Police',
    imagen_variation:[
      { imagen: Image_Varios_11, 
        title: ' Police White' 
      },
      { imagen: Image_Varios_12, 
        title: ' Police Black' 
      },
    ] 
  },
  { imagen_main: Image_Varios_13, title: ' Rick Morty' },
  { imagen_main: Image_Varios_14, title: ' The Clash' },
  { imagen_main: Image_Varios_15,  title: ' Tupac' },
  { imagen_main: Image_Varios_16, title: ' Uka Uka' },
  { imagen_main: Image_Varios_17,  title: ' Wu Tang'  },
  { imagen_main: Image_Varios_18, title: ' Brothers' },
  { imagen_main: Image_Varios_19, title: 'Todo lo que necesitas' },
  { imagen_main: Image_Varios_20,  title: 'Futurama' },
  { imagen_main: Image_Varios_21,  title: 'Michael Jackson ' },
  { imagen_main: Image_Varios_22, title: 'Michael Jackson  v2',
    imagen_variation:[
      { imagen: Image_Varios_22, 
        title: ' Michael Jackson White' 
      },
      { imagen: Image_Varios_23, 
        title: ' Michael Jackson Black' 
      },
    ] 
  },
];



export default imageVariosObject;