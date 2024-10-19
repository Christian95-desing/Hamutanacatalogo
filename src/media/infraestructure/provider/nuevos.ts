// En tu archivo barrel.js
import { type GaleryImg } from '~/media/domain/GaleryImg.interface';
import  Image_nuevos_1  from '~/media/hamutana-galery/Nuevos/MAQUEEN_BUZO.jpg?jsx';
import  Image_nuevos_2  from '~/media/hamutana-galery/Nuevos/MAQUEEN_CAMISETA.jpg?jsx';
import  Image_nuevos_3  from '~/media/hamutana-galery/Nuevos/MAQUEEN_pareja.jpg?jsx';
import  Image_nuevos_4  from '~/media/hamutana-galery/Nuevos/MORAT.jpg?jsx';
import  Image_nuevos_5  from '~/media/hamutana-galery/Nuevos/MORAT_CRO_TOP.jpg?jsx';
import  Image_nuevos_6  from '~/media/hamutana-galery/Nuevos/buo.jpg?jsx';
import  Image_nuevos_7  from '~/media/hamutana-galery/Nuevos/buo2.jpg?jsx';
import  Image_nuevos_8  from '~/media/hamutana-galery/Nuevos/tradicional.jpg?jsx';
import  Image_nuevos_9  from '~/media/hamutana-galery/Nuevos/tradicional2.jpg?jsx';



const imageNuevosObject : GaleryImg[] = [
  { imagen_main: Image_nuevos_1, title: 'McQueen hoodie' },
  { imagen_main: Image_nuevos_2, title: 'McQueen 1' },
  { imagen_main: Image_nuevos_3, title: 'McQueen 2' },
  { imagen_main: Image_nuevos_4, title: 'MORAT' },
  { imagen_main: Image_nuevos_5, title: 'CROP TOP MORAT' },
  { imagen_main: Image_nuevos_6, title: 'BÚHO' },
  { imagen_main: Image_nuevos_7, title: 'BÚHO2' },
  { imagen_main: Image_nuevos_8, title: 'tradicional' },
  { imagen_main: Image_nuevos_9, title: 'tradicional2' },


  // { imagen_main: Image_Anime_12, 
  //   title: 'One Piece ',
  //   imagen_variation : [
  //     {
  //       imagen: Image_Anime_12,
  //       title: 'One Piece Gears black'
  //     },
  //     {
  //       imagen: Image_Anime_13,
  //       title: 'One Piece Gears white'
  //     },
  //   ]
  // },

]


export default imageNuevosObject;