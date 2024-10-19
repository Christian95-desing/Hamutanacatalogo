import { component$, Slot, } from "@builder.io/qwik";
// import { routeLoader$ } from "@builder.io/qwik-city";
import { type RequestHandler } from "@builder.io/qwik-city";
import DiscountBar from "~/components/Discount-Action/discount-bar";
import Footer from "~/components/starter/footer/footer";

import Header from "~/components/starter/header/header";
import { useRouteDiscountLoader, } from ".";
// import Footer from "~/components/starter/footer/footer";

// import Sidenav from "~/components/starter/sidenav/sidenav";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};



export default component$(() => {
  const params = useRouteDiscountLoader()
  const discount = params.value
  return (
    <>
      <Header />
        <main class='container mx-auto'>
          <Slot />
        </main>
      <Footer has_discount={!!discount} leadRef={discount ? discount.leadRef : ''}/>
      {discount && (<DiscountBar discount={discount.discount}/>)}
    </>
  );
});
