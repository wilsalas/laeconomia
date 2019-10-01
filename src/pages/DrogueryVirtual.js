import React from 'react';
import { CategoryCircleComponent } from '../components/Category';
import BannerComponent from '../components/Banner';
import { TabContentDrogueryComponent } from '../components/ContentProducts';


export default function DrogueryVirtual() {

// code subcategorie alimentos
const codeProduct = '01001';

    return (
        <>
            <CategoryCircleComponent />
            <hr className="hr-categories" />
            <TabContentDrogueryComponent  codeProduct={codeProduct}/>
            {/* <GroupCategoryComponent codeProduct={codeProduct} type={atob(typeSearch)} /> */}
            <BannerComponent />
        </>
    );
}