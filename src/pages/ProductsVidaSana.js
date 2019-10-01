import React from 'react';
import { VerticalProductComponent } from '../components/Product';
import SliderComponent from '../components/Slider';
import {
    Container
} from 'reactstrap';

export default function SearchProducts() {

    const productsSearch = JSON.parse(localStorage.getItem("productsSearch"))
    const products = Array.isArray(productsSearch) ? productsSearch : [productsSearch];
   

    return (
        <>
                {/* <SliderComponent typeBanner={1}/> */}
            <Container>
                <br/>
                <VerticalProductComponent  products={products} col={3} maxwidth={1} />
            </Container>
        </>
    )
}



