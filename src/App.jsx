import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { WhatWeDo } from './components/WhatWeDo/WhatWeDo';
import { OrganicGoods } from './components/OrganicGoods/OrganicGoods';
import { ArticlesAndTips } from './components/ArticlesAndTips/ArticlesAndTips';
import { OurPartners } from './components/OurPartners/OurPartners';
import { Footer } from './components/Footer/Footer';
import { FarmLocationsMap } from './components/FarmLocationsMap/FarmLocationsMap';
import { ScrollUp } from './components/Common/ScrollUp/ScrollUp';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Favicon from 'react-favicon';
// import { Suspense } from 'react';
// import React from 'react';
// const Header = React.lazy(() => import('../src/components/Header/Header'));
// const Hero = React.lazy(() => import('../src/components/Hero/Hero'));
// const WhatWeDo = React.lazy(
//   () => import('../src/components/WhatWeDo/WhatWeDo')
// );
// const OrganicGoods = React.lazy(
//   () => import('../src/components/OrganicGoods/OrganicGoods')
// );
// const ArticlesAndTips = React.lazy(
//   () => import('../src/components/ArticlesAndTips/ArticlesAndTips')
// );
// const OurPartners = React.lazy(
//   () => import('../src/components/OurPartners/OurPartners')
// );
// const Footer = React.lazy(() => import('../src/components/Footer/Footer'));
// const FarmLocationsMap = React.lazy(
//   () => import('../src/components/FarmLocationsMap/FarmLocationsMap')
// );
// const ScrollUp = React.lazy(
//   () => import('../src/components/Common/ScrollUp/ScrollUp')
// );

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    // <>
    //   <Suspense fallback={<div>Loading...</div>}>
    //     <Header />
    //     <Hero />
    //     <WhatWeDo />
    //     <OrganicGoods />
    //     <ArticlesAndTips />
    //     <OurPartners />
    //     <FarmLocationsMap />
    //     <Footer />
    //     <ScrollUp />
    //   </Suspense>
    // </>

    <>
      <Favicon url="favicon.ico" />
      <Header />
      <Hero />
      <WhatWeDo />
      <OrganicGoods />
      <ArticlesAndTips />
      <FarmLocationsMap />
      <OurPartners />
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
