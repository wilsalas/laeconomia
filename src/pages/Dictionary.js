import React from 'react';
import { SearchMedicineComponent } from '../components/Search';
import BannerComponent from '../components/Banner';
import SliderComponent from '../components/Slider';
import { InterestContentComponent } from '../components/ContentProducts';
import { ModalDictionary } from '../components/PopUp';

export default function Dictionary() {
    return (
        <>
            <SliderComponent typeBanner={4} />
            <SearchMedicineComponent />
            <InterestContentComponent />
            <BannerComponent />
            <ModalDictionary />
        </>
    );
}