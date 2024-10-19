import { component$ } from "@builder.io/qwik";
import  imageAnimeObject from '~/media/infraestructure/provider/anime';



export default component$(() => {
  return (
    <>
      <article>
        <div >
          {imageAnimeObject.map(({imagen_main: Image, title}, index) => (
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