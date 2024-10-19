// En tu archivo barrel.js
import { type GaleryImg } from '~/media/domain/GaleryImg.interface';
import  Image_Carnaval_1  from '~/media/hamutana-galery/Carnaval/angel-carnaval.jpg?jsx';
import  Image_Carnaval_2  from '~/media/hamutana-galery/Carnaval/carnaval-simple.jpg?jsx';
import  Image_Carnaval_3  from '~/media/hamutana-galery/Carnaval/cultura-carnaval.jpg?jsx';
import  Image_Carnaval_4  from '~/media/hamutana-galery/Carnaval/cuy-carnavalero.jpg?jsx';
import  Image_Carnaval_5  from '~/media/hamutana-galery/Carnaval/fiesta-ecuador-2.jpg?jsx';
import  Image_Carnaval_6  from '~/media/hamutana-galery/Carnaval/fiesta-ecuador.jpg?jsx';
import  Image_Carnaval_7  from '~/media/hamutana-galery/Carnaval/franja-llamada.jpg?jsx';
import  Image_Carnaval_8  from '~/media/hamutana-galery/Carnaval/frase-mmv.jpg?jsx';
import  Image_Carnaval_9  from '~/media/hamutana-galery/Carnaval/pajaro-azul-black.jpg?jsx';
import  Image_Carnaval_10  from '~/media/hamutana-galery/Carnaval/pajaro-azul-white.jpg?jsx';


const imageCarnavalObject : GaleryImg[] = [
  { imagen_main: Image_Carnaval_8, title: 'Frase mmv' },
  { imagen_main: Image_Carnaval_4, title: 'Cuy carnavalero' },
  { imagen_main: Image_Carnaval_9, 
    title: 'Pajaro azul carnavalero',
    imagen_variation : [
      {
        imagen: Image_Carnaval_9,
        title: 'Pajaro azul black'
      },
      {
        imagen: Image_Carnaval_10,
        title: 'Pajaro azul white'
      },

    ]
  },
  { imagen_main: Image_Carnaval_1, title: 'Angel carnaval' },
  { imagen_main: Image_Carnaval_2, title: 'Carnaval simple' },
  { imagen_main: Image_Carnaval_3, title: 'Cultura carnaval' },
  { imagen_main: Image_Carnaval_5, title: 'Fiesta ecuador 2 ' },
  { imagen_main: Image_Carnaval_6, title: 'Fiesta ecuador' },
  { imagen_main: Image_Carnaval_7, title: 'Franja llamada' },
]


export default imageCarnavalObject;