import React from 'react';
import BabyCareComponent from '../components/BabyCare';
import { GroupCategoryComponent } from '../components/Category';
import BannerComponent from '../components/Banner';

export default function DrogueryVirtual(props) {

    const codeProduct = props.match.params.code ? props.match.params.code : null;
    const typeSearch = props.match.params.type ? props.match.params.type : "";



    return (
        <>
            <BabyCareComponent />
            <GroupCategoryComponent codeProduct={codeProduct} type={atob(typeSearch)} />
            <BannerComponent />
        </>
    );
}