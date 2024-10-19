import { component$ } from '@builder.io/qwik';
import { HamutanaLogo } from '../icons/HamutanaLogo';

export default component$(() => {
  
  return(
    <>
      <aside class={["fixed z-40  left-0 top-0 bottom-0  bg-[#48a8b9]"]}>
        <div class="mt-2 pr-1 md:mt-4 md:pr-2">
          <HamutanaLogo width={50} color_blue="#fff" color_black="#fff" color_white="#fff" color_fill="#fff" />
        </div>
      </aside>
    </>
  )
});