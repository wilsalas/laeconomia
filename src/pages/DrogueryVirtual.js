import React from 'react';
import { CategoryCircleComponent } from '../components/Category';
import BannerComponent from '../components/Banner';
import { TabContentDrogueryComponent } from '../components/ContentProducts';


export default function DrogueryVirtual() {
    return (
        <>
            <CategoryCircleComponent />
            <hr className="hr-categories" />
            <TabContentDrogueryComponent />
            {/* <GroupCategoryComponent codeProduct={codeProduct} type={atob(typeSearch)} /> */}
            <BannerComponent />
        </>
    );
}