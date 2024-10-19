import { component$ } from "@builder.io/qwik";
import  imageCarnavalObject from '~/media/infraestructure/provider/canaval';



export default component$(() => {
  return (
    <>
      <article>
        <div >
          {imageCarnavalObject.map(({imagen_main: Image, title}, index) => (
            <div key={index}>
              <Image />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </article>
    </>
  );
});