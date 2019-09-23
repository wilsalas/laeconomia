import React from 'react';
import { SearchMedicineComponent } from '../components/Search';
import BannerComponent from '../components/Banner';
import SliderComponent from '../components/Slider';
import { InterestContentComponent } from '../components/ContentProducts';
import { ROUTES } from '../managers/api/ApiManager';
import { ModalDictionary } from '../components/PopUp';

export default function Dictionary() {
    return (
        <>
            <SliderComponent routes={ROUTES.MAIN} banner />
            <SearchMedicineComponent />
            <InterestContentComponent />
            <BannerComponent />
            <ModalDictionary />
        </>
    );
}