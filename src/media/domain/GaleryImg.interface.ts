
export interface GaleryImg {
  imagen_main:any,
  imagen_variation?:GaleryImgVariation[],
  title:string,
}
interface GaleryImgVariation {
  imagen: any,
  title:string,
}