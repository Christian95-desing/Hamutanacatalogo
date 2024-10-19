import { component$ } from '@builder.io/qwik';

import style from "./discoun-bar-style.module.css"

export default component$(({ discount }: { discount: string }) => {
  return (
    <>
      <section class={`${style.container} fixed bottom-0 left-0 right-0 text-white bg-black z-50 shadow-inner`}>
        <div class="container mx-auto px-4 text-xs">
          <p >*Tiene activo un cupon del <b>{discount}%</b> de descuento</p>
        </div>
      </section>
    </>
  );
});
