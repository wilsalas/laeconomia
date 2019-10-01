import React from 'react';
// import PromoComponent from '../components/Promo';
import SliderComponent from '../components/Slider';
import { CategoryComponent } from '../components/Category';
import { TabContentComponent, InterestContentComponent, SponsorShipsComponent } from '../components/ContentProducts';
import BannerComponent from '../components/Banner';

export default function App() {
  return (
    <>
      <SliderComponent typeBanner={1}/>
      <CategoryComponent />
      <TabContentComponent />
      {/* <PromoComponent /> */}
      {/* <SponsorShipsComponent /> */}
      <InterestContentComponent />
      <BannerComponent />
    </>
  );
}
