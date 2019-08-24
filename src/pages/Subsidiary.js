import React from 'react';
import { InterestContentComponent } from '../components/ContentProducts';
import BannerComponent from '../components/Banner';

export default function Subsidiary() {
    return (
        <>
            <iframe width="100%" height="500px" src="https://www.droguerialaeconomia.com/economia/site/mapsucursales" title="iframe for sucursale" />
            <InterestContentComponent />
            <BannerComponent />
        </>
    );
}
