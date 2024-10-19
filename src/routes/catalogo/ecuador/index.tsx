import { component$ } from "@builder.io/qwik";
import imageEcuObject from '~/media/infraestructure/provider/ecuador';

export default component$(() => {
  return (
    <>
      <article>
        <div >
          { imageEcuObject.map(({imagen_main: Image, title}, index) => (
            <div key={index}>
              <Image/>
              <p>{title}</p>
            </div>

          ))}
        </div>
      </article>
    </>
  );
});