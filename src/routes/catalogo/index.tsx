import { component$ } from '@builder.io/qwik';
import { type DocumentHead, routeLoader$,  } from '@builder.io/qwik-city';
import imageAnimeObject from '~/media/infraestructure/provider/anime';
import imageEcuObject from '~/media/infraestructure/provider/ecuador';
import imageHallowenObject from '~/media/infraestructure/provider/halloween';
import imageNavidadObject from '~/media/infraestructure/provider/navidad';
import imageRioObject from '~/media/infraestructure/provider/riobamba';
import imageRioTradicionObject from '~/media/infraestructure/provider/tradicion';
import imageVariosObject from '~/media/infraestructure/provider/varios';

import style from "./catalog.module.css"
import Cta from '~/components/Call-to-action/cta';
import { getDiscount } from '~/utils/discount';
import imageCarnavalObject from '~/media/infraestructure/provider/canaval';
import imageSanValentinObject from '~/media/infraestructure/provider/san-valentin';
import imageAnimadosObject from '~/media/infraestructure/provider/animados';
import imageNuevosObject from '~/media/infraestructure/provider/nuevos';

const galery = [
  ...imageNuevosObject,
  ...imageAnimadosObject,
  ...imageRioObject,
  ...imageRioTradicionObject,
  ...imageAnimeObject, 
  ...imageSanValentinObject,
  ...imageCarnavalObject,
  ...imageEcuObject,
  ...imageHallowenObject,
  ...imageNavidadObject,
  ...imageVariosObject
] 



export const useRouteDiscountLoader = routeLoader$((requestEvent) => getDiscount(requestEvent));

export default component$(() => {
  const icons = true
  const params = useRouteDiscountLoader()
  const discount = params.value

  return(
    <>
        <section class= " md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-8 ">
          { galery.map(({imagen_main: Image, title, imagen_variation}, index) => (
              <article key={index} class={index === galery.length - 1 ? 'pb-20' : ''}>

              {imagen_variation ? (
                  <swiper-container class="mySwiper"  pagination={icons} navigation={icons} pagination-type="fraction" pagination-dynamic-bullets="true">
                    {imagen_variation.map(({imagen:ImageSec}, variationIndex) => (
                      <swiper-slide key={variationIndex}>
                        <figure class="relative">
                          <div class="absolute top-0 left-0 w-full h-full -z-10 filter blur-sm opacity-[80]"><ImageSec /></div>
                          <div class="p-8 relative">
                            {discount && (
                              <div class={style.ribbon}>
                                <span>-{discount.discount}%</span>
                              </div>
                              )
                            }
                            <ImageSec class="rounded-lg border"/>
                          </div>
                        </figure>
                      </swiper-slide>
                    ))}
                  </swiper-container>
                ) : (
                  <figure class="relative">
                    <div class="absolute top-0 left-0 w-full h-full -z-10 filter blur-sm opacity-[80]"> <Image /> </div>
                    <div class="p-8 relative">
                       {discount && (
                          <div class={style.ribbon}>
                            <span>-{discount.discount}%</span>
                          </div>
                          )
                        }
                      <Image class="rounded-lg border" />
                    </div>
                  </figure>
              )}
                <footer class="bg-black text-white py-4 px-4">
                  <div class="my-2 flex justify-between items-center">
                    <h1 class={style.title}>{title}</h1>
                    <div class="flex-none">
                      <Cta title={`Me gustaria el modelo ${title}  ${discount ? ', mi código de cupon es: ' + discount.leadRef : '.'} `}/>
                    </div>
                  </div>
                </footer>
              </article>
          ))}
        </section> 
    </>
  )
});


export const head: DocumentHead = {
  title: "Hamutana Store",
  meta: [
    {
      name: "description",
      content: "Catálago de camisetas personalizadas",
    },
  ],
};
