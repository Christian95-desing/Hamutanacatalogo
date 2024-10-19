import { type RequestEventLoader } from '@builder.io/qwik-city';
import CryptoJS from 'crypto-js';

export interface Discount {
  discount:string ;
  leadRef:string ;
}

export const getDiscount = (requestEvent:RequestEventLoader<QwikCityPlatform>) => {
  const paramData = requestEvent.url.searchParams.get('data')
  const secretKey = 'Hamutana2023*'
  
  // const discuount10 = 'discount=30&leadRef=HamuXXXFeria2023';
  // const encryptedData10 = CryptoJS.AES.encrypt(discuount10, secretKey).toString();
  // console.log('Datos encriptados: ' + encryptedData10);
  // console.log(encodeURIComponent(''))

  if(!paramData) return null
  
  const discount = {} as Discount
  // Decodificar
  const decoderData = decodeURI(paramData)
  // Desencriptar
  const bytes = CryptoJS.AES.decrypt(decoderData, secretKey);
  const originalData = bytes.toString(CryptoJS.enc.Utf8) ;


  // extraer los parametros 
  const parametros = new URLSearchParams(originalData);
  Object.assign(discount,
    {
      discount : parametros.get('discount'),
      leadRef : parametros.get('leadRef'),
    }
  )

  return  (discount.discount || discount.leadRef) ? discount : null;
};