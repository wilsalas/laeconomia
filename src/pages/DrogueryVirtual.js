import React from 'react';
import BabyCareComponent from '../components/BabyCare';
import { GroupCategoryComponent } from '../components/Category';
import BannerComponent from '../components/Banner';

export default function DrogueryVirtual() {
    return (
        <>
            <BabyCareComponent />
            <GroupCategoryComponent />
            <BannerComponent />
        </>
    );
}