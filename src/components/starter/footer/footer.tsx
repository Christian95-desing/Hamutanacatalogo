import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";
import { Link } from "@builder.io/qwik-city";
import { HamutanaLogo } from "../icons/HamutanaLogo";
import Cta from "~/components/Call-to-action/cta";

interface FooterNav{
  displayName: string,
  icon: string,
  route: string
}

export default component$(({has_discount, leadRef} : {has_discount:boolean, leadRef:string}) => {
  // const navigation: FooterNav[] = [
  //   {
  //     displayName: 'All',
  //     icon: 'home',
  //     route: '/catalog'
  //   },
  //   {
  //     displayName: 'Anime',
  //     icon: 'home',
  //     route: '/catalog/anime'
  //   },
  //   {
  //     displayName: 'Ecuador',
  //     icon: 'home',
  //     route: '/catalog/ecuador'
  //   },
  //   {
  //     displayName: 'Halloween',
  //     icon: 'home',
  //     route: '/catalog/halloween'
  //   },
  //   {
  //     displayName: 'Navidad',
  //     icon: 'home',
  //     route: '/catalog/navidad'
  //   },
  //   {
  //     displayName: 'Promociones',
  //     icon: 'home',
  //     route: '/catalog/promociones'
  //   },
  //   {
  //     displayName: 'Riobambeñidad',
  //     icon: 'home',
  //     route: '/catalog/riobamba'
  //   },
  //   {
  //     displayName: 'Tradicion y Cultura',
  //     icon: 'home',
  //     route: '/catalog/tradicion'
  //   },
  //   {
  //     displayName: 'Varios',
  //     icon: 'home',
  //     route: '/catalog/varios'
  //   },
  // ]

  const message = `Quiero un diseño personalizado ${leadRef == '' ? '.' : ', mi código de cupon es: ' + leadRef+'.'}`;
  
  
  return (
      <footer class= {["fixed left-0 right-0 bottom-0 z-50", styles.container]}>
        <div class={`${has_discount ? ' mb-6' : 'mb-2'} flex gap-4  mt-2`}>
          {/* <ul class="container-fluid col-lg-12 overflow-x-auto flex gap-4">
            {navigation.map(({ displayName, icon, route }, index) => (
              <NavLinkItem key={index} displayName={displayName} icon={icon} route={route} />
              ))}
            </ul> */}
          <div class="container mx-auto flex px-2 justify-between items-center gap-2">
            <HamutanaLogo width={30} color_blue="#fff" color_black="#fff" color_white="#fff" color_fill="#fff" />
            <div  class=" text-center text-sm">
              <p>¿Quieres un diseño único?</p>
              <p class="text-xs">Pregunta por un diseño presonalizado  </p>
            </div>
            <div class="flex-none">
              <Cta title={message}/>
            </div>
          </div>
        </div>

      </footer>
  );
  // return (
  //     <footer class= {["fixed left-0 right-0 bottom-0 z-50 container-fluid col-lg-8 jobHead",styles.header]}>
  //       <div class={["container mx-auto mt-4 fixed left-0 right-0", styles.wrapper]}>
  //         <h1>Artstation</h1>
  //         <h2>os melhores trabalhos estão aqui</h2>
  //         <ul class="container-fluid col-lg-12">
  //           <li>ALL</li>
  //           <li>Arte 3D</li>
  //           <li>Impressos</li>
  //           <li>Web Design</li>
  //           <li>Skeths / Draw</li>
  //         </ul>          
  //       </div>
  //     </footer>
  // );
});


export const NavLinkItem = component$(({displayName, icon,route}:FooterNav) => {
  return(
    <>
      <li>
        <Link href={route}><span>{displayName}</span> <span>{icon}</span></Link>
      </li>
    </>
  )
});