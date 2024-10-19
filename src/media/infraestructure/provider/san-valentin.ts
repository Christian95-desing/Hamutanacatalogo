// En tu archivo barrel.js
import { type GaleryImg } from '~/media/domain/GaleryImg.interface';
import  Image_san_valentin_1  from '~/media/hamutana-galery/SanValentin/Always-Together.jpg?jsx';
import  Image_san_valentin_2  from '~/media/hamutana-galery/SanValentin/Always-Together-black.jpg?jsx';
import  Image_san_valentin_3  from '~/media/hamutana-galery/SanValentin/Amon-us-red-love.jpg?jsx';
import  Image_san_valentin_4  from '~/media/hamutana-galery/SanValentin/Juntos-corazon.jpg?jsx';
import  Image_san_valentin_5  from '~/media/hamutana-galery/SanValentin/Juntos-corazon-black.jpg?jsx';
import  Image_san_valentin_6  from '~/media/hamutana-galery/SanValentin/Love-whally.jpg?jsx';
import  Image_san_valentin_7  from '~/media/hamutana-galery/SanValentin/Love-wally-black.jpg?jsx';
import  Image_san_valentin_8  from '~/media/hamutana-galery/SanValentin/amor-sincero-corazon.jpg?jsx';
import  Image_san_valentin_9  from '~/media/hamutana-galery/SanValentin/amor-sincero-corazon-black.jpg?jsx';
import  Image_san_valentin_10  from '~/media/hamutana-galery/SanValentin/broke-your-heart.jpg?jsx';
import  Image_san_valentin_11  from '~/media/hamutana-galery/SanValentin/harry-potter-posion-love-mujer-hombre.jpg?jsx';
import  Image_san_valentin_12  from '~/media/hamutana-galery/SanValentin/harry-potter-posion-love-mujer.jpg?jsx';
import  Image_san_valentin_13  from '~/media/hamutana-galery/SanValentin/my-crewmate.jpg?jsx';
import  Image_san_valentin_14  from '~/media/hamutana-galery/SanValentin/no-today-cupido-hombre.jpg?jsx';
import  Image_san_valentin_15  from '~/media/hamutana-galery/SanValentin/no-today-cupido-mujer.jpg?jsx';
import  Image_san_valentin_16  from '~/media/hamutana-galery/SanValentin/pacman-love.jpg?jsx';
import  Image_san_valentin_17  from '~/media/hamutana-galery/SanValentin/Perzonalizado-siempre-juntos.jpg?jsx';


const imageSanValentinObject: GaleryImg[] = [
  {
    imagen_main: Image_san_valentin_1,
    title: 'Always Together',
    imagen_variation: [
      { imagen: Image_san_valentin_1, title: 'Always Together' },
      { imagen: Image_san_valentin_2, title: 'Always Together (Black)' },
    ],
  },

  {
    imagen_main: Image_san_valentin_4,
    title: 'Juntos Corazon',
    imagen_variation: [
      { imagen: Image_san_valentin_4, title: 'Juntos Corazon' },
      { imagen: Image_san_valentin_5, title: 'Juntos Corazon (Black)' },
    ],
  },
  {
    imagen_main: Image_san_valentin_6,
    title: 'Love Wally',
    imagen_variation: [
      { imagen: Image_san_valentin_6, title: 'Love Whally' },
      { imagen: Image_san_valentin_7, title: 'Love Wally (Black)' },
    ],
  },

  {
    imagen_main: Image_san_valentin_8,
    title: 'Amor Sincero Corazon',
    imagen_variation: [
      { imagen: Image_san_valentin_8, title: 'Amor Sincero Corazon' },
      { imagen: Image_san_valentin_9, title: 'Amor Sincero Corazon (Black)' },
    ],
  },
  {
    imagen_main: Image_san_valentin_3,
    title: 'Amon-us Red Love',
  },
  {
    imagen_main: Image_san_valentin_10,
    title: 'Broke Your Heart',
  },
  {
    imagen_main: Image_san_valentin_11,
    title: 'Harry Potter Poison Love',
    imagen_variation: [
      { imagen: Image_san_valentin_11, title: 'Harry Potter Poison Love (Hombre)' },
      { imagen: Image_san_valentin_12, title: 'Harry Potter Poison Love (Mujer)' },
    ],
  },

  {
    imagen_main: Image_san_valentin_13,
    title: 'My Crewmate',
  },
  {
    imagen_main: Image_san_valentin_14,
    title: 'No Today Cupido ',
    imagen_variation: [
      { imagen: Image_san_valentin_14, title: 'No Today Cupido (Hombre)' },
      { imagen: Image_san_valentin_15, title: 'No Today Cupido (Mujer)' },
    ],
  },
  {
    imagen_main: Image_san_valentin_16,
    title: 'Pacman Love',
  },
  {
    imagen_main: Image_san_valentin_17,
    title: 'Perzonalizado Siempre Juntos',
  },
];



export default imageSanValentinObject;