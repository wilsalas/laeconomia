import React from 'react';
import SliderComponent from '../components/Slider';
import { GroupCategoryComponent } from '../components/Category';
import BannerComponent from '../components/Banner';
import { ROUTES } from '../managers/api/ApiManager';

export default function BaCare() {

    // code baby care higiene oral
    const codeProduct = btoa('07005');

    return (
        <>
            <SliderComponent routes={ROUTES.MAIN} banner />
            <GroupCategoryComponent codeProduct={codeProduct} type="baby" />
            <BannerComponent />
        </>
    );
}