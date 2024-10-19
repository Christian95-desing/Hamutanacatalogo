import { component$,$ } from '@builder.io/qwik';

import style from "./cta_style.module.css"
import { useNavigate } from '@builder.io/qwik-city';
import { WhatsApp } from '../starter/icons/WhatsApp';

export default component$(({title}) => {
  const nav = useNavigate()
  const gotoPage = $((url:string)=>nav(url));

  return(
    <>
      <button class={style.bookmarkBtn} onClick$={() => gotoPage( GenerateWaMe(title) )}>
        <span class={style.IconContainer}> 
          <WhatsApp width={20}/>
        </span>
        <p class={[style.text,"text-sm"]}>Preguntar</p>
      </button>
    </>
  )
});


const GenerateWaMe=((product:string)=>{
  const PhoneNumber = "593983789620"
  const message = `Hola hamutana, `
  const smsInitial: string = encodeURIComponent(message);
  const url = `https://wa.me/${PhoneNumber}?text=${smsInitial}`;
  const Products = `${product}`
  const urlFinal = url.concat(encodeURIComponent(Products));
  return urlFinal
})