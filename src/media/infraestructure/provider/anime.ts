// En tu archivo barrel.js
import { type GaleryImg } from '~/media/domain/GaleryImg.interface';
import  Image_Anime_1  from '~/media/hamutana-galery/Anime/anime-dragon-ball-kame-house.jpg?jsx';
import  Image_Anime_2  from '~/media/hamutana-galery/Anime/anime-dragon-ball-roshi.jpg?jsx';
import  Image_Anime_3  from '~/media/hamutana-galery/Anime/anime-supermario-yoshi.jpg?jsx';
import  Image_Anime_4  from '~/media/hamutana-galery/Anime/7deadly_sings.jpg?jsx';
import  Image_Anime_5  from '~/media/hamutana-galery/Anime/anime_darks_girl.jpg?jsx';
import  Image_Anime_6  from '~/media/hamutana-galery/Anime/atak_on_titan.jpg?jsx';
import  Image_Anime_7  from '~/media/hamutana-galery/Anime/bdz_shengLong.jpg?jsx';
import  Image_Anime_8  from '~/media/hamutana-galery/Anime/dbz_bulma_black.jpg?jsx';
import  Image_Anime_9  from '~/media/hamutana-galery/Anime/dbz_vegueta.jpg?jsx';
import  Image_Anime_10  from '~/media/hamutana-galery/Anime/jjk_gojo_sensei.jpg?jsx';
import  Image_Anime_11  from '~/media/hamutana-galery/Anime/kny_tanjiro.jpg?jsx';
import  Image_Anime_12  from '~/media/hamutana-galery/Anime/one_piece_gears_black.jpg?jsx';
import  Image_Anime_13  from '~/media/hamutana-galery/Anime/one_piece_gears_white.jpg?jsx';
import  Image_Anime_14  from '~/media/hamutana-galery/Anime/onepiece.jpg?jsx';
import  Image_Anime_15  from '~/media/hamutana-galery/Anime/cro-anie.jpg?jsx';
import  Image_Anime_16  from '~/media/hamutana-galery/Anime/batman_funko.jpg?jsx';
import  Image_Anime_17  from '~/media/hamutana-galery/Anime/yuta-jjk.jpg?jsx';
import  Image_Anime_18  from '~/media/hamutana-galery/Anime/AkiraToriyama.jpg?jsx';
import  Image_Anime_19  from '~/media/hamutana-galery/Anime/AkiraToriyamaVariacion.jpg?jsx';
import  Image_Anime_20  from '~/media/hamutana-galery/Anime/DragonBallFondo.jpg?jsx';
import  Image_Anime_21  from '~/media/hamutana-galery/Anime/vegueta.jpg?jsx';
import  Image_Anime_22  from '~/media/hamutana-galery/Anime/Goku_ss3.jpg?jsx';

const imageAnimeObject : GaleryImg[] = [
  { imagen_main: Image_Anime_22, title: 'Goku SSJ3' },
  { imagen_main: Image_Anime_19, title: 'Akira Toriyama - Goku' },
  { imagen_main: Image_Anime_21, title: 'Vegeta' },
  { imagen_main: Image_Anime_18, title: 'Akira Toriyama' },
  { imagen_main: Image_Anime_1, title: 'Kame House' },
  { imagen_main: Image_Anime_2, title: 'Roshi Master' },
  { imagen_main: Image_Anime_20, title: 'Dragon Ball' },
  { imagen_main: Image_Anime_16, title: 'batman funko' },
  { imagen_main: Image_Anime_17, title: 'Yuta - jjk' },
  { imagen_main: Image_Anime_3, title: 'Super Mario Yoshi' },
  { imagen_main: Image_Anime_4, title: 'The Seven Deadly Sins' },
  { imagen_main: Image_Anime_5, title: 'Darks girl' },
  { imagen_main: Image_Anime_6, title: 'Attack on Titan' },
  { imagen_main: Image_Anime_7, title: 'Shen Long' },
  { imagen_main: Image_Anime_8, title: 'Bulma' },
  { imagen_main: Image_Anime_9, title: 'Vegueta' },
  { imagen_main: Image_Anime_10, title: 'Satoru Gojo - jjk' },
  { imagen_main: Image_Anime_11, title: 'Tanjiro - kny' },
  { imagen_main: Image_Anime_12, 
    title: 'One Piece ',
    imagen_variation : [
      {
        imagen: Image_Anime_12,
        title: 'One Piece Gears black'
      },
      {
        imagen: Image_Anime_13,
        title: 'One Piece Gears white'
      },
    ]
  },
  { imagen_main: Image_Anime_14, title: 'One Piece' },
  { imagen_main: Image_Anime_15, title: 'Cro anie' },

]


export default imageAnimeObject;