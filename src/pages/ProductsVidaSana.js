import React, { useState, useEffect } from 'react';
import { VerticalProductComponent } from '../components/Product';
import SliderComponent from '../components/Slider';
import {
    Container
} from 'reactstrap';
import { VIDA_SANA_API } from '../managers/api/ApiManager';


export default function VidaSana() {

    const [getRetrieveVidaSanaOffers, setRetrieveVidaSanaOffers] = useState([]);


    useEffect(() => {
        funRetrieveVidaSanaOffers();
    },[])

    const funRetrieveVidaSanaOffers = async () => {
        let resRetrieveVidaSanaOffers = await VIDA_SANA_API.GET.RetrieveVidaSanaOffers(localStorage.getItem("city"));

        if (resRetrieveVidaSanaOffers) {
            setRetrieveVidaSanaOffers(resRetrieveVidaSanaOffers.message);
        }
    }


    console.log(getRetrieveVidaSanaOffers);


    return (
        <>
            <SliderComponent typeBanner={6} />
            <Container>
                <br />
                <VerticalProductComponent products={getRetrieveVidaSanaOffers} col={3} maxwidth={1} />
            </Container>
        </>
    )
}



