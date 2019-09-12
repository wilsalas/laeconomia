import React from 'react';
import BabyCareComponent from '../components/BabyCare';
import { GroupCategoryComponent } from '../components/Category';
import BannerComponent from '../components/Banner';

export default function DrogueryVirtual(props) {

    const codeProduct = props.match.params.code ? props.match.params.code : null;

    return (
        <>
            <BabyCareComponent />
            <GroupCategoryComponent codeProduct={codeProduct} type="droguery"/>
            <BannerComponent />
        </>
    );
}