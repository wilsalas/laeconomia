import React from 'react';
import SliderComponent from '../components/Slider';
import { GroupCategoryComponent } from '../components/Category';
import BannerComponent from '../components/Banner';
import { ROUTES } from '../managers/api/ApiManager';

export default function BaCare() {
    return (
        <>
            <SliderComponent routes={ROUTES.MAIN} banner />
            <GroupCategoryComponent />
            <BannerComponent />
        </>
    );
}